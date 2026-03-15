import SocialButton from "./social_button";
import { Perfil } from "../domain/entities/perfil";
import { FaGithub } from "react-icons/fa";
import { iconMap } from "./icon_map";
interface Props {
perfil : Perfil;

}

export default function ProfileCard({ perfil }: Props) {
  return (
    <div className="bg-slate-800 p-8 rounded-xl text-center w-[350px]">

      <img
        src={perfil.avatar}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h1 className="text-2xl font-bold">{perfil.nombre}</h1>

      <p className="text-yellow-400">{perfil.localizacion}</p>

      <p className="text-gray-400 mt-3 mb-6">
        {perfil.bio}
      </p>

      <div className="flex flex-col gap-3">
        {perfil.links.map((link) => (
          <SocialButton
            key={link.nombre}
            nombre={link.nombre}
            url={link.url}
     icono={iconMap[link.nombre] ?? <FaGithub  size={30} />}

     
          />
        ))}
      </div>

    </div>
  )
}