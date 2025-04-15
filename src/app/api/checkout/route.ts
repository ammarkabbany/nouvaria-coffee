import { env } from "@/env";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { items } = await req.json();
  const url = `${env.API_ENDPOINT}/online-checkout/payment-links`;
  const locationId = env.LOCATION_ID;
  const headers = {
    Authorization: `Bearer ${env.ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    idempotence_key: `website-payment-${randomUUID()}`,
    description: "Checkout from Novaria Coffee Website Services",
    payment_note: "Checkout from Novaria Coffee Website Services",
    checkout_options: {
      ask_for_shipping_address: false,
      redirect_url: "novaria-coffee.vercel.app/menu",
      enable_coupon: true,
      accepted_payment_methods: {
        afterpay_clearpay: true,
        apple_pay: true,
        cash_app_pay: false,
        google_pay: true,
      },
      allow_tipping: true,
    },
    order: {
      location_id: locationId,
      line_items: items.map((item: any) => ({
        ...item,
        quantity: item.quantity.toString(),
        base_price_money: {
          amount: Math.floor(item.base_price_money.amount),
          currency: item.base_price_money.currency,
        },
      })),
    },
  });

  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
  });

  const data = await response.json();
  if (!response.ok) {
    console.error("Failed to create checkout session", data);
    return NextResponse.json(data, { status: 500 });
  }

  return NextResponse.json(body, { status: 200 });
}
