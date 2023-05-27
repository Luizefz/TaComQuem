import React from 'react'
import Calendar from '../components/Calendar'
import CardList from '../components/CardList'
import Card from '../components/CardList/Card'
import Header from '../components/Header'
import BottomAction from '../components/BottomAction'

function Home() {

    let data = [
        {
            'id': 0,
            'name': 'Molho de chaves',
            'location': { 'returned': false, 'place': null, 'holder': 'Luiz Eduardo' },
            'timestamp': '09:00'
        },
        {
            'id': 1,
            'name': 'Extensão elétrica',
            'location': { 'returned': true, 'place': 'Sala 506', 'holder': 'José Arnaldo' },
            'timestamp': '09:27'
        },
        {
            'id': 2,
            'name': 'Adaptador de tomada',
            'location': { 'returned': true, 'place': 'Administração', 'holder': 'Davi Souza' },
            'timestamp': '08:07'
        },
        {
            'id': 3,
            'name': 'Chaves de fenda',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'timestamp': '08:00'
        },
        {
            'id': 4,
            'name': 'Chaves de fenda',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'timestamp': '08:00'
        },
        {
            'id': 5,
            'name': 'Chaves de fenda',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'timestamp': '08:00'
        }
    ]
    return (
        <div>
            <Header />

            <Calendar monthIndex={4} year={2023} />

            <CardList>
                {data.map((cardItem, i) =>
                    <Card key={cardItem.id} item={cardItem} i={i} />
                )}
            </CardList>
            <BottomAction />
        </div>
    )
}

export default Home