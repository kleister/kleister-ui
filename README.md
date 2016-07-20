# Kleister: Web UI

[![Build Status](http://github.dronehippie.de/api/badges/kleister/kleister-ui/status.svg)](http://github.dronehippie.de/kleister/kleister-ui)
[![Coverage Status](http://coverage.dronehippie.de/badges/kleister/kleister-ui/coverage.svg)](http://coverage.dronehippie.de/kleister/kleister-ui)
[![Join the chat at https://gitter.im/kleister/kleister](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kleister/kleister)
![Release Status](https://img.shields.io/badge/status-beta-yellow.svg?style=flat)

**This project is under heavy development, it's not in a working state yet!**

Where does this name come from or what does it mean? It's quite simple, it's one
german word for paste/glue, I thought it's a good match as it glues together the
modpacks for Minecraft.


## Build

This project requires NodeJS to build the sources, the installation of NodeJS
won't be covered by those instructions. To build the sources just execute the
following command after NodeJS setup:

```
npm install
npm run build
```


## Development

To start developing on this UI you have to execute only a few commands. To setup
a NodeJS environment or even a Go environment is out of the scope of this
document. To start development just execute those commands:

```
npm install
npm run start -- --host localhost:8080
```

The development server proxies all requests to the define host. So in order to
properly work with it you need to start the API separately.

After launching this command on a terminal you can access the web interface at
[http://localhost:9000](http://localhost:9000)


## Contributing

Fork -> Patch -> Push -> Pull Request


## Authors

* [Thomas Boerger](https://github.com/tboerger)


## License

Apache-2.0


## Copyright

```
Copyright (c) 2016 Thomas Boerger <http://www.webhippie.de>
```
