'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { Preloader } from "../components/Preloader/Preloader";
export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel")
    return (
        <main>
            {pixelGames ? (
                <CardsListSection id="pixel" title="Пиксельные игры" data={pixelGames} type={pixelGames.length >= 5 ? "slider" : ""}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}