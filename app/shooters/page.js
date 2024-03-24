'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
import { Preloader } from "../components/Preloader/Preloader";
export default function Shooters() {
    const shootersGames = useGetDataByCategory(endpoints.games, "shooter")
    return (
        <main> 
            {shootersGames ? (
                <CardList id="shooter" title="Шутеры" data={shootersGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}