import { Fragment } from "react";
import "./assets/css/styles.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { TwitterFollowCardContainer } from "./TwitterFollowCardContainer";

export function App() {
  return (
    <>
      <TwitterFollowCardContainer>
        <TwitterFollowCard
          userName={"dalinar72fx"}
          name={"Dalinar"}
          imagePath={"/src/assets/img/user_dalinar_cuadrado.png"}
          isFollowing={true}
        />
        <TwitterFollowCard
          userName={"kal_223"}
          name={"Kaladin"}
          imagePath={"/src/assets/img/user_kaladin_cuadrado.png"}
          isFollowing={true}
        />
        <TwitterFollowCard
          userName={"szzethh"}
          name={"Szeth"}
          imagePath={"/src/assets/img/user_szeth_cuadrado.jpg"}
          isFollowing={false}
        />
        <TwitterFollowCard />
      </TwitterFollowCardContainer>
    </>
  );
}
