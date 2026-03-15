import { Perfil } from "../../domain/entities/perfil";
export const perfilRepositorio = {
getPerfil(): Perfil {
    return{
nombre : "Junior J Solis",
localizacion: "Managua , Nicaragua",
bio:"Junior J. Solis | Software Developer and Data Analyst",
avatar:"/JuniorJSolis.jpeg",
links:[
{nombre:"LinkedIn", url:"https://www.linkedin.com/in/junior-jose-solis-silva-6b9b15307/", icono:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"},
{nombre:"Github", url:"https://github.com/junior-js", icono:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png"},
{nombre:"Instagram", url:"https://www.instagram.com/juniorjsolis?igsh=MXNlbXpiamthMnE1dw==", icono:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png"},
{nombre:"TikTok", url:"https://www.tiktok.com/@juniorjsolis?_t=ZS-8v1PU0hO1Ky&_r=1", icono:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png"},

]

    }
}}