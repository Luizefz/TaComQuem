import { createContext, useState } from 'react';
import { ICard, ICardsContext } from '../../shared/Interfaces/ICard';

export const CardsContext = createContext({} as ICardsContext);
CardsContext.displayName = 'CardsContext';

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
    const [cardData, setCardData] = useState<ICard[]>([
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
            'name': 'Contrato de locação',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'datetime': 'Sun Jun 04 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 5,
            'name': 'Cartão de acesso',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'datetime': 'Sun Jun 04 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)'
        },
        {
            'id': 6,
            'name': 'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            'location': { 'returned': false, 'place': null, 'holder': 'Lúcio Mauro' },
            'datetime': 'Sun Jun 04 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)'
        }
    ]);
    const [selectedDay, setSelectedDay] = useState('');

    cardData.sort((a, b) => {
        if (a.datetime > b.datetime) {
            return -1;
        }
        if (b.datetime < a.datetime) {
            return 1;
        }
        return 0
    });

    const cardsDayFilter = cardData.filter(function (dayFilter) {
        let date = new Date(dayFilter.datetime)
        if (!selectedDay) {
            return cardData
        } else {
            return date.toLocaleDateString() === selectedDay
        }
    });


    return (
        <CardsContext.Provider
            value={{
                setCardData,
                cardsDayFilter,
                setSelectedDay
            }}>
            {children}
        </CardsContext.Provider>
    )
}