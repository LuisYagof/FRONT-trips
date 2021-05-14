import Button from "../../components/Button/Button";
import { useHistory } from 'react-router-dom';
import tickSquare from '../../assets/icons/tickSquare.svg';
import '../EnterApp/EnterApp.css'

const ReviewOk = () => {
	const history = useHistory();

	function goBack() {
		history.go(-2);
	}

	return (
		<div className='bodyOnboarding'>
			<div className='iconOk'>
				<div>
					<img className="checkOk" src={tickSquare} alt='' />
				</div>
				<h2>Opinión creada<br /><span className='h2Green'>correctamente</span></h2>
			</div>
			<Button onClick={goBack} text={"Volver"} />
		</div>
	);
}

export default ReviewOk;