import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormTema() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [tema, setTema] = useState<Tema>({} as Tema);

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
            ToastAlerta('Sua sessão expirou, por favor, logue novamente!', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/temas')
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { Authorization: token }
                })
                ToastAlerta('Tema atualizado com sucesso!', 'success');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar tema!', 'error');
                }
            }
        } else {
            try {
                await cadastrar('/temas', tema, setTema, {
                    headers: { Authorization: token }
                })
                ToastAlerta('Tema cadastrado com sucesso!', 'success');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar tema!', 'error');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }


    return (
        <section className="pt-8">

            <div className="container flex flex-col items-center justify-center mx-auto bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl pb-10">
                <h1 className="text-4xl text-center my-8">
                    {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
                </h1>

                <form className="w-1/2 flex flex-col gap-4"
                    onSubmit={gerarNovoTema}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição do Tema</label>
                        <input
                            type="text"
                            placeholder="Descreva seu tema"
                            name="descricao"
                            className="border-2 border-slate-700 rounded p-2"
                            value={tema.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="relative overflow-hidden px-6 py-3 font-semibold bg-white group
                         border-2 border-black rounded-md cursor-pointer ">
                        <span className="absolute inset-0 rounded-3xl bg-black scale-0
                         group-hover:scale-150 transition-transform duration-500"></span>
                        <span className="relative z-10 text-black group-hover:text-white 
                        transition-colors duration-500">
                            {isLoading ? <ClipLoader color="#fff" size={24} />
                                : <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default FormTema