import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

function App() {

  return (
    <div>
      <h1>Chat AI Tutorial</h1>
    </div>
  );
}
export default App;