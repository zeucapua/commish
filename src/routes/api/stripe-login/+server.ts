import { json, type RequestHandler } from "@sveltejs/kit";
import { STRIPE_CLIENT_ID } from "$env/static/private";

export const GET = (async ({request}) => {
  const url = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${STRIPE_CLIENT_ID}&scope=read_write`;
  return json({ redirect: url });
}) satisfies RequestHandler;
