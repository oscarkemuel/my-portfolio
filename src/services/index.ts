const NEXT_PUBLIC_BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const sendEmail = async (data: IEmailPayload) => {
  const route = `${NEXT_PUBLIC_BFF_URL}/contact/send`;

  const response = await fetch(route, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
