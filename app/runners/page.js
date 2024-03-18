import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { CardList } from "../components/CardsList/CardList"
export default async function Runners() {
    const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner")
    return (
        <main>
            <CardList id="runner" title="Раннеры" data={runnerGames}/>
        </main>
    )
}