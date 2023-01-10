import btn_style from './Button.module.css'
import PropTypes from 'prop-types'

export function Button(props) {

	return (
		<>
			<button {...props} className={btn_style.btn}>{props.children} </button>
		</>
	)


}


Button.prototype = {
	type: PropTypes.string
}