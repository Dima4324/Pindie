import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function New() {
    const newGames = getGamesByCategory("shooter")
    return (
        <main>
            <CardList id="shooter" title="Шутеры" data={newGames}/>
        </main>
    )
}