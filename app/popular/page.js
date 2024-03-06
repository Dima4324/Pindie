import { CardList } from "../components/CardsList/CardList"
import { getGamesByCategory } from "../data/data-utils"
export default function Popular() {
    const newGames = getGamesByCategory("popular")
    return (
        <main>
            <CardList id="popular" title="Популярные" data={newGames}/>
        </main>
    )
}