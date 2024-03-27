import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DUdCwO7r.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CpEmxyFZ.mjs');
const _page1 = () => import('./chunks/404_BSH8C-Wi.mjs');
const _page2 = () => import('./chunks/500_BZcjnElR.mjs');
const _page3 = () => import('./chunks/login_Cy0Uouwb.mjs');
const _page4 = () => import('./chunks/logout_B_U0q5Ri.mjs');
const _page5 = () => import('./chunks/register_BDM-Yi4M.mjs');
const _page6 = () => import('./chunks/update_DIwWo-5L.mjs');
const _page7 = () => import('./chunks/getUserLikes_D0t0fbxP.mjs');
const _page8 = () => import('./chunks/like_DXksnlOE.mjs');
const _page9 = () => import('./chunks/_id__NfH-3LZ5.mjs');
const _page10 = () => import('./chunks/auth_BEXli-yD.mjs');
const _page11 = () => import('./chunks/contact_B6gT-ivh.mjs');
const _page12 = () => import('./chunks/_id__Dx0Ty-Td.mjs');
const _page13 = () => import('./chunks/_action__C-VPgtAq.mjs');
const _page14 = () => import('./chunks/_id__Ds4i8TSn.mjs');
const _page15 = () => import('./chunks/_id__BRoDCBy0.mjs');
const _page16 = () => import('./chunks/search_CB2tKiJA.mjs');
const _page17 = () => import('./chunks/welcome_DkE3ECAD.mjs');
const _page18 = () => import('./chunks/_slug__qNsjfEAo.mjs');
const _page19 = () => import('./chunks/index_DmuSL6SP.mjs');
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
    ["src/pages/saves/[id].astro", _page15],
    ["src/pages/search.astro", _page16],
    ["src/pages/welcome.astro", _page17],
    ["src/pages/[slug].astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "73222f21-a0a3-437b-a319-fb07f56b2966"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
