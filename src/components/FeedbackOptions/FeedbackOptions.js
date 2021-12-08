import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={s.button}
          type="button"
          name={option}
          key={option}
          onClick={onClick}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
