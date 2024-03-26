/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { l as getLikes } from './_id__vHi9DI09.mjs';
import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword"
  }
});
var mailOptions = {
  from: "youremail@gmail.com",
  to: "oceanoftech@outlook.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const likes = await getLikes() || [];
  return renderTemplate`${maybeRenderHead()}<div> <h1>${likes.map((like) => {
    renderTemplate`<p>hello
${like.userId}</p>`;
  })}</h1> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/test.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
