export interface ICalendar {
    monthIndex: number,
    year: number,
    scrollPosition?: number
}

export interface IMonthDays {
    id: number,
    date: Date,
    toDay?: Date,
    DOTWeek?: number,
    shortDOTWeek?: string,
    updateScrollPosition?: any
}