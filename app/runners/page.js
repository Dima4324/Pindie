'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
import { Preloader } from "../components/Preloader/Preloader";
export default function Runners() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner")
    return (
        <main>
            
            {runnerGames ? (
                <CardList id="runner" title="Раннеры" data={runnerGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}