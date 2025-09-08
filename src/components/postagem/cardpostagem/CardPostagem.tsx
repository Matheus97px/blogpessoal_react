import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagemProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagemProps) {
    return (
        <article className=" bg-slate-100 flex flex-col rounded-xl
         overflow-hidden justify-between shadow-md hover:shadow-2xl transform hover:translate-y-1
         transition-all duration-300 ease-in-out">
            <div>
                <div className="flex w-full bg-gradient-to-b from-white to-sky-400 py-2 px-4 items-center gap-4 border-b-2 border-sky-400">
                    <img src={postagem.usuario?.foto}
                        className="h-12 rounded-full"
                        alt={postagem.usuario?.nome} />
                    <h3 className="text-lg font-bold text-center uppercase">
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className="p-2">
                    <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
                    <div className="mt-2 bg-slate-100 p-4">
                        <p>{postagem.texto}</p>
                        <p>Tema: {postagem.tema?.descricao} </p>
                        <p>Data: {new Intl.DateTimeFormat('pt-Br', { dateStyle: 'full', timeStyle: 'medium', }).format(new Date(postagem.data))}</p>
                    </div>

                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className="w-full flex items-center justify-center py-2 relative overflow-hidden
                    text-indigo-500 border-2 border-indigo-500 group cursor-pointer rounded-bl-lg">
                    <span className="absolute inset-0 bg-indigo-500 -translate-x-full 
                group-hover:translate-x-0 transition-transform duration-500 ease-in-out "></span>
                    <span className="relative z-10 group-hover:text-white transition-colors
                 duration-500">Editar</span>
                </Link>

                <Link to={`/deletarpostagem/${postagem.id}`}
                    className="w-full flex items-center justify-center relative overflow-hidden
                text-red-500 border-2 border-red-500 group cursor-pointer rounded-br-xl">
                    <span className="absolute inset-0 bg-red-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">Deletar</span>

                </Link>

            </div>
        </article>
    )
}

export default CardPostagem