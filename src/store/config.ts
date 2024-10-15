import { defineStore } from "pinia";
import axios from "axios";
import { Kleister } from "../client";

interface Config {
  apiEndpoint: string;
}

interface ConfigState {
  isLoaded: boolean;
  config: Config | null;
  client: Kleister;
}

export const useConfigStore = defineStore("config", {
  state: (): ConfigState => ({
    isLoaded: false,
    config: null,
    client: new Kleister({
      BASE: "/api/v1",
    }),
  }),
  getters: {
    getConfig(state): Config | null {
      return state.config;
    },
    getClient(state): Kleister {
      return state.client;
    },
  },
  actions: {
    async loadConfig(): Promise<void> {
      try {
        const baseURL = window.location.origin + window.location.pathname;
        const configPath = baseURL.endsWith("/")
          ? `${baseURL}config.json`
          : `${baseURL}/config.json`;

        const response = await axios.get<Config>(configPath);

        this.isLoaded = true;
        this.config = response.data;

        this.client = new Kleister({
          BASE: this.config.apiEndpoint + "/v1",
        });
      } catch (error) {
        console.error("failed to load config:", error);
      }
    },
  },
});
