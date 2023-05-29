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
            'datetime': 'Tue Jan 24 2023 08:02:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 1,
            'name': 'Extensão elétrica',
            'location': { 'returned': true, 'place': 'Sala 506', 'holder': 'José Arnaldo' },
            'datetime': 'Tue Jan 24 2023 11:20:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 2,
            'name': 'Adaptador de tomada',
            'location': { 'returned': true, 'place': 'Administração', 'holder': 'Davi Souza' },
            'datetime': 'Tue Jan 24 2023 06:03:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 3,
            'name': 'Chaves de fenda',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'datetime': 'Tue Jan 24 2023 10:01:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 4,
            'name': 'Chaves de fenda',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'datetime': 'Tue Jan 24 2023 09:02:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 5,
            'name': 'Chaves de fenda',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'datetime': 'Tue Jan 24 2023 08:00:00 GMT-0300 (Horário Padrão de Brasília)'
        }
    ];

    data.sort((a, b) => {
        if (a.datetime > b.datetime) {
            return -1;
        }
        if (b.datetime < a.datetime) {
            return 1;
        }
        return 0
    });

    return (
        <div>
            <Header />

            <Calendar />

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