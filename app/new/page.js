import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function New() {
    const newGames = getGamesByCategory("new")
    return (
        <main>
            <CardList id="new" title="Новинки" data={newGames}/>
        </main>
    )
}