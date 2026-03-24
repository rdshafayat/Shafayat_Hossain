export async function POST(req) {
    try {
      const { email } = await req.json();
  
      console.log("Incoming email:", email);
  
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: process.env.KIT_API_KEY,
            email: email,
          }),
        }
      );
  
      const data = await response.json();
  
      console.log("Kit response:", data);
  
      return new Response(JSON.stringify(data), { status: 200 });
  
    } catch (error) {
      console.error("Error:", error);
  
      return new Response(
        JSON.stringify({ error: "Something went wrong" }),
        { status: 500 }
      );
    }
  }