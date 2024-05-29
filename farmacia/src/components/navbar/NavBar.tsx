import { FirstAid, PhosphorLogo } from "@phosphor-icons/react"
function Navbar() {
 
    return (
      <>
       <div className='w-full bg-azulEscuro text-branco flex justify-around items-center py-2'>
            <div className="container flex justify-around items-center text-lg">  
            <div><FirstAid size={60} /></div>
              <div className="container grid grid-cols-2 text-white">
        <h1 className="text-5xl font-bold text-white">Farmacia</h1>
        <div className="flex gap-4">
            <ul className=" grid-rows-8 flex gap-7 text-1xl justify-between">
                
                <li className='hover:underline'>Categorias</li>
                <li className='hover:underline'>Cadastrar Produtos</li>
                
            </ul>
        </div>
        </div>
              </div>
              <div className='container flex justify-end mr-20 text-lg'>
                <div className='hover:underline decoration-custom-blue'>
                <button className="rounded-tl-full rounded-tr-full rounded-bl-full flex justify-center items-center gap-3 p-2 w-40 bg-custom-blue text-white">Entrar</button>
                </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar