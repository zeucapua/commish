import { json } from "@sveltejs/kit";
import { stripe } from "$lib/stripe";
import type { RequestHandler } from "./$types";

export const POST = (async ({request}) => {
  const { auth_code } = await request.json();
  const response = await stripe.oauth.token({
    grant_type: "authorization_code",
    code: auth_code 
  });

  const connected_account_id = response.stripe_user_id;
  return json(connected_account_id);
}) as RequestHandler;

