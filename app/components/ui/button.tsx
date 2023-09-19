import '@/app/globals.css'

type Props = {
    buttonType: 'button' | 'submit' | 'reset'
    buttonStyle: 'primary' | 'secondary' | 'tertiary'
    customClass?: string
    onClick?: () => void
    children: string
}

const style = (type:Props['buttonStyle'])=>{
    if(type === 'primary'){
        return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    }
}

const Button = (props:Props)=>{
    return (
        <button
            type={props.buttonType}
            className={props.customClass? props.customClass : style(props.buttonStyle)}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;