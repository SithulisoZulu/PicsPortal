/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_Bp5o1INs.mjs';

const $$Astro = createAstro();
const $$500 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "SITE_PAGE": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white"> <div class="text-center"> <div class="inline-flex rounded-full bg-red-100 p-4"> <div class="rounded-full stroke-red-600 bg-red-200 p-4"> <svg class="w-16 h-16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16L22 21M22 16L17 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> </div> <h1 class="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">500 - Server error</h1> <p class="text-slate-600 mt-5 lg:text-lg">Oops something went wrong. Try to refresh this page or <br> feel free to contact us if the problem presists.</p> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/500.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/500.astro";
const $$url = "/500";

export { $$500 as default, $$file as file, $$url as url };
