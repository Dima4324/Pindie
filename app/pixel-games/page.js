'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
import { Preloader } from "../components/Preloader/Preloader";
export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel")
    return (
        <main>
            {pixelGames ? (
                <CardList id="pixel" title="Пиксельные игры" data={pixelGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}