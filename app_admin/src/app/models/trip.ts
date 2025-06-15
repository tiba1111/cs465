export interface Trip {
    _id: string,            // internal primary key (for MongoDB)Add commentMore actions
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
}