<template>
  <fwb-breadcrumb v-if="record" solid>
    <router-link v-slot="{ href }" :to="{ name: 'welcome' }" custom>
      <fwb-breadcrumb-item :href="href" home>{{
        t("breadcrumb.home")
      }}</fwb-breadcrumb-item>
    </router-link>
    <router-link v-slot="{ href }" :to="{ name: 'teams' }" custom>
      <fwb-breadcrumb-item :href="href">{{
        t("breadcrumb.teams")
      }}</fwb-breadcrumb-item>
    </router-link>
    <router-link
      v-slot="{ href }"
      :to="{ name: 'showTeam', params: { teamId: record.slug } }"
      custom
    >
      <fwb-breadcrumb-item :href="href">
        {{ record.name }}
      </fwb-breadcrumb-item>
    </router-link>
    <router-link
      v-slot="{ href }"
      :to="{ name: 'updateTeam', params: { teamId: record.slug } }"
      custom
    >
      <fwb-breadcrumb-item :href="href">{{
        t("breadcrumb.update")
      }}</fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <content-header v-if="record" :title="t('teams.title.update', [record.name])">
    <cancel-action
      :to="(route.query.redirect as string) || { name: 'teams' }"
    />
  </content-header>

  <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
    <fwb-input
      v-model="values.slug"
      :label="t('common.slug')"
      :validation-status="v.slug.$error ? 'error' : undefined"
    >
      <template v-if="v.slug.$error" #validationMessage>
        {{ v.slug.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.name"
      :label="t('teams.name')"
      :validation-status="v.name.$error ? 'error' : undefined"
    >
      <template v-if="v.name.$error" #validationMessage>
        {{ v.name.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-button color="default" size="lg" :loading="teamStore.loading">
      {{ t("actions.update") }}
    </fwb-button>
  </form>
</template>

<script setup lang="ts">
import {
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbInput,
  FwbButton,
} from "flowbite-vue";

import { ContentHeader, CancelAction } from "../../components";

import { reactive, onMounted, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useTeamStore } from "../../store/teams";
import { useNotifyStore } from "../../store/notify";

import type { team, notification } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const teamStore = useTeamStore();
const notifyStore = useNotifyStore();
const { currentTeam } = storeToRefs(teamStore);

const route = useRoute();
const router = useRouter();

const record = currentTeam as team;

const values = reactive({
  slug: "" as string,
  name: "" as string,
});

const rules = {
  slug: {
    minLength: minLength(3),
    maxLength: maxLength(255),
  },
  name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(255),
  },
};

const v = useVuelidate(rules, values);

async function submit() {
  const isValid = await v.value.$validate();

  if (isValid) {
    teamStore
      .updateTeam(route.params.teamId.toString(), values)
      .then((response: team | notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        const result = <team>response;

        notifyStore.addAlert({
          kind: "success",
          message: t("teams.update.success"),
        });

        router.push(
          (route.query.redirect as string) || {
            name: "showTeam",
            params: { teamId: result.slug },
          },
        );
      })
      .catch(() => {});
  }
}

onMounted(async () => {
  await router.isReady();
  teamStore.fetchTeam(<string>route.params.teamId);
});

watch(record, (newTeam) => {
  values.slug = <string>newTeam.slug;
  values.name = <string>newTeam.name;
});
</script>

<script lang="ts">
export default {
  name: "TeamUpdate",
};
</script>
