import { c as connectDB } from './_id__D0RxJNJh.mjs';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { i as addUser } from './404_CwdhM6EV.mjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = model("User", userSchema);

const jwToken = (cookies, userId) => {
  const token = jwt.sign({ userId }, "picsportal.jwt_secret_", {
    expiresIn: "30d"
  });
  cookies.set("jwToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1e3
  });
};

const login = async (cookies, request) => {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  if (!email || !password) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 404 }
    );
  }
  const user = await User.findOne({ email });
  if (user && await user.matchPassword(password)) {
    addUser(user);
    jwToken(cookies, user._id.toString());
    return new Response(JSON.stringify({
      _id: user._id,
      name: user.name,
      password: user.password
    }));
  } else {
    return new Response(
      JSON.stringify({
        message: "Invalid email or password",
        user
      }),
      { status: 401 }
    );
  }
};
const register = async (cookies, request) => {
  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");
  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    addUser(user);
    jwToken(cookies, user._id.toString());
    return new Response(JSON.stringify({
      _id: user._id,
      name: user.name,
      password: user.password
    }));
  } else {
    return new Response(
      JSON.stringify({
        message: "Something went wrong ",
        user
      }),
      { status: 500 }
    );
  }
};
const logout = async (cookies) => {
  cookies.delete("jwToken");
  const token = cookies.get("jwToken");
  return token;
};
const update = async (data) => {
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");
  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  const userExists = await User.findOne({ email });
  if (!userExists) {
    console.log(userExists);
    throw new Error("User does not exist");
  }
  const user = await User.updateOne({ email }, { name, email });
  if (!user) {
    throw new Error("User update failed");
  }
  return user;
};
const getUser = async (email) => {
  return await User.findOne({ email });
};

connectDB();
const POST = async ({ cookies, request, redirect }) => {
  const user = await login(cookies, request).then((data) => data).catch(() => null);
  if (user?.status === 401) {
    return redirect(`/error/${"login"}`);
  }
  return redirect("/");
};

const login_json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { login_json as a, getUser as g, logout as l, register as r, update as u };
