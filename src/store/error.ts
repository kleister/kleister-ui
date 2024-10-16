import { defineStore } from "pinia";
import { AxiosResponse, AxiosError } from "axios";

import { client } from "../client/services.gen";

type AlertType = "info" | "danger" | "success" | "warning" | "dark";

interface notification {
  kind?: AlertType;
  status?: number;
  message: string;
}

interface ErrorState {
  errors: notification[];
}

export const useErrorStore = defineStore("error", {
  state: (): ErrorState => ({
    errors: [],
  }),
  actions: {
    addError(error: notification): void {
      this.errors.push(error);
    },
    removeError(index: number): void {
      this.errors.splice(index, 1);
    },
    clearErrors() {
      this.errors = [];
    },
    initialize(): void {
      client.instance.interceptors.response.use(
        (response: AxiosResponse): AxiosResponse => response,
        (error: AxiosError): Promise<never> => {
          if (error.response) {
            let message = "Error occurred";
            const data = error.response.data as notification;

            switch (error.response.status) {
              case 400:
                message = data.message || "Bad request";
                break;
              case 401:
                message = data.message || "Unauthorized";
                break;
              case 404:
                message = data.message || "Not found";
                break;
              case 500:
                message = data.message || "Server error";
                break;
              default:
                message = data.message || "Unexpected error";
            }

            this.addError({
              kind: "danger",
              status: error.response.status,
              message,
            });
          } else if (error.request) {
            this.addError({
              kind: "danger",
              message: "No response",
            });
          } else {
            this.addError({
              kind: "danger",
              message: error.message,
            });
          }

          return Promise.reject(error);
        },
      );
    },
  },
});
