import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/');
    }

    let component: ReactNode;

    if (usuario.token !== '') {
        component = (
            <nav className="w-full flex justify-center py-4 ">
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px]
                     after:bg-[#999999]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Blog Pessoal</Link>
                    <div className="flex gap-4">
                        <Link to="/postagens" className="relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-1 after:w-0 after:h-[2px]
                     after:bg-[#999999]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Postagens</Link>
                        <Link to="/temas" className="relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-1 after:w-0 after:h-[2px]
                     after:bg-[#999999]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Temas</Link>
                        {usuario.usuario === 'matheus123@email.com' && <Link to="/cadastrarTema" className="relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-1 after:w-0 after:h-[2px]
                     after:bg-[#999999]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Cadastrar tema</Link>}
                        <Link to="/perfil" className="relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-1 after:w-0 after:h-[2px]
                     after:bg-[#999999]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Perfil</Link>
                        <Link to="/" onClick={logout} className="relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-1 after:w-0 after:h-[2px]
                     after:bg-[#999999]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Logout</Link>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <>

            {component}

        </>
    )
}

export default Navbar