import '../../style/Perfil.css'
import User from '../../assets/user.png'
import { Link } from 'react-router-dom'

function Perfil(){

    


    let usuario = JSON.parse(localStorage.getItem("acesso"))

    let email = usuario.email;
    let senha = usuario.senha;


    return(
        <>
            <div className="container-logout">

                <Link className='logout' to={'/'} >Logout</Link>

            </div>

            <div className='container-perfil'>

                <form className='perfil' action="">

                    <div className="flex flex-col gap-2">

                        <h1 className='tituloz'>Profile picture</h1>
                        <img src={User} alt="User" />

                    </div>

                    <div className="container-input-label">

                        <label htmlFor="">Your E-mail</label>
                        <input type="email" value={email} placeholder='E-mail'/>

                    </div>

                    <div className="container-input-label">

                        <label htmlFor="">Your Password</label>
                        <input type="password" value={senha} placeholder='************' />

                    </div>
                

                </form>

            </div>
        
        </>
    )
}

export default Perfil