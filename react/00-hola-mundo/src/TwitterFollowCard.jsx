export function TwitterFollowCard({name="Nombre", userName = "Usuario", imagePath = "/src/assets/img/user.png", isFollowing}) {
  return (
      <aside className="bg-gray-700 h-16 w-full p-4 flex items-center justify-between gap-8 rounded-2xl">
        <img className="h-10 rounded-full" src={imagePath} alt="Dalinar" />
        <div className="flex-1">
          <h6 className="text-white text-sm font-semibold">{name}</h6>
          <p className="text-gray-200 text-xs font-light">@{userName}</p>
        </div>
        <button className="text-gray-700 bg-gray-200 py-2 px-4 rounded-4xl text-xs font-bold">Seguir</button>
      </aside>
  );
}
