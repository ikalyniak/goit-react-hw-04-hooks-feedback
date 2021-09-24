import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.list}>
      {options.map(option => (
        <li key={option} className={styles.item}>
          <button
            type="button"
            name={option}
            className={styles.button}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
