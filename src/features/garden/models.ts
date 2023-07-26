export interface Plant{
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface Pot{
    id: string;
    name: string;
    plant: string;
    datePlanted: Date;
    dateFertilized: Date;
    dateWatered: Date;
}

export interface Garden{
    id: string;
    name: string;
    pots: Pot[];
}