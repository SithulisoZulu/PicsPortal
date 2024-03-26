/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_action__BH4303Ig.mjs';
import { f as $$Button, g as $$Input, h as $$Logo } from './_id__vHi9DI09.mjs';
import { S as SITE_NAME, A as API_BASE_URL, a as $$Logosm } from './404_CwdhM6EV.mjs';
import 'clsx';

const $$Astro$4 = createAstro();
const $$ModalCloser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ModalCloser;
  const { modal } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative top-0 left-0 flex justify-center items-center mb-1"> <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"${addAttribute(modal, "data-hs-overlay")}> <span class="sr-only">Close</span> <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/auth/ModalCloser.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$LoginModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LoginModal;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="loginModal" class="fixed mt-5 xl:mt-24 hs-overlay hidden w-full h-full  top-0 bottom-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"> ', ' <div class="bg-white border border-gray-200 rounded-xl shadow-sm"> <div class="p-4 sm:p-7"> <div class="text-center mb-10"> ', ' <h2 class="block text-2xl md:text-3xl font-bold ">Sign in to ', '</h2> </div> <div class="mt-5"> <!-- Form --> <form', ' method="post"> <div class="grid gap-y-4"> <!-- Form Group --> <div> <label for="email" class="block text-sm mb-2">Email address</label> <div class="relative"> ', ' <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> </div> <!-- End Form Group --> <!-- Form Group --> <div> <div class="flex justify-between items-center"> <label for="password" class="block text-sm mb-2 ">Password</label> <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none cursor-pointer" data-hs-overlay="#hs-modal-recover-account">Forgot password?</a> </div> <div class="relative"> ', ' <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p> </div> <!-- End Form Group --> ', " ", ` </div> </form> <!-- End Form --> <p class="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
Don't have an account yet?
<a class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer" data-hs-overlay="#signinModal">
Sign up here
</a> </p> </div> </div> </div> </div> </div> <!-- <script>
  import { addImage } from '../../store/imageBlobStore.ts'
const fileInput = document.getElementById('fileInput') as HTMLInputElement;

fileInput?.addEventListener('change', (event) => {
    const selectedFile = (event?.target as HTMLInputElement)?.files[0]!;
    
    if (selectedFile) {
      addImage(selectedFile);
        console.log('Selected file:', selectedFile);
    } else {
        console.log('No file selected');
    }
});



//   import { imageBlob } from '../../cloudinary/photoUpload.ts'
//   document.getElementById("uploadPhoto")?.addEventListener("click", function(){
//     imageBlob("me");
//     console.log("clicked")
// }, false);
<\/script> -->`])), maybeRenderHead(), renderComponent($$result, "ModalCloser", $$ModalCloser, { "modal": "#loginModal" }), renderComponent($$result, "Logosm", $$Logosm, {}), SITE_NAME, addAttribute(`${API_BASE_URL}/auth/login.json`, "action"), renderComponent($$result, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "placeholder": "Enter email address", "required": true, "autofocus": false }), renderComponent($$result, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "placeholder": "Enter your password", "required": true, "autofocus": false }), renderComponent($$result, "Button", $$Button, { "type": "submit" }, { "default": ($$result2) => renderTemplate`Sign in` }), renderComponent($$result, "Button", $$Button, { "type": "submit", "outline": true }, { "default": ($$result2) => renderTemplate`Forgot password?` }));
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/auth/LoginModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$SignupModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignupModal;
  return renderTemplate(_a || (_a = __template(["", '<div id="signinModal" class="fixed xl:mt-24 hs-overlay hidden w-full h-full  top-0 bottom-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"> ', ' <div class="bg-white border border-gray-200 rounded-xl shadow-sm"> <div class="p-4 sm:p-7"> <div class="text-center mb-10"> ', ' <h2 class="block text-2xl md:text-3xl font-bold ">Signup for ', `'s account</h2> </div> <div class="mt-5"> <!-- Form --> <form`, ' method="post"> <div class="grid gap-y-4"> <!-- Form Group --> <div> <label for="name" class="block text-sm mb-2">Enter full name</label> <div class="relative"> ', ' <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> </div> <!-- End Form Group --> <!-- Form Group --> <div> <label for="email" class="block text-sm mb-2">Email address</label> <div class="relative"> ', ' <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> </div> <!-- End Form Group --> <!-- Form Group --> <div> <div class="flex justify-between items-center"> <label for="password" class="block text-sm mb-2 ">Password</label> </div> <div class="relative"> ', ' <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p> </div> <!-- End Form Group --> ', ` </div> </form> <!-- End Form --> <p class="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
Already have an account?
<a class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer" data-hs-overlay="#loginModal">
Sign in here
</a> </p> </div> <!-- <button id="upload_widget" class="cloudinary-button">Upload files</button> --> </div> </div> </div> </div> <!-- <script type="text/javascript">  
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dpnz1b1ud', 
    uploadPreset: 'picsPortal'}, (error, result) => { 
      if (!error && result && result.event === "success") {
        const photoUrl = result.info.url;
        localStorage.setItem("url", photoUrl)
      }
      if(error)
      {
        throw new Error('Failed to upload image')
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);
<\/script> -->`])), maybeRenderHead(), renderComponent($$result, "ModalCloser", $$ModalCloser, { "modal": "#signinModal" }), renderComponent($$result, "Logosm", $$Logosm, {}), SITE_NAME, addAttribute(`${API_BASE_URL}/auth/register.json`, "action"), renderComponent($$result, "Input", $$Input, { "type": "text", "id": "name", "name": "name", "placeholder": "Enter full name", "required": true, "autofocus": false }), renderComponent($$result, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "placeholder": "Enter email address", "required": true, "autofocus": false }), renderComponent($$result, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "placeholder": "Enter your password", "required": true, "autofocus": false }), renderComponent($$result, "Button", $$Button, { "type": "submit" }, { "default": ($$result2) => renderTemplate`Signup` }));
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/auth/SignupModal.astro", void 0);

const $$Astro$1 = createAstro();
const $$AuthContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthContainer;
  return renderTemplate`${renderComponent($$result, "LoginModal", $$LoginModal, { "sm": true })} ${renderComponent($$result, "SignupModal", $$SignupModal, { "sm": true })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/containers/AuthContainer.astro", void 0);

const $$Astro = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Auth;
  const assets = "../../src/assets/";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_PAGE": "Auth" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-start items-center flex-col h-screen"> <div class="relative w-full h-full"> <video${addAttribute(`${assets}/background.mp4`, "src")} autoplay loop muted${addAttribute(false, "controls")} class="w-full h-full object-cover"></video> <div class="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0  bg-blackOverlay"> <div class="p-2"> ${renderComponent($$result2, "Logo", $$Logo, { "sm": false })} </div> <div class="shadow-2xl"> <div data-hs-overlay="#loginModal" class="bg-white flex justify-center items-center p-2 rounded-lg cursor-pointer outline-none font-semibold">
Sign in to ${SITE_NAME} <i class="fa fa-sign-in ml-2 icon" aria-hidden="true"></i> </div> </div> </div> </div> </div> ${renderComponent($$result2, "AuthContainer", $$AuthContainer, {})} ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/auth.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/auth.astro";
const $$url = "/auth";

export { $$Auth as default, $$file as file, $$url as url };
