import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
export default async function Shooters() {
    const shootersGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter")
    return (
        <main>
            <CardList id="shooter" title="Шутеры" data={shootersGames}/>
        </main>
    )
}