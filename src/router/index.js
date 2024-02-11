import { createRouter, createWebHistory } from "vue-router";

import WelcomeIndex from "../pages/welcome/WelcomeIndex.vue";
import TeamIndex from "../pages/teams/TeamIndex.vue";
import TeamCreate from "../pages/teams/TeamCreate.vue";
import TeamShow from "../pages/teams/TeamShow.vue";
import TeamUpdate from "../pages/teams/TeamUpdate.vue";

const routes = [
  {
    name: "welcome",
    path: "/",
    component: WelcomeIndex,
  },
  {
    name: "teams",
    path: "/teams",
    component: TeamIndex,
  },
  {
    name: "createTeam",
    path: "/teams/create",
    component: TeamCreate,
  },
  {
    name: "showTeam",
    path: "/teams/:teamId",
    component: TeamShow,
  },
  {
    name: "updateTeam",
    path: "/teams/:teamId/update",
    component: TeamUpdate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
