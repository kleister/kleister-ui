<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>

          <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
            <fwb-input
              v-model="values.username"
              placeholder="Username"
              label="Username"
              :validation-status="v.username.$error ? 'error' : undefined"
            />

            <fwb-input
              v-model="values.password"
              placeholder="Password"
              label="Password"
              type="password"
              :validation-status="v.password.$error ? 'error' : undefined"
            />

            <fwb-button
              color="default"
              size="lg"
              class="w-full"
              :loading="authStore.loading"
            >
              Submit
            </fwb-button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FwbInput, FwbButton } from "flowbite-vue";

import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth";
import { useErrorStore } from "../../store/error";

import type { auth_token, notification } from "../../client/types.gen";

const authStore = useAuthStore();
const errorStore = useErrorStore();

const route = useRoute();
const router = useRouter();

const values = reactive({
  username: "" as string,
  password: "" as string,
});

const rules = {
  username: { required },
  password: { required },
};

const v = useVuelidate(rules, values);

async function submit() {
  const isValid = await v.value.$validate();

  if (isValid) {
    authStore
      .login(values.username, values.password)
      .then((response: auth_token | notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        errorStore.addError({
          kind: "success",
          message: "Successfully authenticated",
        });

        router.push((route.query.redirect as string) || "/");
      })
      .catch(() => {});
  }
}
</script>

<script lang="ts">
export default {
  name: "ProfileLogin",
};
</script>
