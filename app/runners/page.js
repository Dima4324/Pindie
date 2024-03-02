import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function New() {
    const newGames = getGamesByCategory("runner")
    return (
        <main>
            <CardList id="runner" title="Раннеры" data={newGames}/>
        </main>
    )
}