const apiUrl: string = "https://api.openai.com/v1/chat/completions";
const apiKey: string = process.env.REACT_APP_CHATGPT_API_KEY || "";

type Result = {
  choices: {
    message: {
      content: string;
    };
  }[];
};

export const getDishResponse = async (input: string) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `I have the following ingredients: ${input}. Please provide 3-5 dishes' name that I can cook with the given dishes.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const result: Result = await response.json();
  return result?.choices[0]?.message?.content || "";
};

export const getDetailsOfDishResponse = async (input: string) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Give me more details about ${input}. Details shoudl include Cooking Time: [cooking-time], Preparation Time: [preparation-time], Ingredients: [list-of-ingredients], Steps to Cook: 1. [Step 1] 2. [Step 2] 3. [Step 3] and so on `,
        },
      ],
    }),
  });
  return response.json();
};
