import btn_style from './Button.module.css'


export function Button(props) {
	console.log(props)

	console.log(props.children)
	return (
		<>
			<button {...props} className={btn_style.btn}>{props.children} </button>
		</>
	)


}
