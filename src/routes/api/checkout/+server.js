import { PRICE_ID, STRIPE_API_KEY } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";
import { json } from "@sveltejs/kit";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_API_KEY);

export const POST = async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
    });

    return json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    return json({ error: error }, { status: 500 });
  }
};
