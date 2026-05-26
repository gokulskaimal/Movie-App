export interface Movie{
    imdbID : string;
    Title : string;
    Year : string;
    Poster: string;
    Type : string
}

export interface MovieResponse{
    movie : Movie[];
    totalResults : number;

}