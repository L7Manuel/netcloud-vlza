/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3d1c42bc'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "bef443f4e3f8dafddf701b1c40c3bc78"
  }, {
    "url": "assets/AboutSection-WklCG6K-.js",
    "revision": null
  }, {
    "url": "assets/EthicsSection-DwU77Gz9.js",
    "revision": null
  }, {
    "url": "assets/index-CZkdjilf.js",
    "revision": null
  }, {
    "url": "assets/index-D5K12O2e.css",
    "revision": null
  }, {
    "url": "assets/ServicesSection-BhnNLmAD.js",
    "revision": null
  }, {
    "url": "assets/vendor-forms-kG19G0KS.js",
    "revision": null
  }, {
    "url": "assets/vendor-icons-D83D7lZe.js",
    "revision": null
  }, {
    "url": "assets/vendor-query-DucanVUG.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-BfHXibYY.js",
    "revision": null
  }, {
    "url": "assets/vendor-ui-CVeznREO.js",
    "revision": null
  }, {
    "url": "ceo-profile-1.jpg",
    "revision": "2fc0f4deeec52f158a214d3927cd2f5b"
  }, {
    "url": "ceo-profile-2.jpg",
    "revision": "9dccd42becb06a44c263cce066896760"
  }, {
    "url": "favicon.svg",
    "revision": "1aeada7d583e5e49492ad90084a99d6d"
  }, {
    "url": "index.html",
    "revision": "78ebe1df2679c849d2cdac6dda486500"
  }, {
    "url": "logo-netcloud-new.png",
    "revision": "7ee602bab726d4f1376bfd81a4be3623"
  }, {
    "url": "placeholder.svg",
    "revision": "35707bd9960ba5281c72af927b79291f"
  }, {
    "url": "registerSW.js",
    "revision": "47b692bede0e3414f96485bb861bb9d0"
  }, {
    "url": "favicon.svg",
    "revision": "1aeada7d583e5e49492ad90084a99d6d"
  }, {
    "url": "placeholder.svg",
    "revision": "35707bd9960ba5281c72af927b79291f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "9b5b9cc6e5e320011907da292944ea97"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/api\.dicebear\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "dicebear-avatars",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 604800
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.StaleWhileRevalidate({
    "cacheName": "google-fonts-stylesheets",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-webfonts",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 30,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
