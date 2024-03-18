import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
export default async function Tds() {
    const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS")
    return (
        <main>
            <CardList id="TDS" title="Шутеры с видом сверху" data={tdsGames}/>
        </main>
    )
}