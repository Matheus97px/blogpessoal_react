import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import FormPostagem from "../formpostagem/FormPostagem"

function ModalPostagem() {
  return (
    < >
      <Popup
        trigger={
          <button
            className="relative overflow-hidden px-6 py-3 font-semibold bg-white group border-2 
        border-black rounded-md cursor-pointer ">
            <span className="absolute inset-0 rounded-3xl bg-black scale-0 group-hover:scale-150
            transition-transform duration-500"></span>
            <span className="relative z-10 text-black group-hover:text-white transition-colors
            duration-500">Nova Postagem</span>
          </button>

        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem',
          background: 'white',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          
        }}
        overlayStyle={{
          background: 'rgba(0,0,0,0.3)',
          transition: 'opacity 0.3s',
          backdropFilter: 'blur(5px)',
        }}
        className="animate-fade-in"
      >

        <FormPostagem />


      </Popup>

    </>
  )
}

export default ModalPostagem