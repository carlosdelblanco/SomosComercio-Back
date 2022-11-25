import { rest } from "msw";
import { UserCredentials } from "../data/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}users/signup`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();

    const { username } = user;
    return res.once(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${apiUrl}users/signup`, async (req, res, ctx) => {
    return res.once(
      ctx.status(409),
      ctx.json({ error: "Unable to register, user already exists" })
    );
  }),
];
