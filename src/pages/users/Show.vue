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
  </fwb-breadcrumb>

  <content-header
    v-if="record"
    :title="t('users.title.show', [record.username])"
  >
    <back-action :to="{ name: 'users' }" />
    <update-action
      :to="{
        name: 'updateUser',
        params: { userId: record.username },
        query: { redirect: route.fullPath },
      }"
    />
    <delete-action
      :handler="deleteRecord(<string>record.username)"
      :element="<string>record.username"
    />
  </content-header>

  <fwb-table v-if="record" hoverable>
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-head-cell class="w-1/3 text-right">{{
          t("common.id")
        }}</fwb-table-head-cell>
        <fwb-table-cell>{{ record.id }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">{{
          t("users.username")
        }}</fwb-table-head-cell>
        <fwb-table-cell>{{ record.username }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">{{
          t("users.email")
        }}</fwb-table-head-cell>
        <fwb-table-cell>{{ record.email }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row v-if="record.fullname">
        <fwb-table-head-cell class="text-right">{{
          t("users.fullname")
        }}</fwb-table-head-cell>
        <fwb-table-cell>{{ record.fullname }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">{{
          t("users.admin")
        }}</fwb-table-head-cell>
        <fwb-table-cell>
          <font-awesome-icon
            v-if="record.admin"
            :icon="['fas', 'check']"
            :title="t('checkbox.enabled')"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'ban']"
            :title="t('checkbox.disabled')"
          />
        </fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">{{
          t("users.active")
        }}</fwb-table-head-cell>
        <fwb-table-cell>
          <font-awesome-icon
            v-if="record.active"
            :icon="['fas', 'check']"
            :title="t('checkbox.enabled')"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'ban']"
            :title="t('checkbox.disabled')"
          />
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup lang="ts">
import {
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";

import {
  ContentHeader,
  BackAction,
  UpdateAction,
  DeleteAction,
} from "../../components";

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useUserStore } from "../../store/users";

import type { user } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);

const route = useRoute();
const router = useRouter();

const record = currentUser as user;

function deleteRecord(username: string) {
  return () => {
    userStore
      .deleteUser(username)
      .then(() => {
        router.push({ name: "users" });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

onMounted(async () => {
  await router.isReady();
  userStore.fetchUser(<string>route.params.userId);
});
</script>

<script lang="ts">
export default {
  name: "UserShow",
};
</script>
