/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_action__BK3bGX9D.mjs';
import { d as $user, V as VIDEOS_PER_PAGE, P as PHOTOS_PER_PAGE, a as $$Link, b as $$Logosm, c as $$Avatar } from './404_Bp5o1INs.mjs';
import { c as client, $ as $$SideBar, a as $$Pins, b as $$NoPinsFound, d as $$FeatureComingSoon, e as $$VideoPins, f as $$About } from './_id__DNo7kAhh.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let pins = null;
  let videoPins;
  const user = $user.value ?? [];
  if (slug === "videos") {
    videoPins = await client.videos.popular({ per_page: VIDEOS_PER_PAGE });
  } else {
    pins = await client.photos.curated({ per_page: PHOTOS_PER_PAGE });
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_PAGE": slug?.toString(), "data-astro-cid-yvbahnfj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out" data-astro-cid-yvbahnfj> <div class="hidden md:flex h-screen flex-initial" data-astro-cid-yvbahnfj> ${renderComponent($$result2, "SideBar", $$SideBar, { "user": user && user, "activeLink": slug, "data-astro-cid-yvbahnfj": true })} </div> <div class="flex md:hidden flex-row" data-astro-cid-yvbahnfj> <div class="p-2 w-full flex flex-row justify-between items-center shadow-md" data-astro-cid-yvbahnfj> <i class="bi bi-grid-fill icon cursor-pointer" aria-hidden="true" id="Menu" data-astro-cid-yvbahnfj></i> ${renderComponent($$result2, "Link", $$Link, { "to": "/", "data-astro-cid-yvbahnfj": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Logosm", $$Logosm, { "data-astro-cid-yvbahnfj": true })} ` })} ${renderComponent($$result2, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "data-astro-cid-yvbahnfj": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Avatar", $$Avatar, { "avatar": $user?.value[0]?.name.charAt(0), "data-astro-cid-yvbahnfj": true })} ` })} </div> <div class="fixed w-4/3 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in hidden" id="mobileMenu" data-astro-cid-yvbahnfj> <div class="absolute w-full flex justify-end items-center p-2" id="closeMobileMenu" data-astro-cid-yvbahnfj> <i class="fa fa-times-circle cursor-pointer hover:animate-spin transaction-all duration-500 ease-out" aria-hidden="true" data-astro-cid-yvbahnfj></i> </div> ${renderComponent($$result2, "SideBar", $$SideBar, { "user": user && user, "activeLink": slug, "data-astro-cid-yvbahnfj": true })} </div> </div> <div class="pb-2 flex-1 h-screen overflow-y-scroll" data-astro-cid-yvbahnfj> ${renderComponent($$result2, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "data-astro-cid-yvbahnfj": true })} ${slug === "photos" ? pins ? renderTemplate`${renderComponent($$result2, "Pins", $$Pins, { "pins": pins && pins?.photos, "loadingText": slug, "show": true, "target": "_blank", "data-astro-cid-yvbahnfj": true })}` : renderTemplate`${renderComponent($$result2, "NoPinsFound", $$NoPinsFound, { "item": "Photos", "data-astro-cid-yvbahnfj": true })}` : slug === "videos" ? renderTemplate`${renderComponent($$result2, "FeatureComingSoon", $$FeatureComingSoon, { "data-astro-cid-yvbahnfj": true })}
						${renderComponent($$result2, "VideoPins", $$VideoPins, { "pins": videoPins, "loadingText": slug, "data-astro-cid-yvbahnfj": true })}` : renderTemplate`${renderComponent($$result2, "About", $$About, { "data-astro-cid-yvbahnfj": true })}`} </div> </div> ` })} `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/[slug].astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/[slug].astro";
const $$url = "/[slug]";

export { $$slug as default, $$file as file, $$url as url };
