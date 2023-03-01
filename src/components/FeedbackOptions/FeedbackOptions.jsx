import styles from "./FeedbackOptions.module.scss"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.list}>
            {options.map(option => (
                <li key={option} className={styles.item}>
                    <button className={styles.btn} onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
}