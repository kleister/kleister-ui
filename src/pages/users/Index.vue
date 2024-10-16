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
  </fwb-breadcrumb>

  <content-header :title="t('users.title.index')">
    <fwb-button
      href="#"
      color="alternative"
      class="ml-3"
      :loading="userStore.loading"
      @click.prevent="refreshUsers"
    >
      <font-awesome-icon :icon="['fas', 'refresh']" class="pr-1" />
      {{ t("actions.refresh") }}
    </fwb-button>
    <create-action :to="{ name: 'createUser' }" />
  </content-header>

  <fwb-table v-if="getUsers.users && getUsers.users.length > 0" hoverable>
    <fwb-table-head>
      <fwb-table-head-cell class="md:w-52">{{
        t("users.username")
      }}</fwb-table-head-cell>
      <fwb-table-head-cell>{{ t("users.email") }}</fwb-table-head-cell>
      <fwb-table-head-cell class="w-28">{{
        t("users.admin")
      }}</fwb-table-head-cell>
      <fwb-table-head-cell class="w-28">{{
        t("users.active")
      }}</fwb-table-head-cell>
      <fwb-table-head-cell class="w-80"
        ><span class="sr-only">{{
          t("common.actions")
        }}</span></fwb-table-head-cell
      >
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="row in getUsers.users" :key="row.id">
        <fwb-table-cell>{{ row.username }}</fwb-table-cell>
        <fwb-table-cell>{{ row.email }}</fwb-table-cell>
        <fwb-table-cell>
          <font-awesome-icon
            v-if="row.admin"
            :icon="['fas', 'check']"
            :title="t('checkbox.enabled')"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'ban']"
            :title="t('checkbox.disabled')"
          />
        </fwb-table-cell>
        <fwb-table-cell>
          <font-awesome-icon
            v-if="row.active"
            :icon="['fas', 'check']"
            :title="t('checkbox.enabled')"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'ban']"
            :title="t('checkbox.disabled')"
          />
        </fwb-table-cell>
        <fwb-table-cell>
          <show-action
            :to="{ name: 'showUser', params: { userId: row.username } }"
            tag="link"
          />
          <update-action
            :to="{ name: 'updateUser', params: { userId: row.username } }"
            tag="link"
          />
          <delete-action
            :handler="deleteRecord(<string>row.username)"
            :element="<string>row.username"
            tag="link"
          />
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>

  <div
    v-else
    class="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-center"
  >
    <h2
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      {{ t("users.no_entries") }}
    </h2>
    <i18n-t
      keypath="users.create.question"
      tag="p"
      for="users.create.link"
      class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400"
    >
      <router-link :to="{ name: 'createUser' }" class="hover:underline">{{
        $t("users.create.link")
      }}</router-link>
    </i18n-t>
  </div>
</template>

<script setup lang="ts">
import {
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
  FwbButton,
} from "flowbite-vue";

import {
  ContentHeader,
  CreateAction,
  ShowAction,
  UpdateAction,
  DeleteAction,
} from "../../components";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useUserStore } from "../../store/users";
import { useErrorStore } from "../../store/error";

import type { notification } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const userStore = useUserStore();
const errorStore = useErrorStore();
const { getUsers } = storeToRefs(userStore);

function refreshUsers() {
  userStore.fetchUsers();
}

function deleteRecord(username: string) {
  return () => {
    userStore
      .deleteUser(username)
      .then((response: notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        errorStore.addError({
          kind: "success",
          message: <string>response.message,
        });

        userStore.fetchUsers();
      })
      .catch(() => {});
  };
}

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<script lang="ts">
export default {
  name: "UserIndex",
};
</script>
