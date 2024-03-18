import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
export default async function PixelGames() {
    const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel")
    return (
        <main>
            <CardList id="pixel" title="Пиксельные игры" data={pixelGames}/>
        </main>
    )
}