export interface ImageUrls {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
}

export interface ImageLocation {
    location: string | null;
    name: string;
}

export type ImageData= {
    alt_description: string;
    description: string;
    urls: ImageUrls;
    user: ImageLocation;
    id:string
}[]
