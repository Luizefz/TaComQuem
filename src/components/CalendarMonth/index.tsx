import React from 'react'
import { IMonthDays } from '../../shared/Interfaces/ICalendar';

function CalendarMonth({ date }: IMonthDays) {

    let month = date.getMonth()
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