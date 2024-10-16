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
  </fwb-breadcrumb>

  <content-header v-if="record" :title="t('teams.title.show', [record.name])">
    <back-action :to="{ name: 'teams' }" />
    <update-action
      :to="{
        name: 'updateTeam',
        params: { teamId: record.slug },
        query: { redirect: route.fullPath },
      }"
    />
    <delete-action
      :handler="deleteRecord(<string>record.slug)"
      :element="<string>record.name"
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
          t("common.slug")
        }}</fwb-table-head-cell>
        <fwb-table-cell>{{ record.slug }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">{{
          t("teams.name")
        }}</fwb-table-head-cell>
        <fwb-table-cell>{{ record.name }}</fwb-table-cell>
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
import { useTeamStore } from "../../store/teams";

import type { team } from "../../client/types.gen";

const { t } = useI18n({
  useScope: "global",
});

const teamStore = useTeamStore();
const { currentTeam } = storeToRefs(teamStore);

const route = useRoute();
const router = useRouter();

const record = currentTeam as team;

function deleteRecord(slug: string) {
  return () => {
    teamStore
      .deleteTeam(slug)
      .then(() => {
        router.push({ name: "teams" });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

onMounted(async () => {
  await router.isReady();
  teamStore.fetchTeam(<string>route.params.teamId);
});
</script>

<script lang="ts">
export default {
  name: "TeamShow",
};
</script>
