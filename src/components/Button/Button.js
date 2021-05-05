const Button = (props) => {
    return (
        <button onClick={() => props.onClick()} type="button">{`${props.text}`}</button>
        );
}

export default Button;