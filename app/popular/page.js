'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
import { Preloader } from "../components/Preloader/Preloader";
export default function Popular() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular")
    return (
        <main>
            {popularGames ? (
                <CardList id="popular" title="Популярные" data={popularGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}