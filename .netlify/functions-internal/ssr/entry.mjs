import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C7QiOAU3.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BJvTBGzN.mjs');
const _page1 = () => import('./chunks/404_Bh6IwIpQ.mjs');
const _page2 = () => import('./chunks/500_C-_k3gGh.mjs');
const _page3 = () => import('./chunks/login_biW2cnZ6.mjs');
const _page4 = () => import('./chunks/logout_CRPIp9RO.mjs');
const _page5 = () => import('./chunks/register_N09BPP86.mjs');
const _page6 = () => import('./chunks/update_C9jXbd9a.mjs');
const _page7 = () => import('./chunks/getUserLikes_Drimay5R.mjs');
const _page8 = () => import('./chunks/like_Bjyy6MJV.mjs');
const _page9 = () => import('./chunks/_id__Bgc-CJSU.mjs');
const _page10 = () => import('./chunks/auth_B0wuDjt8.mjs');
const _page11 = () => import('./chunks/contact_CPaNWMNg.mjs');
const _page12 = () => import('./chunks/_id__Bb4gJmJy.mjs');
const _page13 = () => import('./chunks/_action__BOGxoQ72.mjs');
const _page14 = () => import('./chunks/_id__DZyEgCvF.mjs');
const _page15 = () => import('./chunks/profile_DUQpE6rT.mjs');
const _page16 = () => import('./chunks/_id__CyDWIyMI.mjs');
const _page17 = () => import('./chunks/search_B6XSPEj0.mjs');
const _page18 = () => import('./chunks/test_DuC-ScUC.mjs');
const _page19 = () => import('./chunks/welcome_BaZh2yJX.mjs');
const _page20 = () => import('./chunks/_slug__DUfTXIe_.mjs');
const _page21 = () => import('./chunks/index_BD38eChL.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/api/auth/login.json.ts", _page3],
    ["src/pages/api/auth/logout.json.ts", _page4],
    ["src/pages/api/auth/register.json.ts", _page5],
    ["src/pages/api/auth/update.json.ts", _page6],
    ["src/pages/api/likes/getUserLikes.json.ts", _page7],
    ["src/pages/api/likes/like.json.ts", _page8],
    ["src/pages/api/likes/[id].json.ts", _page9],
    ["src/pages/auth.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/details/[id].astro", _page12],
    ["src/pages/error/[action].astro", _page13],
    ["src/pages/profile/[id].astro", _page14],
    ["src/pages/profile.astro", _page15],
    ["src/pages/saves/[id].astro", _page16],
    ["src/pages/search.astro", _page17],
    ["src/pages/test.astro", _page18],
    ["src/pages/welcome.astro", _page19],
    ["src/pages/[slug].astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ed82afa4-1dfd-432b-829b-0cf2c7e3559d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
