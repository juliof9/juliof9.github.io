import { Link } from "react-router-dom"

// Guardar repositorio como .io (myUserName.github.io) para probar el sitio web ya subido con un dominio
const Navbar = () => (
  <nav className="lg:block fixed top-0 left-0 right-0 text-white bg-black h-16 px-2 sm:px-20 z-10">
    <div className="flex justify-end items-center">
      <ul className="flex space-x-1 md:space-x-4 lg:space-x-10">
        <Option
          label="INICIO"
          redirectTo="#home"
        />
        <Option
          label="SOBRE NOSOTROS"
          redirectTo="#about-us"
        />

        <Option
          isLink
          label="CONTÁCTANOS"
          redirectTo="/contact-us"
        />
        
        <Option
          label="SERVICIOS"
          redirectTo="#services"
        />
      </ul>
    </div>
  </nav>
)
  
interface Option {
  label: string,
  isLink?: boolean,
  redirectTo: string,
  elementClassName?: string, // El signo permite que no sea una prop requerida
}

const Option = ({ label, isLink, elementClassName, redirectTo }: Option) => {
  const handleOnClick = (id: string) => {
    const idTagErased = id.replace('#', '')

    const element = document.getElementById(idTagErased)

    if (element) {
      const offset = element?.offsetTop - 64

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })}
  }

  if (isLink) {
    return (<div className="px-2 sm:px-5 py-5">
      <li className={elementClassName}>
        <Link to={redirectTo}>
          <p className="cursor-pointer text-xs font-bold uppercase">{label}</p>
        </Link>
      </li>
    </div>)
  }
  
  return (
    <div className="px-2 sm:px-5 py-5">
      <li className={elementClassName} onClick={() => handleOnClick(redirectTo)}>
        <p className="cursor-pointer text-xs font-bold uppercase">{label}</p>
      </li>
    </div>
  )}
  
export default Navbar
  