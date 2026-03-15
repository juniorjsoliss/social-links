import {  ReactNode } from "react";


interface Props {
  nombre: string;
  url: string;
  icono: ReactNode;
}

export default function SocialButton({ nombre, url, icono }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center gap-17 px-4 py-3 bg-gray-700 hover:bg-emerald-700 text-amber-50 rounded-lg transition-colors duration-500 ease-in-out"
    >
     <div className="w-6 h-6 flex items-center justify-center 
                      transform transition-transform duration-300 
                      group-hover:scale-110">
        {icono}
      </div>
      <span className="font-medium">{nombre}</span>
    </a>
  );
}