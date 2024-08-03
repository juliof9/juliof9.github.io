import image3 from '../../../assets/images/services/dev.jpg'
import image5 from '../../../assets/images/services/seo.jpg'
import image4 from '../../../assets/images/services/call.jpg'
import image1 from '../../../assets/images/services/blog.jpg'
import image2 from '../../../assets/images/services/server.jpg'
import image6 from '../../../assets/images/services/consulting.jpg'

const Services = () => {
  return (
    <section id='services' className="w-full px-10 md:px-20">
      <h2 className="text-4xl md:text-6xl font-extrabold text-#051923 mb-10">Services</h2>
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
    <img className="object-cover h-80 w-80 sm:h-96 sm:w-96 rounded-3xl transition duration-300 ease-out hover:-translate-y-1 hover:scale-75" src={urlImg} alt={urlImg} />

    <h3 className="text-2xl text-center font-bold py-2 text-service-color">{title}</h3>

    <p className="font-semibold pb-5 text-center">{label}</p>
  </div>
)

const dummyServices: ServiceDetails[] = [
  {
    id: 1,
    urlImg: image3,
    title: 'Custom Software',
    label: 'Bespoke solutions for your unique challenges'
  },
  {
    id: 2,
    urlImg: image2,
    title: 'IT Management',
    label: 'Optimize your businesses IT operations'
  },
  {
    id: 3,
    urlImg: image6,
    title: 'Consulting',
    label: 'Strategic guidance for your tech ventures'
  },
  {
    id: 4,
    urlImg: image4,
    title: 'UI/UX Design',
    label: 'Stunning visuals for unforgettable experiences'
  },
  {
    id: 5,
    urlImg: image5,
    title: 'Web Development',
    label: 'Stay connected on the go with our mobile apps'
  },
  {
    id: 6,
    urlImg: image1,
    title: 'Cloud Services',
    label: 'Get ready for the future of connected devices'
  },
]

export default Services