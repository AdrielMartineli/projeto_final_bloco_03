import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";

function Home(){
    return(
        <>
       <div className="bg-verdeClaro w-screen flex justify-center min-h-[80vh]">
        <div className="container grid grid-cols-2 text-white">
            <div className="max-w-7xl flex flex-col items-center gap-4 justify-center py-4 text-preto">
                <h2 className="text-5xl font-bold text-">Seja Bem Vinde!</h2>
                <p className="text-xl">Compre seus remedios pra ficar legalzão</p>

                <div className="flex justify-around gap-4">
                
                
            </div>
            </div>
            
            <div className="max-w-7xl flex  flex-col items-center justify-center">
                <img src="https://ik.imagekit.io/gzqnvo5ykw/HheNdw7.png?updatedAt=1716988946916" 
                alt="Imagem da pagina home"
                className="w-2/3" />
            </div>
        </div>
       </div>
       <ListaCategorias/>
        </>
    );
}
export default Home;