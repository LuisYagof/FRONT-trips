import Star from '../../assets/icons/Star.svg'
import './Media.css'

const Media = (props) => {
  return (
    <div className="mediaStar">
      <h5 className="mediaNum">{props.media}&nbsp;&nbsp;</h5>
      <img src={Star} />
    </div>
  )
}

export default Media