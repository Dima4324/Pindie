'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { Preloader } from "../components/Preloader/Preloader";
export default function Shooters() {
    const shootersGames = useGetDataByCategory(endpoints.games, "shooter")
    return (
        <main> 
            {shootersGames ? (
                <CardsListSection id="shooter" title="Шутеры" data={shootersGames} type={shootersGames.length >= 5 ? "slider" : ""}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}