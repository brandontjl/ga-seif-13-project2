import react from "react"

function Thumbnail(props) {
    const src = props.src
    const alt = props.alt
    const onClick = props.onClick
    return <img className="thumb" src={src} alt={alt} onClick={onClick} />;
}

export default Thumbnail