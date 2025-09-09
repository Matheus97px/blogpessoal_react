import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagemProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagemProps) {

    


    return (
    
   
        

         <article className="bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-[1.04]">
          <div className="p-4">
            <div className="flex items-center gap-1 mb-6">
              <img src={postagem.usuario?.foto}
                   className="h-12 w-12 rounded-full object-cover"
                   alt={postagem.usuario?.nome} />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{postagem.usuario?.nome}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  {new Intl.DateTimeFormat('pt-BR', { 
                    day: '2-digit', 
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  }).format(new Date(postagem.data))}
                </p>
              </div>

            </div>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">{postagem.titulo}</h4>
            <p className="text-gray-600 leading-relaxed mb-4">{postagem.texto}</p>
            
            <div className="flex items-center gap-2 mb-4">
                
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/60 text-sky-700 hover:bg-white hover:cursor-default">
                
                {postagem.tema?.descricao} 
              </span>
            </div>

            <div className="flex items-center justify-between ">
              <div></div>

              <div className="flex items-center gap-2">
               
                <Link to={`/editarpostagem/${postagem.id}`}>
                <button className="w-full flex items-center justify-center py-2 relative overflow-hidden
                    text-indigo-500 border-2 border-indigo-500 group cursor-pointer p-2 rounded-2xl">
                     <span className="absolute inset-0 bg-indigo-500 -translate-x-full 
                group-hover:translate-x-0 transition-transform duration-500 ease-in-out "></span>
                    <span className="relative z-10 group-hover:text-white transition-colors
                 duration-500">Editar</span>
                </button>
                </Link>
                
                <Link to={`/deletarpostagem/${postagem.id}`}>
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

export default CardPostagem