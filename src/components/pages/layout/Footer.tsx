import { FiPhone } from "react-icons/fi"
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from "react-icons/fa"

import './styles.css'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2024 Be Rad Studios</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="tel:+50377859602">
            <FiPhone className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125" />
          </a>
          <a href="https://www.instagram.com/berad.studios" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125" />
          </a>
          <a href="#">
            <FaFacebookSquare className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
