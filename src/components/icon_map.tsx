import { JSX } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export const iconMap: Record<string, JSX.Element> = {
GitHub: <FaGithub className="text-gray-200" size={30} />,       
  LinkedIn: <FaLinkedin className="text-blue-600" size={30} />,   
  Instagram: <FaInstagram className="text-pink-500" size={30} />, 
  TikTok: <FaTiktok className="text-black" size={30} />,          
};
