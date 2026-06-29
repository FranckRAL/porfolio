import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export interface SessionPayload {
  email: string;
  role: "admin";
}

export function createToken(
  payload: SessionPayload
) {
  return jwt.sign(payload, SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(
      token,
      SECRET
    ) as SessionPayload;
  } catch {
    return null;
  }
}