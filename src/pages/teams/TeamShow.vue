<template>
  <fwb-breadcrumb solid class="m-5">
    <router-link :to="{ name: 'welcome' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href" home> Home </fwb-breadcrumb-item>
    </router-link>
    <router-link :to="{ name: 'teams' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href"> Teams </fwb-breadcrumb-item>
    </router-link>
    <router-link
      :to="{ name: 'showTeam', params: { teamId: team.slug } }"
      v-slot="{ href }"
      custom
    >
      <fwb-breadcrumb-item :href="href">
        {{ team.name }}
      </fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <ContentHeader title="Teams">
    <UpdateAction
      :to="{ name: 'updateTeam', params: { teamId: team.slug } }"
      tag="button"
    />
    <DeleteAction
      tag="button"
      :handler="deleteRecord(team.slug)"
      :element="team.name"
    />
  </ContentHeader>

  <fwb-table hoverable class="m-5">
    <fwb-table-body>
      <fwb-table-row>
        <fwb-table-head-cell class="w-1/3 text-right">ID</fwb-table-head-cell>
        <fwb-table-cell>{{ team.id }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">Slug</fwb-table-head-cell>
        <fwb-table-cell>{{ team.slug }}</fwb-table-cell>
      </fwb-table-row>
      <fwb-table-row>
        <fwb-table-head-cell class="text-right">Name</fwb-table-head-cell>
        <fwb-table-cell>{{ team.name }}</fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<script setup>
import {
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";

import { ContentHeader, UpdateAction, DeleteAction } from "../../components";

import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTeamStore } from "../../store/teams";

const route = useRoute();
const router = useRouter();
const store = useTeamStore();

const team = computed(() => {
  return store.currentTeam;
});

function deleteRecord(slug) {
  return () => {
    store
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
  store.fetchTeam(route.params.teamId);
});
</script>
