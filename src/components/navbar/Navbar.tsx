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

            <nav className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>


                    <div className='flex gap-4'>
                       <Link to='/postagens' className="hover:underline">Postagens</Link>
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