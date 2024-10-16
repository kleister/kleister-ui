<template>
  <fwb-breadcrumb solid>
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
    <router-link v-slot="{ href }" :to="{ name: 'createUser' }" custom>
      <fwb-breadcrumb-item :href="href">{{
        t("breadcrumb.create")
      }}</fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <content-header :title="t('users.title.create')">
    <cancel-action :to="{ name: 'users' }" />
  </content-header>

  <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
    <fwb-input
      v-model="values.username"
      placeholder="Username"
      label="Username"
      :validation-status="v.username.$error ? 'error' : undefined"
    >
      <template v-if="v.username.$error" #validationMessage>
        {{ v.username.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.password"
      placeholder="Password"
      label="Password"
      type="password"
      :validation-status="v.password.$error ? 'error' : undefined"
    >
      <template v-if="v.password.$error" #validationMessage>
        {{ v.password.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.email"
      placeholder="Email"
      label="Email"
      :validation-status="v.email.$error ? 'error' : undefined"
    >
      <template v-if="v.email.$error" #validationMessage>
        {{ v.email.$errors[0].$message }}
      </template>
    </fwb-input>

    <fwb-input
      v-model="values.fullname"
      placeholder="Fullname"
      label="Fullname"
      :validation-status="v.fullname.$error ? 'error' : undefined"
    >
      <template v-if="v.fullname.$error" #validationMessage>
        {{ v.fullname.$errors[0].$message }}
      </template>
    </fwb-input>

    <div>
      <fwb-toggle v-model="values.admin" label="Check if user is admin" />
    </div>

    <div>
      <fwb-toggle v-model="values.active" label="Check if user is active" />
    </div>

    <fwb-button color="default" size="lg" :loading="userStore.loading">
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
  FwbToggle,
} from "flowbite-vue";

import { ContentHeader, CancelAction } from "../../components";

import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useUserStore } from "../../store/users";
import { useErrorStore } from "../../store/error";

import type { user, notification } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const userStore = useUserStore();
const errorStore = useErrorStore();

const router = useRouter();

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
    required,
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
      .createUser(values)
      .then((response: user | notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        const result = <user>response;

        errorStore.addError({
          kind: "success",
          message: "Successfully created",
        });

        router.push({ name: "showUser", params: { userId: result.username } });
      })
      .catch(() => {});
  }
}
</script>

<script lang="ts">
export default {
  name: "UserCreate",
};
</script>
