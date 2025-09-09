import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";


function Home() {

    return (
        <>
            <section className="flex justify-center">
                <div className='container grid grid-cols-2 text-white '>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-6xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl font-semibold'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem /> 
                        </div>
                        
                    </div>

                    <div className="flex justify-center py-4">
                        <img
                            src="https://i.ibb.co/dsKzKhbr/81655767-c15a-40f4-ae6c-3dd8edcb104b-Photoroom.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </section>

            <ListaPostagens />
        </>
    )
}

export default Home