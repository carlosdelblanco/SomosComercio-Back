import { rest } from "msw";
import { UserCredentials } from "../data/types";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/users/signup`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();
    return res.once(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${apiUrl}/users/signup`, async (req, res, ctx) => {
    return res.once(
      ctx.status(409),
      ctx.json({ error: "Unable to register, user already exists" })
    );
  }),

  rest.get(
    `${apiUrl}/business/loadAllBusiness`,
    async (request, response, context) => {
      return response.once(
        context.status(200),
        context.json({
          contacts: [
            {
              businessName: "Peluqueria",
              category: "Belleza",
              slogan: "cuidandote desde 1999",
              address: "c/paris, 55",
              adhesionDate: "04/07/14",
              contactNumber: "932542545",
              businessImage:
                "https://media.istockphoto.com/id/1305586787/es/foto/retrato-de-mujeres-asi%C3%A1ticas-mujer-mujer-elegante-propietario-de-negocios-de-pie-y-sonre%C3%ADr.jpg?s=612x612&w=0&k=20&c=6zKTodH6YXRg9cTfBhQ1kdpr2wlpDztUwkzp2IZ-EYc=",
            },
          ],
        })
      );
    }
  ),

  rest.get(
    `${apiUrl}/business/loadAllBusiness`,
    async (request, response, context) => {
      return response.once(
        context.status(204),
        context.json({
          message: "No hay negocios para mostrar",
        })
      );
    }
  ),

  rest.delete(
    `${apiUrl}/business/deleteBusiness/:id`,
    async (req, res, ctx) => {
      return res.once(ctx.status(200));
    }
  ),
];
