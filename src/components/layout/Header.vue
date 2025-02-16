<template>
  <fwb-navbar solid>
    <template #logo>Kleister</template>

    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/" link-attr="to" component="router-link">
          <font-awesome-icon :icon="['fas', 'house']" />
          {{ t("mainnav.home") }}
        </fwb-navbar-link>

        <fwb-navbar-link
          v-if="authStore.isAdmin"
          link="/users"
          link-attr="to"
          component="router-link"
        >
          <font-awesome-icon :icon="['fas', 'user']" />
          {{ t("mainnav.users") }}
        </fwb-navbar-link>

        <fwb-navbar-link
          v-if="authStore.isAdmin"
          link="/teams"
          link-attr="to"
          component="router-link"
        >
          <font-awesome-icon :icon="['fas', 'people-group']" />
          {{ t("mainnav.teams") }}
        </fwb-navbar-link>

        <fwb-navbar-link href="#" @click.prevent="logout">
          <font-awesome-icon :icon="['fas', 'sign-out']" />
          {{ t("mainnav.logout") }}
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup lang="ts">
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";

import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "../../store/auth";

const { t } = useI18n({
  useScope: "global",
});

const router = useRouter();
const authStore = useAuthStore();

function logout() {
  authStore.logout();
  router.push({ name: "signin" });
}
</script>

<script lang="ts">
export default {
  name: "LayoutHeader",
};
</script>
