import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
export default async function Popular() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular")
    return (
        <main>
            <CardList id="popular" title="Популярные" data={popularGames}/>
        </main>
    )
}