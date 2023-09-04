import { PropTypes } from 'prop-types';
export const GIfItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

GIfItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
