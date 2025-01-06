import { defineStore } from "pinia";
import axios from "axios";

import { client } from "../client/sdk.gen";

interface Config {
  apiEndpoint: string;
}

interface ConfigState {
  isLoaded: boolean;
  config: Config | null;
}

export const useConfigStore = defineStore("config", {
  state: (): ConfigState => ({
    isLoaded: false,
    config: null,
  }),
  getters: {
    getConfig(state): Config | null {
      return state.config;
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

        client.setConfig({
          baseURL: this.config.apiEndpoint + "/v1",
        });
      } catch (error) {
        console.error("Failed to load config:", error);
      }
    },
  },
});
