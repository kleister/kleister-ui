import { defineStore } from "pinia";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

import { TeamsService } from "@buf/kleister_api.connectrpc_es/teams/v1/teams_connect";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

const client = createPromiseClient(TeamsService, transport);

export const useTeamStore = defineStore("team", {
  state: () => ({
    teams: [],
    current: {},
  }),
  getters: {
    getTeams(state) {
      return state.teams;
    },
    currentTeam(state) {
      return state.current;
    },
  },
  actions: {
    async fetchTeams() {
      return client
        .list()
        .then((resp) => {
          this.teams = resp.teams;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchTeam(teamId) {
      return client
        .show({
          id: teamId,
        })
        .then((resp) => {
          this.current = resp.team;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteTeam(teamId) {
      return client
        .delete({
          id: teamId,
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createTeam(data) {
      return client
        .create({
          team: data,
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateTeam(teamId, data) {
      return client
        .update({
          id: teamId,
          team: data,
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
