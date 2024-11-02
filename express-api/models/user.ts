import { Item } from "./item";

export interface User {
    id: string,
    name: string,
    items: Item[],
}

export const instanceOfUser = (object: any): object is Item => {
    return 'name' in object;
}