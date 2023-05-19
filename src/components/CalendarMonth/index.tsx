import React, { useState } from 'react'
import { ICalendar } from '../../shared/Interfaces/ICalendar';
import styles from '../Calendar/Calendar.module.scss';

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

    const [monthSelector, setMonthSelector] = useState('' || months[month])

    return (
        <select
            className={styles.container__calendar_month}
            value={monthSelector}
            onChange={e => setMonthSelector(e.target.value)}
        >
            {months.map(monthOTY =>
                <option value={monthOTY}>{monthOTY}</option>
            )}
        </select>
    )
}

export default CalendarMonth