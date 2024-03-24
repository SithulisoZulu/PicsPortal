// import jwt from 'jsonwebtoken';

// import { User } from '../models/userModel';
// import type { AstroCookies } from 'astro';
// import { addUser } from '../store/userStore';

// const protect = async (cookies: AstroCookies) => {
//     let token;
//     token = cookies.get('jwToken');
//     const me: any = JSON.parse(token);

//     if (token) {
//         try {
//             const decoded = jwt.verify(token, import.meta.env.JWT_SECRET);
//             const user = await User.findById(decoded.userId);
//             // addUser()
//         } catch (error) {
//             return new Response(
//                 JSON.stringify({
//                   message: "No authorized, invalid token",
//                 }),
//                 { status: 401 }
//             ); 
//         }
//     } else {
//         return new Response(
//             JSON.stringify({
//               message: "No authorized, no token",
//             }),
//             { status: 401 }
//         );
//     }
// }