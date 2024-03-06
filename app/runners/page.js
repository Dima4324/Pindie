import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function Runners() {
    const newGames = getGamesByCategory("runner")
    return (
        <main>
            <CardList id="runner" title="Раннеры" data={newGames}/>
        </main>
    )
}