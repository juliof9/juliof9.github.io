import image3 from '../../../assets/images/services/dev.jpg'
import image5 from '../../../assets/images/services/seo.jpg'
import image4 from '../../../assets/images/services/call.jpg'
import image1 from '../../../assets/images/services/cloud.jpg'
import image2 from '../../../assets/images/services/server.jpg'
import image6 from '../../../assets/images/services/consulting.jpg'

const Services = () => {
  return (
    <section id='services' className="w-full px-10 md:px-20">
      <h2 className="text-4xl md:text-6xl font-extrabold text-#051923 mb-10">Servicios</h2>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16">
        {dummyServices.map((service) => (
          <Service key={service.id} title={service.title} label={service.label} urlImg={service.urlImg} />
        ))}
      </div>
    </section>
  )
}

interface ServiceDetails {
  id?: number,
  urlImg?: string,
  title: string,
  label: string,
}

const Service = ({ title, label, urlImg }: ServiceDetails) => (
  <div>
    <img className="object-cover h-80 w-80 sm:h-96 sm:w-96 rounded-3xl transition duration-300 ease-in-out hover:-translate-y-6" src={urlImg} alt={urlImg} />

    <h3 className="text-2xl text-center font-bold py-2 text-service-color">{title}</h3>

    <p className="font-semibold pb-5 text-center">{label}</p>
  </div>
)

const dummyServices: ServiceDetails[] = [
  {
    id: 1,
    urlImg: image3,
    title: 'Desarrollo de software',
    label: 'Soluciones personalizadas para sus desafíos únicos'
  },
  {
    id: 2,
    urlImg: image2,
    title: 'Manejo de IT',
    label: 'Optimice las operaciones de TI de su empresa'
  },
  {
    id: 3,
    urlImg: image6,
    title: 'Consultoría y asesoramiento',
    label: 'Orientación estratégica para sus emprendimientos tecnológicos'
  },
  {
    id: 4,
    urlImg: image4,
    title: 'Diseño UI/UX',
    label: 'Impresionantes imágenes para experiencias inolvidables.'
  },
  {
    id: 5,
    urlImg: image5,
    title: 'Desarrollo Web y mejoras en procesos',
    label: 'Manténgase conectado mientras viaja con nuestras aplicaciones móviles'
  },
  {
    id: 6,
    urlImg: image1,
    title: 'Servicios en la nube',
    label: 'Prepárese para el futuro de los dispositivos conectados'
  },
]

export default Services