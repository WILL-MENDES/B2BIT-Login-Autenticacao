import '../../style/Login.css'
import Logo from '../../assets/Logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login(){

   const navigate = useNavigate();

    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState()

    const [ButtonDisabled, setButtonDisabled] = useState(true);

    const armazenar = (senha, email) =>{

      let objeto = {
        senha: senha,
        email: email
      }
      
      localStorage.setItem("acesso",JSON.stringify(objeto)) 
     
      navigate("/perfil")
    
    }

    return(
        <>
            <div className='w-full h-screen flex flex-col  justify-center items-center md:w-screen'>

                <form className='login'>

                    <img src={Logo} alt="Logo"/>

                    <div className='container-label-input'>
                        <label htmlFor="">E-mail</label>
                        <input id='email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='@gmail.com' />
                    </div>

                    <div className='container-label-input'>
                        <label htmlFor="">Password</label>
                        <input id='senha' type="text" value={senha} onChange={(e)=>{setSenha(e.target.value);
                            setButtonDisabled(e.target.value > 5); }} required placeholder='****************' />
                    </div>

                    <button disabled={ButtonDisabled} onClick={()=>armazenar(senha,email)}>Sing In</button>
   
                </form>

            </div>
        </>
    )
}

export default Login