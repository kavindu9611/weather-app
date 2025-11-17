import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import { Request, Response, NextFunction } from "express";

const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-zdkigftaz2v0bnvz.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://dev-zdkigftaz2v0bnvz.us.auth0.com/`,
  algorithms: ["RS256"],
});

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  checkJwt(req, res, (err: any) => {
    if (err) {
      console.error("JWT ERROR:", err);
      return res.status(401).json({
        error: "Invalid or missing token",
        details: err.message,
      });
    }
    next();
  });
}
