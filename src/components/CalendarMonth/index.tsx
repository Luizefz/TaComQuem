import React from 'react'
import { ICalendar } from '../../shared/Interfaces/ICalendar';

function CalendarMonth({ month = 0 }: Partial<ICalendar>) {

    let months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    return (
        <h1>{months[month]}</h1>
    )
}

export default CalendarMonth