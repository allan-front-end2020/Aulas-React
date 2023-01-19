import { useState } from "react"

function Conticional() {

    const [ email, setEmail ] = useState()


    function enviarEmail(e){
     e.preventDefault();
      
    }
    return(
        <>
        <h2>Cadastre seu email</h2>
        <form> 
            <input 
            type='email'
            placeholder=" digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            > 
            </input>
            <button onClick={enviarEmail}>Enviar</button>
        </form>
        </>
    )
}

export default Conticional