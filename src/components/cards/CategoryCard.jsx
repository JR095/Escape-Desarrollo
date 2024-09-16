import "../../index.css";
import PropTypes from 'prop-types';
export function CategoryCard({ title = 'Sodas' }) {
    return (
        <div className="bg-white p-4 rounded-xl">
            <h3 className="text-black hover:text-sky-500 text-center font-semibold text-base">{title}</h3>
        </div>
    );
}

CategoryCard.propTypes = {
    title: PropTypes.string
};
