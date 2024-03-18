import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovies(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    {movies && (
                        <Movie
                            coverImg={movies.medium_cover_image}
                            title={movies.title}
                            summary={movies.summary}
                            genres={movies.genres}
                            year={movies.year}
                            rating={movies.rating}
                            runtime={movies.runtime}
                        />
                    )}
                </div>
            )}
            ;
        </div>
    );
}
export default Detail;

//await는 async 함수 내부에 있지 않으면 사용할 수 없음
