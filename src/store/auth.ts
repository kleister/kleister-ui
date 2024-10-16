import { defineStore } from "pinia";
import { InternalAxiosRequestConfig, AxiosError } from "axios";

import { isAxiosError } from "./helpers";
import { client, loginAuth } from "../client/services.gen";
import type {
  auth_token,
  LoginAuthResponse,
  LoginAuthError,
} from "../client/types.gen";

interface AuthState {
  token: string | null;
  loading: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: localStorage.getItem("token") || null,
    loading: false,
  }),
  getters: {
    isAuthed(state): boolean {
      return !!state.token;
    },
  },
  actions: {
    async login(
      username: string,
      password: string,
    ): Promise<LoginAuthResponse | LoginAuthError> {
      this.loading = true;

      try {
        const response = await loginAuth({
          body: {
            username,
            password,
          },
        });

        if (isAxiosError(response)) {
          throw response;
        }

        this.token = response.data.token;
        localStorage.setItem("token", response.data.token);

        client.instance.interceptors.request.use(
          (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            config.headers.set("X-Api-Key", response.data.token);
            return config;
          },
          (error: AxiosError): Promise<never> => {
            return Promise.reject(error);
          },
        );

        return response.data as auth_token;
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError<LoginAuthError>;

          if (axiosError.response) {
            return error.response as LoginAuthError;
          }

          throw new Error("A network error occurred");
        }

        throw new Error("An unexpected error occurred");
      } finally {
        this.loading = false;
      }
    },
    logout(): void {
      this.token = null;
      localStorage.removeItem("token");
    },
    initialize(): void {
      const token = localStorage.getItem("token");

      if (token) {
        client.instance.interceptors.request.use(
          (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            config.headers.set("X-Api-Key", token);
            return config;
          },
          (error: AxiosError): Promise<never> => {
            return Promise.reject(error);
          },
        );
      }
    },
  },
});
