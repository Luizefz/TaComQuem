export interface ICalendar {
    monthIndex: number,
    year: number,
    scrollPosition?: number
}

export interface ICalendarContext {
    monthDays: IMonthDays[],
    setMonthDays: (days: IMonthDays[]) => (void),
    toDay: Date,
    getDaysInMonth: ({ monthIndex, year }: ICalendar) => IMonthDays[],
    scrollXPosition: (scrollPosition: number) => (void),
    scrollDrag: number
}
export interface IMonthDays {
    id: number,
    date: Date,
    toDay?: Date,
    DOTWeek?: number,
    shortDOTWeek?: string,
    updateScrollPosition?: (id: number) => void
}