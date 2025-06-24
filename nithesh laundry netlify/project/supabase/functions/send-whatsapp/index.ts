import { createClient } from "npm:@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const WHATSAPP_API_URL = "https://graph.facebook.com/v17.0/1117221323499912/messages";
const WHATSAPP_ACCESS_TOKEN = Deno.env.get("EAAUr4QifeJMBOZBNarLAMAfVRnh4IqVBXaauSZAtArOlOg2EF4UGAFacmDCgOm0ZBRBf2Gze4zCv64feyJbJlr4ovfveJFpYNn9mhfGzWGalSwtRlpQuRWYWLbwgm9QpIacPt6ZCIeUFTk5OpZBGKbeRhLZB3Dvr88Xx9TK9b7NJzsJgn7SMr03xqBgZCb0udHotsZCSgs8aP7F4nPZADQZBJmH2fq9z4gZAk5w2KILEIG78BppUv18ZCRbW6ZBhDEnWIrQ8ZD");
const BUSINESS_PHONE_NUMBER = "+918838547515"; // Your business phone number

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { order } = await req.json();

    const message = {
      messaging_product: "whatsapp",
      to: order.customer.phone,
      type: "template",
      template: {
        name: "order_confirmation",
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: order.customer.name,
              },
              {
                type: "text",
                text: order.id,
              },
              {
                type: "text",
                text: `₹${order.totalAmount}`,
              },
              {
                type: "text",
                text: BUSINESS_PHONE_NUMBER,
              },
            ],
          },
        ],
      },
    };

    const response = await fetch(WHATSAPP_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error("Failed to send WhatsApp message");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
