const TranscriptBox = ({ transcript }) => {
  return (
    <div className="transcript-box">
      {transcript.map((msg, i) => (
        <div key={i} className={`chat-bubble ${msg.role}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default TranscriptBox;
