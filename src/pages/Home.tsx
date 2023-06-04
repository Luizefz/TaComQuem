import React, { useContext } from 'react'
import Calendar from '../components/Calendar'
import CardList from '../components/CardList'
import Card from '../components/CardList/Card'
import Header from '../components/Header'
import BottomAction from '../components/BottomAction'
import { CardsContext } from '../common/context/Cards'
import { ICard } from '../shared/Interfaces/ICard'

function Home() {
    const { cardsDayFilter } = useContext(CardsContext);

    return (
        <div>
            <Header />

            <Calendar />

            <CardList>
                {cardsDayFilter.map((cardItem: ICard, index: number) =>
                    <Card key={cardItem.id} data={cardItem} index={index} />
                )}
            </CardList>
            <BottomAction />
        </div>
    )
}

export default Home