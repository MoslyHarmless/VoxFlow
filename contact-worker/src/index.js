export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { name, email, subject, message } = await request.json();

      if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ error: "All fields are required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Using MailChannels (Free for Cloudflare Workers)
      const emailData = {
        personalizations: [
          {
            to: [{ email: "support@voxflow.uk", name: "VoxFlow Support" }],
          },
        ],
        from: {
          email: "support@voxflow.uk",
          name: "VoxFlow Website",
        },
        subject: `Contact Form: ${subject}`,
        content: [
          {
            type: "text/plain",
            value: `You have received a new message from the VoxFlow website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        ],
      };

      const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } else {
        const errorText = await response.text();
        return new Response(JSON.stringify({ success: false, error: errorText }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: e.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
