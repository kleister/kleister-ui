<template>
  <fwb-breadcrumb solid class="m-5">
    <router-link :to="{ name: 'welcome' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href" home> Home </fwb-breadcrumb-item>
    </router-link>
    <router-link :to="{ name: 'teams' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href"> Teams </fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <ContentHeader title="Teams">
    <CreateAction :to="{ name: 'createTeam' }" />
  </ContentHeader>

  <fwb-table hoverable v-if="getTeams.length > 0" class="m-5">
    <fwb-table-head>
      <fwb-table-head-cell class="w-1/3">Slug</fwb-table-head-cell>
      <fwb-table-head-cell>Name</fwb-table-head-cell>
      <fwb-table-head-cell class="w-64"
        ><span class="sr-only">Actions</span></fwb-table-head-cell
      >
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="team in getTeams" :key="team.id">
        <fwb-table-cell>{{ team.slug }}</fwb-table-cell>
        <fwb-table-cell>{{ team.name }}</fwb-table-cell>
        <fwb-table-cell>
          <ShowAction
            :to="{ name: 'showTeam', params: { teamId: team.slug } }"
          />
          <UpdateAction
            :to="{ name: 'updateTeam', params: { teamId: team.slug } }"
          />
          <DeleteAction
            :handler="deleteRecord(team.slug)"
            :element="team.name"
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
      No teams found
    </h2>
    <p
      class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400"
    >
      Maybe you want to
      <router-link :to="{ name: 'createTeam' }" class="hover:underline"
        >create a team</router-link
      >?
    </p>
  </div>
</template>

<script setup>
import {
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";

import {
  ContentHeader,
  CreateAction,
  ShowAction,
  UpdateAction,
  DeleteAction,
} from "../../components";

import { onMounted, computed } from "vue";
import { useTeamStore } from "../../store/teams";

const store = useTeamStore();

const getTeams = computed(() => {
  return store.getTeams;
});

function deleteRecord(slug) {
  return () => {
    store
      .deleteTeam(slug)
      .then(() => {
        store.fetchTeams();
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

onMounted(() => {
  store.fetchTeams();
});
</script>
