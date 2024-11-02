export interface Item  {
    id: string,
    name: string,
    desc: string,
    image: string,
    price: number,
    tags: string[],
};

export const instanceOfItem = (object: any): object is Item => {
    return 'name'  in object
        && 'desc'  in object
        && 'image' in object
        && 'price' in object
        && 'tags'  in object;
}
