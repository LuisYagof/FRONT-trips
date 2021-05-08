import './BtnRadio.css'

const BtnRadio = (props) => {

  const handleClick = (e) => {
    props.handleUser(e.target.value)
  }
  
  return (
    <div className="userType">
      <input onClick={handleClick} type="radio" name="userType" id="docente" value="docentes" />
      <label htmlFor="docente" className="label-radio docente">Docente</label>

      <input onClick={handleClick} type="radio" name="userType" id="estudiante" value="estudiantes" checked />
      <label htmlFor="estudiante" className="label-radio estudiante">Estudiante</label>
    </div>
  )
}

export default BtnRadio;