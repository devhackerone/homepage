/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/5milllllliondollars.jpg",
    "revision": "e8f7fa42128a3a4018e70c73e890fc32"
  },
  {
    "url": "assets/images/apple-touch-icon.png",
    "revision": "ac97607b51065e4831b9ffe91afaa62d"
  },
  {
    "url": "assets/images/avatar.svg",
    "revision": "69426af3cc6e2be4ae4a689d54710c5f"
  },
  {
    "url": "assets/images/favicon-192x192.png",
    "revision": "eb9fb20d732fd9fd7952a814a8c6642d"
  },
  {
    "url": "assets/images/favicon-512x512.png",
    "revision": "c0a2214aac8abac1751a53e49fc2edf8"
  },
  {
    "url": "assets/stylesheets/base.css",
    "revision": "fb9d0b2d951b2b596097698d608b802c"
  },
  {
    "url": "favicon.ico",
    "revision": "9d51c495f8651769fcacb17f56d7f6dc"
  },
  {
    "url": "index.html",
    "revision": "b9dae7de2d1c17e8f14aafa0eadb4ba7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
