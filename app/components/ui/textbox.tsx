import '@/app/globals.css'

type Props = {
    type: 'text' | 'password' | 'email'
    textboxStyle: 'primary' | 'secondary' | 'tertiary'
    customClass?: string
    placeholder?: string
    onChange?: () => void
}

const style = (type:Props['textboxStyle'])=>{
    if(type === 'primary'){
        return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    }
}

const textBox = (props:Props)=>{
    return (
        <input
            type={props.type}
            className={props.customClass? props.customClass : style(props.textboxStyle)}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

export default textBox;