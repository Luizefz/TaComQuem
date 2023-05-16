export interface ICalendar {
    month: number,
    year: number,
    scrollPosition?: number
}

export interface IMonthDays {
    id: number,
    date: Date,
    toDay?: Date,
    DOTWeek?: number,
    shortDOTWeek?: string,
    indexDayValue?: any
}