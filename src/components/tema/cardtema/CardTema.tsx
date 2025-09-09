import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema';

interface CardTemaProps {
  tema: Tema;
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <article className="bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-[1.04]">
      <div className="p-4 ">
        <div className="mb-4 ">
            <h3 className="font-bold text-gray-800">Tema</h3>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{tema.descricao}</h4>
        <div className="flex items-center justify-between ">
          <div></div>
          <div className="flex items-center gap-2">
            <Link to={`/editartema/${tema.id}`}>
              <button className="w-full flex items-center justify-center py-2 relative overflow-hidden
                    text-indigo-500 border-2 border-indigo-500 group cursor-pointer p-2 rounded-2xl">
                <span className="absolute inset-0 bg-indigo-500 -translate-x-full 
                group-hover:translate-x-0 transition-transform duration-500 ease-in-out "></span>
                <span className="relative z-10 group-hover:text-white transition-colors
                 duration-500">Editar</span>
              </button>
            </Link>

            <Link to={`/deletartema/${tema.id}`}>
              <button className="w-full flex items-center justify-center relative overflow-hidden
                text-red-500 border-2 border-red-500 group cursor-pointer p-2 rounded-2xl">
                <span className="absolute inset-0 bg-red-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Deletar</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardTema