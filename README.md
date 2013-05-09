# Responsive & Hybrid Web Apps Demo

## Introduction

This repo contains techniques and concepts to build responsive & hybrid web applications.

* Declarative and conditional module injection
    * using `data-*` attributes,
    * a basic "advisor" and "composer" layer, and
    * [wire.js](https://github.com/cujojs/wire) to load and instantiate modules.
* Various basic application modules (built using vanilla JS, Backbone, and Maria).
* Manifest files
    * to build for PhoneGap (or point your [PhoneGap Build](https://build.phonegap.com) app directly to this repo), and
    * to run directly on Firefox OS (or point the [Firefox OS Simulator](https://marketplace.firefox.com/developers/docs/firefox_os_simulator) directly to this repo).
* Build script (using Grunt and r.js) to optimize the modules (run `grunt build`).

It is also served as a [running demo](http://webpro.github.io/responsive-web-apps/).

## Run & build

Clone this repo, and you can:

    # run
    bower install

    # build
    npm install
    grunt build
