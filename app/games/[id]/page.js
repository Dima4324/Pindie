"use client"
import Styles from "./Game.module.css";
import { getNormalizedGameDataById, isResponseOk, getJWT, getMe, removeJWT, checkIfUserVoted, vote } from "../../api/api-utils"
import { endpoints } from "../../api/config"
import { GameNotFound } from "../../components/GameNotFound/GameNotFound";
import { Preloader } from "../../components/Preloader/Preloader"
import { useState, useEffect } from "react";

export default function GamePage(props) {
  const [game, setGame] = useState(null)
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData()
  }, [])

  useEffect(() => {
    const jwt = getJWT()
    if (jwt) {
      getMe(endpoints.me, jwt).then(userData => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true)
          setCurrentUser(userData)
        } else {
          setIsAuthorized(false)
          removeJWT()
        }
      })
    }
  }, [])

  useEffect(() => {
    if (currentUser && game) {
      setIsVoted(checkIfUserVoted(game, currentUser.id))
    } else {
      setIsVoted(false)
    }
  }, [currentUser, game])

  const handleVote = async () => {
    const jwt = getJWT()

    let usersIdArray = game.users.length ? game.users.map((user) => user.id) : []

    usersIdArray.push(currentUser.id)

    const response = await vote(`${endpoints.games}/${game.id}`, jwt, usersIdArray)

    if (isResponseOk(response)) {
      setIsVoted(!isVoted)

      setGame(() => {
        return {
          ...game,
          users: [...game.users, currentUser]
        }
      })
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
                <button className={`button ${Styles["about__vote-button"]}`} onClick={handleVote} disabled={!isAuthorized}>
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