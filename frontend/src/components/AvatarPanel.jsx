const AvatarPanel = ({ title, speaking, imageUrl }) => {
  return (
    <div className={`avatar-panel ${speaking ? "speaking" : ""}`}>
      <div className="avatar-circle">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default AvatarPanel;
