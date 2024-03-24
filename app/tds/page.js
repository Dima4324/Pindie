'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
import { Preloader } from "../components/Preloader/Preloader";
export default function Tds() {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS")
    return (
        <main>  
            {tdsGames ? (
                <CardList id="TDS" title="Шутеры с видом сверху" data={tdsGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}