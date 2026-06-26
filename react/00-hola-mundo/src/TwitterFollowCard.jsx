import { useState } from "react";

export function TwitterFollowCard({
  name = "Nombre",
  userName = "Usuario",
  imagePath = "/src/assets/img/user.png",
  createInitialFollowing,
  formatUserName = () => "@Usuario",
}) {
  const [isFollowing, setIsFollowing] = useState(createInitialFollowing);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let buttonStyle = isFollowing
    ? "text-gray-200 bg-gray-700 border border-gray-200 hover:text-red-400 hover:bg-rose-900 hover:border-0"
    : "text-gray-700 bg-gray-200 hover:opacity-80";

  let buttonText = isFollowing
    ? isHovering
      ? "Dejar de seguir"
      : "Siguiendo"
    : "Seguir";

  return (
    <aside className="bg-gray-700 h-16 w-full p-4 flex items-center justify-between gap-8 rounded-2xl">
      <img className="h-10 rounded-full" src={imagePath} alt="Dalinar" />
      <div className="flex-1">
        <h6 className="text-white text-sm font-semibold">{name}</h6>
        <p className="text-gray-200 text-xs font-light">
          {formatUserName(userName)}
        </p>
      </div>
      <button
        className={`py-2 px-4 rounded-4xl text-xs font-bold transition-colors duration-200 ${buttonStyle}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
      </button>
    </aside>
  );
}
