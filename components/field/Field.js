import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {
  const { title, type, value, onChange } = props;

  return (
    <React.Fragment>
      <div>
        <p className={css.field__label}>{title}</p>
        <input className={css.field__input} type={type} value={value} onChange={onChange} />
      </div>
    </React.Fragment>
);
}

Field.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

Field.defaultProps = {
  title: 'Titill á verkefni',
  value: ''
}
