import { FaHeart, FaRegHeart } from 'react-icons/fa'
import type { Movie } from '../types/movie'

interface Props {
    movie: Movie
    isFavorite: boolean;
    onToggleFavorite: (movie: Movie) => void;
}

function MovieCard({ movie, isFavorite, onToggleFavorite }: Props) {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", padding: "10px", position: "relative" }}>
            <img src={
                movie.Poster !==
                    "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
            } alt={movie.Title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            <button onClick={() => onToggleFavorite(movie)} style={{ position: "absolute", top: "10px", right: "10px", border: "none", background: "white", borderRadius: "50%", padding: "8px", cursor: "pointer" }} >
                {isFavorite ? (<FaHeart />) : (<FaRegHeart />)}
            </button>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    )
}

export default MovieCard;