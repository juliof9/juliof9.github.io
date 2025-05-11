import image3 from '../../../assets/images/services/dev.jpg'
import image5 from '../../../assets/images/services/seo.jpg'
import image4 from '../../../assets/images/services/call.jpg'
import image1 from '../../../assets/images/services/cloud.jpg'
import image2 from '../../../assets/images/services/server.jpg'
import image6 from '../../../assets/images/services/consulting.jpg'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyServices.map((service) => (
            <Service
              key={service.id}
              title={service.title}
              label={service.label}
              urlImg={service.urlImg}
            />
          ))}
        </div>
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

const Service = (service: ServiceDetails) => (
  <div key={service.id} className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={service.urlImg} alt={service.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-700">{service.label}</p>
    </div>
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