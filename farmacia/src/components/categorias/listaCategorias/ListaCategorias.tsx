import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardCategorias/CardCategorias";

function ListaCategorias(){
    const navigate = useNavigate()
    const[categorias,setCategoria]=useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
          await buscar('/categorias', setCategoria,{});
        } catch (error: any) {
            alert('Algo inesperado aconteceu')
        }
      }

      useEffect(()=>{
        buscarCategorias()
    }, [categorias])
    return (
        <>
          <div className="bg-verdeClaro flex justify-center w-full my-4">
            <div className="container flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <>
                    { categorias.map((categoria)=>(
                       <> 
                       <CardCategorias key={categoria.id} categoria={categoria} />
                       </>
                    ) ) }
                    </>
              </div>
            </div>
          </div>
        </>
      );
    
}
export default ListaCategorias;




