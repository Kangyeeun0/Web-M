import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres, year, rating, runtime }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <ul>
                <p>year : </p>
                {year}
            </ul>
            <ul>
                <p>rating : </p>
                {rating}
            </ul>
            <ul>
                <p>runtime : </p>
                {runtime}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
};

export default Movie;
