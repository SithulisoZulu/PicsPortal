/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_action__BH4303Ig.mjs';
import { S as SITE_NAME, c as $user } from './404_CwdhM6EV.mjs';

const $$Astro = createAstro();
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_PAGE": `Welcome to ${SITE_NAME} - ${$user?.value[0]?.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center mt-32 top-0 left-0 right-0 w-full "> <div class="flex flex-col items-center justify-center bg-white rounded-md p-2 text-center md:w-[580px]"> <div class="p-3 text-green-600 px-4 border-2 border-green-600 rounded-full font-bold w-50 h-50"> <i class="fa fa-check icon animate-pulse" aria-hidden="true"></i> </div> <h1 class="text-3xl font-extrabold mt-5">Hello ${$user?.value[0]?.name}, Welcome to ${SITE_NAME}</h1> <p class="mb-10 mt-5 text-base w-[420px]">We're thrilled to have you join us. Explore, save, and download beautiful moments with ease. Enjoy your stay!
</p> <a href="/" class="flex items-center justify-center p-3 px-4 hover:shadow-md font-semibold rounded-full bg-black text-white">Start exporing <i class="ml-2 bi bi-emoji-smile"></i></a> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/welcome.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/welcome.astro";
const $$url = "/welcome";

export { $$Welcome as default, $$file as file, $$url as url };
