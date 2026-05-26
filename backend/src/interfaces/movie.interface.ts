export interface Movie {
    imdbID : string;
    Title : string;
    Year : string;
    Poster: string;
    Type : string
}

export interface OMDBSearchResponse{
    Search?: Movie[];
    totalResults?: string;
    Response?: string;
    Error? : string;
}