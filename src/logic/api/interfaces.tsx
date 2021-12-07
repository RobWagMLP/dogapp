export interface Dog {
    height?: number;
    id: string;
    url?: string;
    width?: number;
    breeds: Array<Breed>;
    categories: Array<Category>;
    [otherOptions: string]: unknown;
}

export interface Breed {
    id: number;
    life_span?: string,
    name?: string,
    reference_image_id?: string,
    temperament?: string,
    weight?: {
        [key: string] : string
    };
    height?: {
        [key: string] : string
    };
    bred_for?: string;
    breed_group?: string;
    country_code?: string;
    alt_names?: string;
    [otherOptions: string]: unknown;
}

export interface Category {
    id: number;
    name: string;
}