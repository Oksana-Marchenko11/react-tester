import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(elements => (
          <li
            key={elements.id}
            className={css.item}
            style={{ backgroundColor: random_bg_color() }}
          >
            <span className={css.label}>{elements.label}</span>
            <span className={css.percentage}>{elements.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
