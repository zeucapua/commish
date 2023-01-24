import { json, type RequestHandler } from "@sveltejs/kit";
import { stripe } from "$lib/stripe";

export const POST = (async ({request}) => {
  const response = await stripe.accounts.create({ type: 'standard' });
  const account = response;
  const link_response = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: "http://localhost:5173/refresh",
    return_url: "http://localhost:5173/return",
    type: "account_onboarding"
  });
  const accountLink = link_response;
  return json({accountLink: accountLink});
}) satisfies RequestHandler;
