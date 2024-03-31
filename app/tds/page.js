'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { Preloader } from "../components/Preloader/Preloader";
export default function Tds() {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS")
    return (
        <main>  
            {tdsGames ? (
                <CardsListSection id="TDS" title="Шутеры с видом сверху" data={tdsGames} type={tdsGames.length >= 5 ? "slider" : ""}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}