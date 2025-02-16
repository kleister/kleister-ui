# Kleister: Web UI

[![General Workflow](https://github.com/kleister/kleister-ui/actions/workflows/general.yml/badge.svg)](https://github.com/kleister/kleister-ui/actions/workflows/general.yml) [![Join the Matrix chat at https://matrix.to/#/#kleister:matrix.org](https://img.shields.io/badge/matrix-%23kleister%3Amatrix.org-7bc9a4.svg)](https://matrix.to/#/#kleister:matrix.org) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/3bd77abf377e4796b9323062236390dd)](https://app.codacy.com/gh/kleister/kleister-ui/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![Go Reference](https://pkg.go.dev/badge/github.com/kleister/kleister-ui.svg)](https://pkg.go.dev/github.com/kleister/kleister-ui) [![GitHub Repo](https://img.shields.io/badge/github-repo-yellowgreen)](https://github.com/kleister/kleister-ui)

Within this repository we are building the web interface for our
[Kleister API][api] server.

## Install

You can download prebuilt binaries from the [GitHub releases][releases] or from
our [download site][downloads]. If you prefer to use containers you could use
our images published on [Docker Hub][dockerhub] or [Quay][quay]. You are a Mac
user? Just take a look at our [homebrew formula][homebrew]. If you need further
guidance how to install this take a look at our [documentation][docs].

If you want to serve the UI by a regular webserver you can also find a tarball
on our downloads server to just get the assets.

## Build

This project requires NodeJS to build the sources, the installation of NodeJS
won't be covered by these instructions, please follow the official documentation
for [NodeJS][nodejs]. To build the sources just execute the following command
after the setup.

If you also want to publish it as a single binary with our server written in Go
make sure you have a working Go environment, for further reference or a guide
take a look at the [install instructions][golang]. This project requires
Go >= v1.24, at least that's the version we are using.

```console
git clone https://github.com/kleister/kleister-ui.git
cd kleister-ui

npm install --ci
npm run build

make generate build
./bin/kleister-ui -h
```

We are embedding all the static assets into the binary so there is no need for
any webserver or anything else beside launching this binary.

## Development

To start developing on this UI you have to execute only a few commands. To setup
a NodeJS environment or even a Go environment is out of the scope of this
document. This will start the NodeJS server which also provides hot reloading.
To start development just execute those commands:

```console
npm install --ci
npm run serve
```

To properly work with it you need to start the [API server][api] separately
since this project doesn't include it. After launching this command on a
terminal you can access the web interface at [http://localhost:8080](http://localhost:8080).

## Security

If you find a security issue please contact
[kleister@webhippie.de](mailto:kleister@webhippie.de) first.

## Contributing

Fork -> Patch -> Push -> Pull Request

## Authors

-   [Thomas Boerger](https://github.com/tboerger)

## License

Apache-2.0

## Copyright

```console
Copyright (c) 2018 Thomas Boerger <thomas@webhippie.de>
```

[api]: https://github.com/kleister/kleister-api
[docs]: https://kleister.eu
[releases]: https://github.com/kleister/kleister-ui/releases
[downloads]: http://dl.kleister.eu/ui
[dockerhub]: https://hub.docker.com/r/kleister/kleister-ui/tags/
[quay]: https://quay.io/repository/kleister/kleister-ui?tab=tags
[homebrew]: https://github.com/kleister/homebrew-kleister
[nodejs]: https://nodejs.org/en/download/package-manager/
[golang]: http://golang.org/doc/install.html
