import Slider from "react-slick";
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";

// Data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: "Je crée une identité de marque unique et mémorable qui capte l'essence de votre entreprise.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Je transforme vos idées en designs visuellement captivants, pour le web et le print.',
  },
  {
    icon: <RxDesktop />,
    title: 'Developpement',
    description: 'Je développe des sites web sur-mesure, optimisés pour performance et adaptabilité.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: "J'optimise votre présence en ligne pour améliorer votre visibilité sur les moteurs de recherche"
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-4 mb-24 xl:mb-0 xl:p-0">
      <Slider {...settings}>
        {serviceData.map((item, index) => (
          <div key={index} className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col justify-between gap-y-4 cursor-pointer shadow-lg transition-shadow duration-300 hover:shadow-xl service-slide">
            <div className="text-4xl text-accent mb-4">
              {item.icon}
            </div>
            <div>
              <div className="mb-2 text-lg font-bold">{item.title}</div>
              <p className="leading-normal">{item.description}</p>
            </div>
            <div className="text-3xl mt-auto">
              <RxArrowTopRight className="mt-4 service-slide-icon transition-transform duration-300 hover:text-accent" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
