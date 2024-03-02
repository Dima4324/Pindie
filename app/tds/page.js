import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function New() {
    const newGames = getGamesByCategory("TDS")
    return (
        <main>
            <CardList id="TDS" title="Шутеры с видом сверху" data={newGames}/>
        </main>
    )
}