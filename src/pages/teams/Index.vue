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
  </fwb-breadcrumb>

  <content-header :title="t('teams.title.index')">
    <fwb-button
      href="#"
      color="alternative"
      class="ml-3"
      :loading="teamStore.loading"
      @click.prevent="refreshTeams"
    >
      <font-awesome-icon :icon="['fas', 'refresh']" class="pr-1" />
      {{ t("actions.refresh") }}
    </fwb-button>
    <create-action :to="{ name: 'createTeam' }" />
  </content-header>

  <fwb-table v-if="getTeams.teams && getTeams.teams.length > 0" hoverable>
    <fwb-table-head>
      <fwb-table-head-cell class="md:w-52">{{
        t("common.slug")
      }}</fwb-table-head-cell>
      <fwb-table-head-cell>{{ t("teams.name") }}</fwb-table-head-cell>
      <fwb-table-head-cell class="w-80"
        ><span class="sr-only">{{
          t("common.actions")
        }}</span></fwb-table-head-cell
      >
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="row in getTeams.teams" :key="row.id">
        <fwb-table-cell>{{ row.slug }}</fwb-table-cell>
        <fwb-table-cell>{{ row.name }}</fwb-table-cell>
        <fwb-table-cell>
          <show-action
            :to="{ name: 'showTeam', params: { teamId: row.slug } }"
            tag="link"
          />
          <update-action
            :to="{ name: 'updateTeam', params: { teamId: row.slug } }"
            tag="link"
          />
          <delete-action
            :handler="deleteRecord(<string>row.slug)"
            :element="<string>row.name"
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
      {{ t("teams.no_entries") }}
    </h2>
    <i18n-t
      keypath="teams.create.question"
      tag="p"
      for="teams.create.link"
      class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400"
    >
      <router-link :to="{ name: 'createTeam' }" class="hover:underline">{{
        $t("teams.create.link")
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
import { useTeamStore } from "../../store/teams";
import { useNotifyStore } from "../../store/notify";

import type { notification } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const teamStore = useTeamStore();
const notifyStore = useNotifyStore();
const { getTeams } = storeToRefs(teamStore);

function refreshTeams() {
  teamStore.fetchTeams();
}

function deleteRecord(slug: string) {
  return () => {
    teamStore
      .deleteTeam(slug)
      .then((response: notification) => {
        if ("status" in response && response.status !== 200) {
          throw response;
        }

        notifyStore.addAlert({
          kind: "success",
          message: <string>response.message,
        });

        teamStore.fetchTeams();
      })
      .catch(() => {});
  };
}

onMounted(() => {
  teamStore.fetchTeams();
});
</script>

<script lang="ts">
export default {
  name: "TeamIndex",
};
</script>
