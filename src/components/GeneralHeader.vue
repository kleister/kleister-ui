<template>
  <fwb-navbar solid>
    <template #logo> Kleister </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <router-link
          :to="{ name: 'welcome' }"
          v-slot="{ href, navigate, isActive }"
          custom
        >
          <fwb-navbar-link :isActive="isActive" :link="href" @click="navigate">
            <font-awesome-icon :icon="['fas', 'house']" />
            Home
          </fwb-navbar-link>
        </router-link>
        <router-link
          :to="{ name: 'teams' }"
          v-slot="{ href, navigate, isActive }"
          custom
        >
          <fwb-navbar-link :isActive="isActive" :link="href" @click="navigate">
            <font-awesome-icon :icon="['fas', 'people-group']" />
            Teams
          </fwb-navbar-link>
        </router-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>
