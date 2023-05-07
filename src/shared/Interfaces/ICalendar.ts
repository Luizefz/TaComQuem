export interface ICalendar {
    month: number,
    year: number
}

export interface IMonthDays {
    id: number,
    date: Date,
    DOTWeek?: number,
    shortDOTWeek?: string,

}