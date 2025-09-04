import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const {handleLogout} = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert('O Usuario foi deslogado com sucesso!');
        navigate('/');
    }


    return (
        <>

            <nav className="w-full bg-indigo-900 text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>


                    <div className='flex gap-4'>
                    
                       Link Postagens
                        <Link to="/temas" className="hover:underline">Temas</Link>
                        <Link to="/cadastrarTema" className="hover:underline">Cadastrar tema</Link>
                        Perfil
                        <Link to="/" onClick={logout} className="hover:underline">Logout</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar