import './TinyBtn.css'
import StarWhite from '../../assets/icons/StarWhite.svg'

const TinyMedia = (props) => {
  return (
    <div className="mediaStar tinyMedia">
      <h6 className="tinyMedia">{props.media}&nbsp;&nbsp;</h6>
      <img src={StarWhite} />
    </div>
  )
}

export default TinyMedia;