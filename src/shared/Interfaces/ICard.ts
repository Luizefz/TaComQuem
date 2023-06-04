export interface ICard {
    id: number,
    name: string,
    location: {
        returned: boolean,
        place: null | string,
        holder: string,
    },
    description?: string,
    datetime: string,
}

export interface ICardsContext {
    setCardData: React.Dispatch<React.SetStateAction<ICard[]>>,
    cardsDayFilter: any,
    setSelectedDay: React.Dispatch<React.SetStateAction<string>>,
}