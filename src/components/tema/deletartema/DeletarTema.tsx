import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function DeletarTema() {

  const navigate = useNavigate();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Sua sessão expirou!', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarTema() {
    setIsLoading(true);

    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token
        }
      })

      ToastAlerta('Tema deletado com sucesso!', 'success');
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout();
      } else {
        ToastAlerta('Erro ao deletar tema!', 'error');
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate('/temas');
  }

  return (
    <>
      <section className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4">Deletar Tema</h1>
        <p className="text-center font-semibold mb-4">
          Tem certeza que deseja deletar esse tema?</p>

        <article className="bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 ">
            <div className="mb-4 ">
              <h3 className="font-bold text-gray-800">Tema</h3>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{tema.descricao}</h4>
            <div className="flex items-center justify-between ">
              <div></div>
              <div className="flex items-center gap-2">

                <button className="w-full flex items-center justify-center py-2 relative overflow-hidden text-indigo-500 border-2 border-indigo-500 group cursor-pointer p-2 rounded-2xl"
                onClick={deletarTema}>
                 
                  <span className="absolute inset-0 bg-indigo-500 -translate-x-full 
                group-hover:translate-x-0 transition-transform duration-500 ease-in-out "></span>
                  <span className="relative z-10 group-hover:text-white transition-colors
                 duration-500">Sim</span>
                </button>



                <button className="w-full flex items-center justify-center relative overflow-hidden
                text-red-500 border-2 border-red-500 group cursor-pointer p-2 rounded-2xl"
                  
                     onClick={retornar}>
                  <span className="absolute inset-0 bg-red-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500"> {isLoading ? <ClipLoader color="#fff" size={24} /> : <span>Não</span>}</span>
                </button>

              </div>
            </div>
          </div>
        </article>


      </section>


    </>
  )
}

export default DeletarTema