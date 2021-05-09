import './Button.css'

const Button = (props) => {
    return (
        <button className="enterBtn" onClick={() => props.onClick()} type="button">{`${props.text}`}</button>
        );
}

export default Button;