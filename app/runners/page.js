'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { Preloader } from "../components/Preloader/Preloader";
export default function Runners() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner")
    return (
        <main>
            
            {runnerGames ? (
                <CardsListSection id="runner" title="Раннеры" data={runnerGames} type={runnerGames.length >= 5 ? "slider" : ""}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}