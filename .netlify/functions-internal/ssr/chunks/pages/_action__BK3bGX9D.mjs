/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderSlot, h as renderHead, f as addAttribute, e as renderComponent, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { S as SITE_NAME } from './404_Bp5o1INs.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { SITE_PAGE } = Astro2.props;
  const assets = "../../src/assets/";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"', '><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", " - ", '</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.1/remixicon.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><link href="https://css.gg/css" rel="stylesheet"><!-- <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"><\/script>   --><!-- <ViewTransitions /> -->', "</head> <body> <main> ", " </main>  </body> </html> "])), addAttribute(`${assets}/favicon.png`, "href"), addAttribute(Astro2.generator, "content"), SITE_NAME, SITE_PAGE, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$action = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$action;
  const { action } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_PAGE": `Welcome to ${SITE_NAME}` }, { "default": ($$result2) => renderTemplate`${action === "register" ? renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center mt-32 top-0 left-0 right-0 w-full "> <div class="flex flex-col items-center justify-center bg-white rounded-md p-2 text-center md:w-[580px]"> <div class="p-3 text-red-600 px-4 border-2 border-red-600 rounded-full font-bold w-50 h-50"> <i class="fa fa-warning icon animate-pulse" aria-hidden="true"></i> </div> <h1 class="text-3xl font-extrabold mt-5">
Hello, We could not create your ${SITE_NAME} </h1> <p class="mb-10 mt-5 text-base w-[420px]">
User Already exists or something went wrong on our end. You can try a different email!
</p> <a href="/auth" class="flex items-center justify-center p-3 px-4 hover:shadow-md font-semibold rounded-full bg-black text-white">
Try again <i class="ml-2 fa fa-refresh"></i> </a> </div> </div>` : renderTemplate`<div class="flex flex-col items-center mt-32 top-0 left-0 right-0 w-full "> <div class="flex flex-col items-center justify-center bg-white rounded-md p-2 text-center md:w-[580px]"> <div class="p-3 text-red-600 px-4 border-2 border-red-600 rounded-full font-bold w-50 h-50"> <i class="fa fa-warning icon animate-pulse" aria-hidden="true"></i> </div> <h1 class="text-3xl font-extrabold mt-5">
Hello, We could not login you in to ${SITE_NAME} </h1> <p class="mb-10 mt-5 text-base w-[420px]">
Please double check your email and password and try again.
</p> <a href="/auth" class="flex items-center justify-center p-3 px-4 hover:shadow-md font-semibold rounded-full bg-black text-white">
Try again <i class="ml-2 fa fa-refresh"></i> </a> </div> </div>`}` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/error/[action].astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/error/[action].astro";
const $$url = "/error/[action]";

const _action_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$action,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _action_ as _ };
