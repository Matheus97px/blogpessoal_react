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

            <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>


                    <div className='flex gap-4'>
                    
                       Link Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        <Link to="/" onClick={logout}>Logout</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar