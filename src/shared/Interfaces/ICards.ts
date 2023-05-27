export interface ICards {
    item: {
        id: number;
        name: string;
        location: {
            returned: boolean;
            place: null | string;
            holder: string;
        };
        timestamp: string;
    },
    i?: number
}