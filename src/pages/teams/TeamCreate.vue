<template>
  <fwb-breadcrumb solid class="m-5">
    <router-link :to="{ name: 'welcome' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href" home> Home </fwb-breadcrumb-item>
    </router-link>
    <router-link :to="{ name: 'teams' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href"> Teams </fwb-breadcrumb-item>
    </router-link>
    <router-link :to="{ name: 'createTeam' }" v-slot="{ href }" custom>
      <fwb-breadcrumb-item :href="href"> New </fwb-breadcrumb-item>
    </router-link>
  </fwb-breadcrumb>

  <ContentHeader title="Create">
    <CancelAction :to="{ name: 'teams' }" />
  </ContentHeader>

  <div class="m-5">
    <FormKit
      type="form"
      submit-label="Create"
      id="create"
      name="createTeam"
      @submit="submit"
    >
      <FormKit
        type="text"
        name="slug"
        id="slug"
        validation="length:3,64"
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

import { reset } from "@formkit/core";
import { useRouter } from "vue-router";
import { useTeamStore } from "../../store/teams";

const router = useRouter();
const store = useTeamStore();

async function submit(data) {
  return store
    .createTeam(data)
    .then((resp) => {
      reset("create");
      router.push({ name: "showTeam", params: { teamId: resp.team.slug } });
    })
    .catch((e) => {
      console.log(e);
    });
}
</script>
