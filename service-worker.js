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
    "url": "404.html",
    "revision": "62d06433420655f76405a5f8ac49aa2a"
  },
  {
    "url": "about.html",
    "revision": "cfe1790b08a588ef2bf4585905cc9f6c"
  },
  {
    "url": "assets/css/0.styles.51ea9abf.css",
    "revision": "a5d9586bf858c1bc45fb381917c4cb03"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c8180352.js",
    "revision": "68bb25c3abd1de357b02f48815a1b403"
  },
  {
    "url": "assets/js/11.7d01c1a6.js",
    "revision": "58318ea8f3f95631d9b4e7cb6c050282"
  },
  {
    "url": "assets/js/12.7952f1cf.js",
    "revision": "738a4f40ddc3eb5c3d5d4d8f35873c5b"
  },
  {
    "url": "assets/js/13.707574e8.js",
    "revision": "14d7dc6ba01ae47e69fcd680c4290dc3"
  },
  {
    "url": "assets/js/14.9afecb6a.js",
    "revision": "508424712d8793b9ef2ce3292ff976f5"
  },
  {
    "url": "assets/js/15.8393a3de.js",
    "revision": "bcff79213bbb356fe17ca9c1b0db8eba"
  },
  {
    "url": "assets/js/16.cdacf554.js",
    "revision": "dbfed4ee97b3f36c1263d4ac3bd183f2"
  },
  {
    "url": "assets/js/17.b9e3afe1.js",
    "revision": "f5d31b979f197ef5c6f2da08669a6ca4"
  },
  {
    "url": "assets/js/18.fdf1ac74.js",
    "revision": "91cad885bc348c570f9a896de98851f6"
  },
  {
    "url": "assets/js/19.08fbd813.js",
    "revision": "57bf89c54b0e7ec3146ba82e650425e7"
  },
  {
    "url": "assets/js/20.6afa6f53.js",
    "revision": "9936416431f8788c344b44e3a09bb28a"
  },
  {
    "url": "assets/js/21.5d7d4e10.js",
    "revision": "bc8e0bf6791abab08bb4b66d20784eac"
  },
  {
    "url": "assets/js/22.bb694f6d.js",
    "revision": "e889991ab3ed31b740a81402279a2bd0"
  },
  {
    "url": "assets/js/23.fd27035a.js",
    "revision": "f6020086a786c4abd9d0867ea2955f46"
  },
  {
    "url": "assets/js/24.18dd4768.js",
    "revision": "ea768f98b746acfb582fcd55cde26d2e"
  },
  {
    "url": "assets/js/25.6ef4ec69.js",
    "revision": "bbe4e9948637ab17c9bdbe22a6b0a928"
  },
  {
    "url": "assets/js/26.9f08e12a.js",
    "revision": "5502bf32f99fb932f37d60417326de96"
  },
  {
    "url": "assets/js/27.3c76844a.js",
    "revision": "66e58867d138bda4d5ee5927acce9e12"
  },
  {
    "url": "assets/js/28.a58c9e24.js",
    "revision": "5434274f84faf94db5482dccb04466d3"
  },
  {
    "url": "assets/js/29.13f92c55.js",
    "revision": "19a19962905525e05cee1f3967700e08"
  },
  {
    "url": "assets/js/3.1ce09558.js",
    "revision": "cf879ef5064e9fbfd2793b7ed8cd6fbe"
  },
  {
    "url": "assets/js/30.9c88dee1.js",
    "revision": "5a3252f83e600153993190976ca37dff"
  },
  {
    "url": "assets/js/31.391a4a7e.js",
    "revision": "eb027db21f222ffe36ca415fa7ac4a8b"
  },
  {
    "url": "assets/js/32.b8f7a9e7.js",
    "revision": "0ef05ebe91301d157342e04d1fb71d3c"
  },
  {
    "url": "assets/js/4.2fe70a2e.js",
    "revision": "3aad66371511417f217bf894dfa9cd47"
  },
  {
    "url": "assets/js/5.4f66af17.js",
    "revision": "93cce7e5da6461098a7bff894747d20f"
  },
  {
    "url": "assets/js/6.cc64796d.js",
    "revision": "069367dc8e74001e2fae56eec5310a9b"
  },
  {
    "url": "assets/js/7.e4a38c7a.js",
    "revision": "a5417dcb68e8266ccb0f68563d277cc8"
  },
  {
    "url": "assets/js/8.db62c0c8.js",
    "revision": "68eb30d81c7e7a36d6d55867fb6984b7"
  },
  {
    "url": "assets/js/9.c028845a.js",
    "revision": "35b444d07eae60943bee4a82b45b5ca4"
  },
  {
    "url": "assets/js/app.a925ae62.js",
    "revision": "62549bc714b0d4a274058bfde41407ac"
  },
  {
    "url": "assets/js/vendors~docsearch.cc126f98.js",
    "revision": "2f65227656cd11727cf3073fdeaecd3a"
  },
  {
    "url": "demo.html",
    "revision": "e3f763e161eae23ee7fdf2c5acbe60cf"
  },
  {
    "url": "en/about.html",
    "revision": "d4e2e8d626bdb3d8f8ea1dbdb4f439f0"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "5cf3a0fa04576203a62b81b11f824ac6"
  },
  {
    "url": "en/guide/config.html",
    "revision": "e04872233033bbc931ab4dcbd303de06"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "d442b2d98c9511b77feb85eb9b0257f0"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "fdbe7af841afabf35576a9225171592e"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c6448902fed8ec8d85fd3e760933c16a"
  },
  {
    "url": "en/guide/page.html",
    "revision": "90e1647b0ef14599e8e6f9cbdde59173"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "9ed66964010c42d08c77b83e7bfe4311"
  },
  {
    "url": "en/index.html",
    "revision": "6a1799f2b2fada1c6d908fad166fa6c9"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "80bdb1f3b32b7c7319efb9993f13bac7"
  },
  {
    "url": "guide/config.html",
    "revision": "405c00bcd1fafb9d644a419a4261dfb4"
  },
  {
    "url": "guide/faq.html",
    "revision": "bf6fe722ec6452b703231982af7525d5"
  },
  {
    "url": "guide/icon.html",
    "revision": "ba82526fad1f6d900e900349753b8ef3"
  },
  {
    "url": "guide/index.html",
    "revision": "f2fb13365a7b7aaa5b48da042ae835ba"
  },
  {
    "url": "guide/migrate.html",
    "revision": "10da47be5ec74412366103447e4826a0"
  },
  {
    "url": "guide/page.html",
    "revision": "7938df8cdce7febe1ecc06fb6bfc288d"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "d0ff8be885d1cf18100f222d68d10432"
  },
  {
    "url": "images/index-preview.jpg",
    "revision": "7c5199d9f75605f77990cf7a984eaf0f"
  },
  {
    "url": "images/mickey-mouse.jpg",
    "revision": "c636a5e47f7a741a28a57ff22c98ceac"
  },
  {
    "url": "index.html",
    "revision": "0d3b2bd130bbc8541b344ee344cefd86"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
