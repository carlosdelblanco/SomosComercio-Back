import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/users/signup`, (req, res, ctx) => {
    return res(ctx.json({ data: "user has been registered" }));
  }),
];
