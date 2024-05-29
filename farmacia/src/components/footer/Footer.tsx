import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer(){
    return(
        <>
        <div className=" bg-azulEscuro text-branco flex flex-col items-center justify-center py-2 space-y-2 text-white font-poppins">
        <div className="flex flex-col text-white">
            <h2>Blog Pessoal Adriel Martineli | Copyright C não lembro como faz</h2>
            <p className=" flex justify-center">Acesse minhas redes sociais</p>
        <ul className="flex text-1xl justify-between">
                <li><LinkedinLogo size={50} /></li>
                <li><InstagramLogo size={50} /></li>
                <li><GithubLogo size={50} /></li>
                </ul>
        </div>
        </div>
        
        </>
    );
}
export default Footer;