
import jwt from "jsonwebtoken";

/**
 * Generates a JSON Web Token (JWT) and sets it in the provided cookies.
 * 
 * @param cookies - The cookies object to set the JWT in.
 * @param userId - The user ID to include in the JWT payload.
 * @returns void
 */
const jwToken = (cookies: any, userId: string) => {
    const token = jwt.sign({ userId }, import.meta.env.JWT_SECRET, {
        expiresIn: '30d'
    });
  
    cookies.set('jwToken',  token, {
        httpOnly: true,
        secure: import.meta.env.ENVIRONMENT !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
};

export default jwToken;