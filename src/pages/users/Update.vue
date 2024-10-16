<template>
  <fwb-breadcrumb v-if="record" solid>
    <router-link v-slot="{ href }" :to="{ name: 'welcome' }" custom>
      <fwb-breadcrumb-item :href="href" home>{{
        t("breadcrumb.home")
      }}</fwb-breadcrumb-item>
    </router-link>
    <router-link v-slot="{ href }" :to="{ name: 'users' }" custom>
      <fwb-breadcrumb-item :href="href">{{
        t("breadcrumb.users")
      }}</fwb-breadcrumb-item>
    </router-link>
    <router-link
      v-slot="{ href }"
      :to="{ name: 'showUser', params: { userId: record.username } }"
      custom
    >
      <fwb-breadcrumb-item :href="href">
        {{ record.username }}
      </fwb-breadcrumb-item>
    </router-link>
    <router-link
      v-slot="{ href }"
      :to="{ name: 'updateUser', params: { userId: record.username } }"
      custom
    >
      <fwb-breadcrumb-item :href="href">{{
        t("breadcrumb.update")
      }}</fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <content-header
    v-if="record"
    :title="t('users.title.update', [record.username])"
  >
    <cancel-action
      :to="(route.query.redirect as string) || { name: 'users' }"
    />
  </content-header>

  <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
    <fwb-input
      v-model="values.username"
      :label="t('users.username')"
      :validation-status="v.username.$error ? 'error' : undefined"
    >
      <template v-if="v.username.$error" #validationMessage>
        {{ v.username.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.password"
      :label="t('users.password')"
      type="password"
      :validation-status="v.password.$error ? 'error' : undefined"
    >
      <template v-if="v.password.$error" #validationMessage>
        {{ v.password.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.email"
      :label="t('users.email')"
      :validation-status="v.email.$error ? 'error' : undefined"
    >
      <template v-if="v.email.$error" #validationMessage>
        {{ v.email.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.fullname"
      :label="t('users.fullname')"
      :validation-status="v.fullname.$error ? 'error' : undefined"
    >
      <template v-if="v.fullname.$error" #validationMessage>
        {{ v.fullname.$errors[0].$message }}
      </template>
    </fwb-input>

    <div>
      <fwb-toggle v-model="values.admin" :label="t('users.is_admin')" />
    </div>

    <div>
      <fwb-toggle v-model="values.active" :label="t('users.is_active')" />
    </div>

    <fwb-button color="default" size="lg" :loading="userStore.loading">
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
  FwbToggle,
} from "flowbite-vue";

import { ContentHeader, CancelAction } from "../../components";

import { reactive, onMounted, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useUserStore } from "../../store/users";
import { useNotifyStore } from "../../store/notify";

import type { user, notification } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const userStore = useUserStore();
const notifyStore = useNotifyStore();
const { currentUser } = storeToRefs(userStore);

const route = useRoute();
const router = useRouter();

const record = currentUser as user;

const values = reactive({
  username: "" as string,
  password: "" as string,
  email: "" as string,
  fullname: "" as string,
  admin: false as boolean,
  active: false as boolean,
});

const rules = {
  username: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(255),
  },
  password: {
    minLength: minLength(3),
    maxLength: maxLength(255),
  },
  email: {
    required,
    email,
  },
  fullname: {
    minLength: minLength(3),
    maxLength: maxLength(255),
  },
};

const v = useVuelidate(rules, values);

async function submit() {
  const isValid = await v.value.$validate();

  if (isValid) {
    userStore
      .updateUser(route.params.userId.toString(), values)
      .then((response: user | notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        const result = <user>response;

        notifyStore.addAlert({
          kind: "success",
          message: t("users.update.success"),
        });

        router.push(
          (route.query.redirect as string) || {
            name: "showUser",
            params: { userId: result.username },
          },
        );
      })
      .catch(() => {});
  }
}

onMounted(async () => {
  await router.isReady();
  userStore.fetchUser(<string>route.params.userId);
});

watch(record, (newUser) => {
  values.username = <string>newUser.username;
  values.email = <string>newUser.email;
  values.fullname = <string>newUser.fullname;
  values.admin = <boolean>newUser.admin;
  values.active = <boolean>newUser.active;
});
</script>

<script lang="ts">
export default {
  name: "UserUpdate",
};
</script>
