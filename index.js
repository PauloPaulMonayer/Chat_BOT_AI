import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

async function main() {
  console.log(colors.bold.blue("Welcome to the StudySmart Bot!"));
  console.log(colors.bold.blue("You can now start chatting with the bot."));

  const chatHistory = []; // Stores chat history

  while (true) {
    const userInput = readlineSync.question(colors.bold.yellow("You: "));

    try {
      //Construct chat history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      //Add user input to chat history
      messages.push({ role: "user", content: userInput });

      //call trhe API with user input
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });
      //Get chat completion text/message
      const completionText = chatCompletion.choices[0].message.content;

      if (userInput.toLowerCase() === "exit") {
        console.log(colors.bold.green("Bot: ") + completionText);
        return;
      }

      console.log(colors.bold.green("Bot: ") + completionText);

      //Update history with user input and assistance response
      chatHistory.push(["user", userInput]);
      chatHistory.push(["assistant", completionText]);
    } catch (error) {
      console.error(colors.bold.red(error.message));
    }
  }
}

main();
