// Guardar repositorio como .io (myUserName.github.io) para probar el sitio web ya subido con un dominio
const Navbar = () => (
  <nav className="lg:block fixed top-0 left-0 right-0 text-white bg-slate-800 h-16 z-10">
    <div className="flex justify-center lg:justify-end items-center">
      <ul className="flex space-x-1 md:space-x-4 lg:space-x-10">
        <Option
          label="Home"
          redirectTo="#home"
        />
        <Option
          label="About Us"
          redirectTo="#about-us"
        />
        <Option
          label="Why Choose Us"
          redirectTo="#why-choose"
        />
        <Option
          label="Contact Us"
          redirectTo="#contact-us"
        />
        <Option
          label="Services"
          redirectTo="#services"
        />
      </ul>
    </div>
  </nav>
)
  
interface Option {
  label: string,
  redirectTo: string,
  elementClassName?: string, // El signo permite que no sea una prop requerida
  containerClassName?: string, // El signo permite que no sea una prop requerida
}

const Option = ({ label, containerClassName, elementClassName, redirectTo }: Option) => {
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
  
  return (
    <div className={`p-5 ${containerClassName}`}>
      <li className={elementClassName} onClick={() => handleOnClick(redirectTo)}>
        <p className="cursor-pointer text-sm font-medium uppercase">{label}</p>
      </li>
    </div>
  )}
  
export default Navbar
  