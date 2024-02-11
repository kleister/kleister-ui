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
              pre-commit = {
                hooks = {
                  nixpkgs-fmt = {
                    enable = true;
                  };
                  eslint = {
                    enable = true;
                  };
                  golangci-lint = {
                    enable = true;
                  };
                };
              };

              languages = {
                go = {
                  enable = true;
                };
                javascript = {
                  enable = true;
                };
              };

              packages = with pkgs; [
                nodePackages.aws-cdk

                gnumake
                golangci-lint
                nixpkgs-fmt
              ];

              env = { };
            };
          };
        };
      };
    };
}
