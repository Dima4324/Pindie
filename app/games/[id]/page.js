"use client"
import Styles from "./Game.module.css";
import { getNormalizedGameDataById, isResponseOk, checkIfUserVoted, vote } from "../../api/api-utils"
import { endpoints } from "../../api/config"
import { GameNotFound } from "../../components/GameNotFound/GameNotFound";
import { Preloader } from "../../components/Preloader/Preloader"
import { useState, useEffect } from "react";
import { useStore } from "@/app/store/app-store"; 

export default function GamePage(props) {
  const [game, setGame] = useState(null)
  const [preloaderVisible, setPreloaderVisible] = useState(true)
  const [isVoted, setIsVoted] = useState(false)

  const authContext = useStore();

  useEffect(() => {
    async function fetchData() {
      setPreloaderVisible(true);
      const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
      console.log(game)
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData()
  }, [])

  useEffect(() => {
    authContext.user && game ? setIsVoted(checkIfUserVoted(game, authContext.user.id)) : setIsVoted(false);
  }, [authContext.user, game]);

  useEffect(() => {
    if (authContext.user && game) {
      setIsVoted(checkIfUserVoted(game, authContext.user.id))
    } else {
      setIsVoted(false)
    }
  }, [authContext.user, game])

  const handleVote = async () => {
    const jwt = authContext.token

    let usersIdArray = game.users.length ? game.users.map((user) => user.id) : []

    usersIdArray.push(authContext.user.id)
    
    const response = await vote(`${endpoints.games}/${game.id}`, jwt, usersIdArray)
    if (isResponseOk(response)) {
      setGame(() => {
        return {
          ...game,
          users: [...game.users, authContext.user],
        };
      });
      setIsVoted(true);
    }
  }

  return (
    <main className="main">
      {
        game ? (
          <>
            <section className={Styles["game"]}>
              <iframe
                className={Styles["game__iframe"]}
                src={game.link}
              ></iframe>
            </section>
            <section className={Styles["about"]}>
              <h2 className={Styles["about__title"]}>{game.title}</h2>
              <div className={Styles["about__content"]}>
                <p className={Styles["about__description"]}>
                  {game.description}
                </p>
                <div className={Styles["about__author"]}>
                  <p>
                    Автор:
                    <span className={Styles["about__accent"]}>{game.developer}</span>
                  </p>
                </div>
              </div>
              <div className={Styles["about__vote"]}>
                <p className={Styles["about__vote-amount"]}>
                  За игру уже проголосовали:
                  <span className={Styles["about__accent"]}>{game.users.length}</span>
                </p>
                <button className={`button ${Styles["about__vote-button"]}`} onClick={handleVote} disabled={!authContext.isAuth || isVoted}>
                  {isVoted ? "Голос учтен" : "Голосовать"}
                </button>
              </div>
            </section>
          </>
        ) : preloaderVisible ? (
          <Preloader />
        ) : (
          <GameNotFound />
        )
      }
    </main>
  );
}