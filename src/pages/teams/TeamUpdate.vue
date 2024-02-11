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
    <router-link
      :to="{ name: 'updateTeam', params: { teamId: team.slug } }"
      v-slot="{ href }"
      custom
    >
      <fwb-breadcrumb-item :href="href"> Edit </fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <ContentHeader :title="team.name">
    <CancelAction :to="{ name: 'teams' }" />
  </ContentHeader>

  <div class="m-5">
    <FormKit
      type="form"
      submit-label="Update"
      id="update"
      name="updateTeam"
      @submit="submit"
    >
      <FormKit
        type="text"
        name="slug"
        id="slug"
        validation="required|length:3,64"
        label="Slug"
        help="Slug of your team"
      />
      <FormKit
        type="text"
        name="name"
        id="name"
        validation="required|length:3,64"
        label="Name"
        help="Name of your team"
      />
    </FormKit>
  </div>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from "flowbite-vue";

import { ContentHeader, CancelAction } from "../../components";

import { onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { reset } from "@formkit/core";
import { useTeamStore } from "../../store/teams";

const store = useTeamStore();
const route = useRoute();
const router = useRouter();

const team = computed(() => {
  return store.currentTeam;
});

function submit(data) {
  return store
    .updateTeam(team.value.slug, data)
    .then((resp) => {
      reset("update", resp.team);
      router.push({ name: "showTeam", params: { teamId: resp.team.slug } });
    })
    .catch((e) => {
      console.log(e);
    });
}

onMounted(async () => {
  await router.isReady();
  store.fetchTeam(route.params.teamId);
});

watch(team, (newTeam) => {
  reset("update", newTeam);
});
</script>

<style scoped></style>
