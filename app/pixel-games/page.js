import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function New() {
    const newGames = getGamesByCategory("pixel")
    return (
        <main>
            <CardList id="pixel" title="Пиксельные игры" data={newGames}/>
        </main>
    )
}