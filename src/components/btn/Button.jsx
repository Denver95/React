import btn_style from './Button.module.css'


export function Button(props) {

	return (
		<>
			<button {...props} className={btn_style.btn}>{props.child} Add message</button>
		</>
	)


}
