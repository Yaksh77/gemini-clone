import axios from "axios";
const apiKey = "AIzaSyALZeZqLYl_j7Ucd89csrnVs1Xl2z-84Qw";

export async function runChat(prompt) {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response.data.candidates[0].content.parts[0].text);
  return response.data.candidates[0].content.parts[0].text;
}
