/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, F as Fragment, f as addAttribute, g as renderSlot, h as renderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { atom } from 'nanostores';

const $$Astro$6 = createAstro();
const $$Logosm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Logosm;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="text-lg tracking-2 font-bold font-display"><span class="text-rose-500 font-mono">Pics</span>Portal<span class="text-rose-500">.</span></div>` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Logosm.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bottom-0"> <!-- Grid --> <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center"> <div> <a href="/" aria-label="Brand"> ${renderComponent($$result, "Logosm", $$Logosm, {})} </a> </div> <!-- End Col --> <ul class="text-center"> <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 "> <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="/about">
About
</a> </li> <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 "> <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="/contact">
Contact
</a> </li> <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300"> <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800" href="#">
Blog
</a> </li> </ul> <!-- End Col --> <!-- Social Brands --> <div class="md:text-end space-x-2"> <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-white disabled:opacity-50 disabled:pointer-events-none hover:shadow-lg duration-300 ease-in-out" href="#"> <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor"></path> </svg> </a> <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-white disabled:opacity-50 disabled:pointer-events-none hover:shadow-lg duration-300 ease-in-out" href="#"> <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg> </a> <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-white disabled:opacity-50 disabled:pointer-events-none hover:shadow-lg transition-all duration-300 ease-in-out" href="#"> <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> </a> <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-white disabled:opacity-50 disabled:pointer-events-none hover:shadow-lg transition-all duration-300 ease-in-out" href="#"> <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path> </svg> </a> </div> <!-- End Social Brands --> </div> <!-- End Grid --> <div class="mt-5"> <p class="text-gray-500 w-full text-center">We're part of the <a class="font-semibold text-blue-600 hover:text-blue-700 " href="https://vcbh7dw4-4322.uks1.devtunnels.ms/" target="_blank">OceanOfTech</a> family.</p> <p class="text-gray-500 w-full text-center">© JobBoard. ${"2024"} OceanOfTech. All rights reserved.</p> </div> </footer>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Footer.astro", void 0);

let API_BASE_URL = "http://localhost:4321/api";
const SITE_NAME = "PicsPortal";
const SITE_DESCRIPTION = `${SITE_NAME} is a user-friendly online platform designed for enthusiasts, creatives, and professionals alike, offering a vast array of high-quality photos and videos for viewing, saving, and downloading. With an intuitive interface and a diverse collection of visual content, ${SITE_NAME} caters to a wide range of interests and purposes.`;
const SITE_CONTENT_SOURCE = `We want to clarify that while you enjoy the visual content on ${SITE_NAME}, it's important to understand that we don't own any of it. The content is sourced from Pexels, a platform renowned for its vast library of images and videos created by talented individuals worldwide. We're here to provide you with a seamless browsing experience, but let's remember to appreciate the hard work and creativity of the content creators. Thanks for being a part of our community.`;
const PHOTOS_PER_PAGE = 1e3;
const VIDEOS_PER_PAGE = 1e3;
const links = [
  { name: "Photos", icon: "bi bi-card-image" },
  { name: "Videos", icon: "fa fa-video-camera" },
  { name: "Search", icon: "fa fa-search" },
  { name: "About", icon: "fa fa-info-circle" },
  { name: "Other" }
];

const $$Astro$4 = createAstro();
const $$BackToTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BackToTop;
  return renderTemplate`${maybeRenderHead()}<i class="fixed fas fa-arrow-up bg-blue-300 text-blue-500 bg-opacity-25 fw-bold p-5 rounded-lg max-w-auto cursor-pointer bottom-10 end-10 z-[60] me-15 transition-all ease-in-out duration-300 hidden" id="btn-back-to-top" style="display: none;"></i> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/UI/BackToTop.astro", void 0);

const $user = atom([]);
function addUser(user) {
  if (user._id !== "" && user._id !== void 0 && user._id !== null) {
    $user.set([user]);
  } else {
    $user.set([]);
  }
}

const $$Astro$3 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { to, className, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")}${addAttribute(className, "class")}${addAttribute(target, "target")}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/UI/Link.astro", void 0);

const $$Astro$2 = createAstro();
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { avatar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-9 h-9 bg-gray-400 rounded-full flex justify-center items-center text-xl font-semibold ">${avatar?.toUpperCase()}</div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Avatar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  if (!$user.value) {
    Astro2.redirect("/login");
  }
  const profileLetter = $user?.value[0]?.name.charAt(0);
  const { SITE_PAGE } = Astro2.props;
  const assets = "../../src/assets/";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${assets}/favicon.png`, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${SITE_NAME} - ${SITE_PAGE}</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.1/remixicon.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer">${renderHead()}</head> <body class="relative bg-gray-50 h-full scroll-smooth"> <main> <div class="w-full px-6"> <div class="flex gap-2 md:gap-5 w-full mt-5 pb-7"> <div class="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm"> <form action="/search" class="flex w-full"> <button> <i class="fa fa-search ml-1 p-3 hover:text-rose-500 transition-none duration-500 ease-in-out" aria-hidden="true"></i> </button> <input type="text" placeholder="Search..." name="query" class="w-full p-2 bg-white outline-none"> <select name="type" class="p-2 px-5 bg-white outline-none font-semibold rounded-lg"> <option value="photo"${addAttribute(true, "selected")}>Photo</option> <option value="video">Video</option> </select> </form> </div> <div class="flex gap-3"> ${$user?.value[0] && renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": `${$user?.value[0]?._id}`, "className": "hidden md:block" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Avatar", $$Avatar, { "avatar": profileLetter })} ` })}
						  ${renderComponent($$result, "Link", $$Link, { "to": "/", "className": "bg-black text-white rounded-md w-7 h-8  md:w-10 md:h-9 flex justify-center items-center" }, { "default": ($$result2) => renderTemplate` <i class="fa fa-home"></i> ` })}`} </div> </div> </div> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "BackToTop", $$BackToTop, {})} </main>  </body> </html>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "ProfileLayout", $$Layout, { "SITE_PAGE": "404" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"> <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"> <div class="relative"> <div class="absolute"> <div class=""> <h1 class="my-2 text-gray-800 font-bold text-2xl">
Looks like you've found the
                        doorway to the great nothing
</h1> <p class="my-2 text-gray-800 mb-10">Sorry about that! Please visit our hompage to get where you need to go.</p> <a href="/" class="sm:w-full lg:w-auto my-2 rounded-lg py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</a> </div> </div> <div> <img src="https://i.ibb.co/G9DC8S0/404-2.png"> </div> </div> </div> <div> <img src="https://i.ibb.co/ck1SGFJ/Group.png"> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/404.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, API_BASE_URL as A, PHOTOS_PER_PAGE as P, SITE_NAME as S, VIDEOS_PER_PAGE as V, _404 as _, $$Logosm as a, $$Avatar as b, $user as c, $$BackToTop as d, SITE_DESCRIPTION as e, SITE_CONTENT_SOURCE as f, $$Footer as g, $$Layout as h, addUser as i, links as l };
