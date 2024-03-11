import OpenAI from "openai"
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export async function addText(formData) {
    // Ensure that formData contains a description field
    const description = formData.description || "default description";

    console.log("Please enter both a description and a keyword");

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a question generator"
            },
            {
                role: "user",
                content: `make up questions about ${description}`
            }
        ]
    });

    return chatCompletion.data.choices[0].message.content;
}