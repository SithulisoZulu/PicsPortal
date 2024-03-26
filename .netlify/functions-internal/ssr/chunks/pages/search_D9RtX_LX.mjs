/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_action__BH4303Ig.mjs';
import { V as VIDEOS_PER_PAGE, P as PHOTOS_PER_PAGE, c as $user, $ as $$Link, a as $$Logosm, b as $$Avatar } from './404_CwdhM6EV.mjs';
import { c as client, $ as $$SideBar, a as $$Pins, b as $$NoPinsFound, d as $$FeatureComingSoon } from './_id__vHi9DI09.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2?.url?.searchParams.get("query");
  const type = Astro2.url.searchParams.get("type");
  let results = null;
  if (type === "video") {
    results = await client.videos.search({ query, per_page: VIDEOS_PER_PAGE });
  } else {
    results = await client.photos.search({ query, per_page: PHOTOS_PER_PAGE });
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_PAGE": "Search", "data-astro-cid-ipsxrsrh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-gray-50 md:flex-row flex-col h-screen transaction-all duration-75 ease-in-out" data-astro-cid-ipsxrsrh> <div class="hidden md:flex h-screen flex-initial" data-astro-cid-ipsxrsrh> ${renderComponent($$result2, "SideBar", $$SideBar, { "user": $user?.value && $user?.value, "activeLink": "search", "data-astro-cid-ipsxrsrh": true })} </div> <div class="flex md:hidden flex-row" data-astro-cid-ipsxrsrh> <div class="p-2 w-full flex flex-row justify-between items-center shadow-md" data-astro-cid-ipsxrsrh> <i class="bi bi-grid-fill icon cursor-pointer" aria-hidden="true" id="Menu" data-astro-cid-ipsxrsrh></i> ${renderComponent($$result2, "Link", $$Link, { "to": "/", "data-astro-cid-ipsxrsrh": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Logosm", $$Logosm, { "data-astro-cid-ipsxrsrh": true })} ` })} ${renderComponent($$result2, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "data-astro-cid-ipsxrsrh": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Avatar", $$Avatar, { "avatar": $user?.value[0]?.name.charAt(0), "data-astro-cid-ipsxrsrh": true })} ` })} </div> <div class="fixed w-4/3 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in hidden" id="mobileMenu" data-astro-cid-ipsxrsrh> <div class="absolute w-full flex justify-end items-center p-2" id="closeMobileMenu" data-astro-cid-ipsxrsrh> <i class="fa fa-times-circle cursor-pointer hover:animate-spin transaction-all duration-500 ease-out" aria-hidden="true" data-astro-cid-ipsxrsrh></i> </div> ${renderComponent($$result2, "SideBar", $$SideBar, { "user": $user?.value && $user?.value, "activeLink": "search", "data-astro-cid-ipsxrsrh": true })} </div> </div> <div class="pb-2 flex-1 h-screen overflow-y-scroll" data-astro-cid-ipsxrsrh> ${renderComponent($$result2, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "data-astro-cid-ipsxrsrh": true })} ${type === "photo" ? results.photos.length > 0 ? renderTemplate`${renderComponent($$result2, "Pins", $$Pins, { "pins": results.photos, "loadingText": `Search results for ${query}`, "show": true, "target": "_blank", "data-astro-cid-ipsxrsrh": true })}` : renderTemplate`${renderComponent($$result2, "NoPinsFound", $$NoPinsFound, { "item": `results for ${query}`, "data-astro-cid-ipsxrsrh": true })}` : renderTemplate`${renderComponent($$result2, "FeatureComingSoon", $$FeatureComingSoon, { "data-astro-cid-ipsxrsrh": true })}`} </div> </div> ` })} `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/search.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
