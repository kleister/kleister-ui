<template>
  <fwb-breadcrumb solid>
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
    <router-link v-slot="{ href }" :to="{ name: 'createTeam' }" custom>
      <fwb-breadcrumb-item :href="href">{{
        t("breadcrumb.create")
      }}</fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <content-header :title="t('teams.title.create')">
    <cancel-action :to="{ name: 'teams' }" />
  </content-header>

  <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
    <fwb-input
      v-model="values.slug"
      placeholder="Slug"
      label="Slug"
      :validation-status="v.slug.$error ? 'error' : undefined"
    >
      <template v-if="v.slug.$error" #validationMessage>
        {{ v.slug.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.name"
      placeholder="Name"
      label="Name"
      :validation-status="v.name.$error ? 'error' : undefined"
    >
      <template v-if="v.name.$error" #validationMessage>
        {{ v.name.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-button color="default" size="lg" :loading="teamStore.loading">
      Submit
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

import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useTeamStore } from "../../store/teams";
import { useErrorStore } from "../../store/error";

import type { team, notification } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const teamStore = useTeamStore();
const errorStore = useErrorStore();

const router = useRouter();

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
      .createTeam(values)
      .then((response: team | notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        const result = <team>response;

        errorStore.addError({
          kind: "success",
          message: "Successfully created",
        });

        router.push({ name: "showTeam", params: { teamId: result.slug } });
      })
      .catch(() => {});
  }
}
</script>

<script lang="ts">
export default {
  name: "TeamCreate",
};
</script>
