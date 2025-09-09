import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { useContext, type ReactNode } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext);

    let component: ReactNode;

    if (usuario.token !== '') {

        component = (

            <footer className="flex justify-center bg-white text-black ">
                <div className="container  flex-row items-center py-4 justify-center grid grid-cols-2">
                    <div className="flex flex-col items-center">
                        <p className='text-xl font-bold'>
                            Meu Blog Pessoal | Copyright: {data}
                        </p>
                        <p className='text-lg'>
                            Desenvolvido por Matheus
                        </p>

                    </div>

                    <div className='flex flex-col items-center border-l-2 border-gray-300'>
                        <p className='text-lg'>Acesse minhas redes sociais</p>
                        <div className='flex flex-row gap-4 justify-center'>
                            <a href="https://github.com/Matheus97px" target="_blank" rel="noreferrer">
                            <GithubLogoIcon size={32} weight='bold' className='hover:text-purple-600 transition-colors duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/in/matheuspx97/" target="_blank" rel="noreferrer">
                            <LinkedinLogoIcon size={32} weight='bold' className='hover:text-sky-600 transition-colors duration-300' />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>

        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer