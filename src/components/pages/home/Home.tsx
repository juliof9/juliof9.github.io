// Import your background images
import image1 from '../../../assets/images/slider/ux-ui-one.jpg';
import image2 from '../../../assets/images/slider/ux-ui-two.jpg';
import image3 from '../../../assets/images/slider/ux-ui-three.jpg';
import { Carousel } from 'antd';

const Home = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <Carousel autoplay autoplaySpeed={3000} effect="fade" className="h-full">
        {[image1, image2, image3].map((img, index) => (
          <div key={index} className="h-full w-full">
            <div
              className="h-screen w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 animate-fadeInUp">
          Crea. Construye. Mejora.
        </h1>
        <p className="text-white text-2xl md:text-3xl max-w-2xl animate-fadeInUp delay-200">
          Transformando ideas en realidad... Sé parte de nosotros, sé Be Rad Studios.
        </p>
      </div>
    </section>
  );
};

export default Home;
