import PropTypes from 'prop-types'

const Button = ({ style, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      //style={{ backgroundColor: color }}
      className={'btn-toggle ' + style}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
