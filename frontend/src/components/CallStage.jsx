import AvatarPanel from "./AvatarPanel";

function CallStage({ assistantIsSpeaking, onEnd }) {
  return (
    <div className="call-stage">
      <div className="avatars">
        <AvatarPanel
          title="Fitronix AI"
          speaking={assistantIsSpeaking}
          imageUrl="./red.jpeg"
        />

        <AvatarPanel
          title="You"
          speaking={!assistantIsSpeaking}
          imageUrl="./download.jpeg"
        />
      </div>

      <button className="end-btn" onClick={onEnd}>
        End Call
      </button>
    </div>
  );
}

export default CallStage;
