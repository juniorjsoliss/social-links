interface Props {
nombre : string;
url : string;

};


export default function SocialButton({ nombre, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="block w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg text-center transition"
    >
      {nombre}
    </a>
  )
}