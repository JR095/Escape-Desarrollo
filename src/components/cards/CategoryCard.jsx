import "../../index.css";
import PropTypes from 'prop-types';
export function CategoryCard({ title = 'Sodas' }) {
    return (
        <div className="bg-white dark:bg-[#404040] p-4 rounded-xl">
            <h3 className="text-black dark:text-white dark:hover:text-sky-500 hover:text-sky-500 text-center font-semibold text-base">{title}</h3>
        </div>
    );
}

CategoryCard.propTypes = {
    title: PropTypes.string
};
