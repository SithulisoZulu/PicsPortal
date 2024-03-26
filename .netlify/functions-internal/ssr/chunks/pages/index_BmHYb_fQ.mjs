/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_action__BH4303Ig.mjs';
import { k as getPins, $ as $$SideBar, a as $$Pins, b as $$NoPinsFound } from './_id__vHi9DI09.mjs';
import { c as $user, $ as $$Link, a as $$Logosm, b as $$Avatar } from './404_CwdhM6EV.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pins = await getPins();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_PAGE": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out" data-astro-cid-j7pv25f6> <div class="hidden md:flex h-screen flex-initial" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SideBar", $$SideBar, { "user": $user?.value && $user?.value, "data-astro-cid-j7pv25f6": true })} </div> <div class="flex md:hidden flex-row" data-astro-cid-j7pv25f6> <div class="p-2 w-full flex flex-row justify-between items-center shadow-md" data-astro-cid-j7pv25f6> <i class="bi bi-grid-fill icon cursor-pointer hover:animate-pulse transaction-all duration-500 ease-out" aria-hidden="true" id="Menu" data-astro-cid-j7pv25f6></i> ${renderComponent($$result2, "Link", $$Link, { "to": "/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Logosm", $$Logosm, { "data-astro-cid-j7pv25f6": true })} ` })} ${$user?.value?.length > 0 && renderTemplate`${renderComponent($$result2, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Avatar", $$Avatar, { "avatar": $user?.value[0]?.name.charAt(0), "data-astro-cid-j7pv25f6": true })} ` })}`} </div> <div class="fixed w-4/3 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in hidden" id="mobileMenu" data-astro-cid-j7pv25f6> <div class="absolute w-full flex justify-end items-center p-2" id="closeMobileMenu" data-astro-cid-j7pv25f6> <i class="fa fa-times-circle cursor-pointer hover:animate-spin transaction-all duration-500 ease-out" aria-hidden="true" data-astro-cid-j7pv25f6></i> </div> ${renderComponent($$result2, "SideBar", $$SideBar, { "user": $user?.value && $user?.value, "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="pb-2 flex-1 h-screen overflow-y-scroll" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "data-astro-cid-j7pv25f6": true })} ${pins ? renderTemplate`${renderComponent($$result2, "Pins", $$Pins, { "pins": pins && pins?.photos, "loadingText": "content", "show": true, "target": "_blank", "data-astro-cid-j7pv25f6": true })}` : renderTemplate`${renderComponent($$result2, "NoPinsFound", $$NoPinsFound, { "item": "Photos & Videos", "data-astro-cid-j7pv25f6": true })}`} </div> </div> ` })} `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/index.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
