import "./assets/css/styles.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { TwitterFollowCardContainer } from "./TwitterFollowCardContainer";


const users = [
  {
    name: "Dalinar",
    userName: "Dalinar_Kholin",
    isFollowing: true,
    imagePath: "/src/assets/img/user_dalinar_cuadrado.png"
  },
  {
    name: "Kaladin",
    userName: "Kaladin_Tormenta",
    isFollowing: true,
    imagePath: "/src/assets/img/user_kaladin_cuadrado.png"
  },
  {
    name: "Szeth",
    userName: "Szeth_Vallano",
    isFollowing: false,
    imagePath: "/src/assets/img/user_szeth_cuadrado.jpg"
  }
]



export function App() {

const formatUserName = (userName) => `@${userName}`;

  return (
    <>
      <TwitterFollowCardContainer>
        {
          users.map(user => {
            const {name, userName, isFollowing, imagePath} = user
            return (
              <TwitterFollowCard
                key={userName}
                name={name}
                userName={userName}
                createInitialFollowing={isFollowing}
                imagePath={imagePath}
                formatUserName={formatUserName}
              />
            )
          })
        }
        
        {/* <TwitterFollowCard
          userName={"dalinar72fx"}
          name={"Dalinar"}
          imagePath={"/src/assets/img/user_dalinar_cuadrado.png"}
          isFollowing={true}
          formatUserName={formatUserName}
        />
        <TwitterFollowCard
          userName={"kal_223"}
          name={"Kaladin"}
          imagePath={"/src/assets/img/user_kaladin_cuadrado.png"}
          isFollowing={true}
          formatUserName={formatUserName}

        />
        <TwitterFollowCard
          userName={"szzethh"}
          name={"Szeth"}
          imagePath={"/src/assets/img/user_szeth_cuadrado.jpg"}
          isFollowing={false}
          formatUserName={formatUserName}
        />
        <TwitterFollowCard /> */}
      </TwitterFollowCardContainer>
    </>
  );
}
