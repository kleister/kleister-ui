{
  description = "Nix flake for development";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixpkgs-unstable";
    };

    devenv = {
      url = "github:cachix/devenv";
    };

    flake-parts = {
      url = "github:hercules-ci/flake-parts";
    };
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.devenv.flakeModule
      ];

      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      perSystem = { config, self', inputs', pkgs, system, ... }: {
        imports = [
          {
            _module.args.pkgs = import inputs.nixpkgs {
              inherit system;
              config.allowUnfree = true;
            };
          }
        ];

        devenv = {
          shells = {
            default = {
              name = "kleister-ui";

              languages = {
                go = {
                  enable = true;
                  package = pkgs.go_1_23;
                };
                javascript = {
                  enable = true;
                  package = pkgs.nodejs_20;
                };
              };

              packages = with pkgs; [
                air
                bingo
                gnumake
                goreleaser
                nixpkgs-fmt
              ];

              env = {
                CGO_ENABLED = "0";

                KLEISTER_UI_LOG_LEVEL = "debug";
                KLEISTER_UI_LOG_PRETTY = "true";
                KLEISTER_UI_LOG_COLOR = "true";

                # KLEISTER_UI_SERVER_CERT = ".devenv/state/mkcert/localhost+1.pem";
                # KLEISTER_UI_SERVER_KEY = ".devenv/state/mkcert/localhost+1-key.pem";

                KLEISTER_UI_SERVER_ASSETS = "static/";
              };
            };
          };
        };
      };
    };
}
