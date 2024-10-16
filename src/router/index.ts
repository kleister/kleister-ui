import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

import { WelcomeIndex } from "../pages/welcome";
import { UserIndex, UserCreate, UserShow, UserUpdate } from "../pages/users";
import { TeamIndex, TeamCreate, TeamShow, TeamUpdate } from "../pages/teams";
import { ProfileLogin } from "../pages/profile";

const routes = [
  {
    name: "welcome",
    path: "/",
    component: WelcomeIndex,
    meta: { requiresAuth: true },
  },
  {
    name: "users",
    path: "/users",
    component: UserIndex,
    meta: { requiresAuth: true },
  },
  {
    name: "createUser",
    path: "/users/create",
    component: UserCreate,
    meta: { requiresAuth: true },
  },
  {
    name: "showUser",
    path: "/users/:userId",
    component: UserShow,
    meta: { requiresAuth: true },
  },
  {
    name: "updateUser",
    path: "/users/:userId/update",
    component: UserUpdate,
    meta: { requiresAuth: true },
  },
  {
    name: "teams",
    path: "/teams",
    component: TeamIndex,
    meta: { requiresAuth: true },
  },
  {
    name: "createTeam",
    path: "/teams/create",
    component: TeamCreate,
    meta: { requiresAuth: true },
  },
  {
    name: "showTeam",
    path: "/teams/:teamId",
    component: TeamShow,
    meta: { requiresAuth: true },
  },
  {
    name: "updateTeam",
    path: "/teams/:teamId/update",
    component: TeamUpdate,
    meta: { requiresAuth: true },
  },

  {
    name: "login",
    path: "/login",
    component: ProfileLogin,
  },
];

function getBasePath(): string {
  const { pathname } = window.location;
  return pathname.substring(0, pathname.lastIndexOf("/") + 1);
}

const router = createRouter({
  history: createWebHashHistory(getBasePath()),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthed) {
    next({ name: "login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
