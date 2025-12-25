import { useState, useEffect } from "react";
import { vapi, startAssistant, stopAssistant } from "./ai";
import CallStage from "./components/CallStage";
import GlowLogo from "./components/GlowLogo";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);

  useEffect(() => {
    vapi
      .on("call-start", () => setStarted(true))
      .on("call-end", () => setStarted(false))
      .on("speech-start", () => setAssistantIsSpeaking(true))
      .on("speech-end", () => setAssistantIsSpeaking(false));
  }, []);

  const handleStart = async () => {
    await startAssistant();
  };

  const handleStop = async () => {
    await vapi.say(
      "Thanks for using Fitronix. Your personalized fitness plan is ready. Stay consistent and keep pushing forward. Goodbye!"
    );
    setTimeout(() => stopAssistant(), 1500);
  };

  return (
    <div className="app">
      {!started && (
        <div className="home-screen">
          <GlowLogo />
          <button className="start-btn" onClick={handleStart}>
            Start Fitroniux Call
          </button>
        </div>
      )}

      {started && (
        <CallStage
          assistantIsSpeaking={assistantIsSpeaking}
          onEnd={handleStop}
        />
      )}
    </div>
  );
}

export default App;
