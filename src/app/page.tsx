import ProfileCard from "../components/profile_card"
import { getPerfil } from "./use-cases/getPerfil"


export default function Home() {

  const profile = getPerfil()

  return (
    <main className="flex items-center justify-center h-screen bg-black">

      <ProfileCard perfil={profile} />

    </main>
  )
}