import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  //State for player name
  const [playerName, setPlayerName] = useState(initialName);
  //State to toggle name editing
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // Toggle between edit and save
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            // Allow editing name
            onChange={(event) => setPlayerName(event.target.value)}
          />
        )}
        <span className="player-symbol">{symbol}</span> {/*Show player symbol*/}
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
      {/*Button to edit/save name*/}
    </li>
  );
}
