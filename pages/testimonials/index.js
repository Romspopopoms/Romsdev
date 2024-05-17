import { motion } from "framer-motion";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import Image from 'next/image';
import Head from 'next/head';

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

// Liste des témoignages
const testimonialsList = [
  {
    id: 1,
    name: "Alice Martin",
    role: "CEO de TechSoft",
    comment: "Le travail réalisé sur notre site web a été exceptionnel. L'attention aux détails et la créativité ont vraiment fait briller notre projet.",
    avatar: "/123.png",
  },
  {
    id: 2,
    name: "Bob Dupont",
    role: "Directeur Marketing chez MarketIn",
    comment: "Une équipe réactive et professionnelle qui a su écouter nos besoins et les transcrire parfaitement sur notre plateforme en ligne.",
    avatar: "/t-avt-3.png",
  },
  {
    id: 3,
    name: "Carla Lemoine",
    role: "Fondatrice de StartInnov",
    comment: "Nous avons été impressionnés par la qualité du code et le respect des délais. Un partenaire de développement web en or !",
    avatar: "/t-avt-2.png",
  },
  // Ajoutez d'autres témoignages au besoin...
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  adaptiveHeight: true,
};

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Témoignages | RomsDev' Portfolio</title>
        <meta name="description" content="Découvrez les témoignages de nos clients satisfaits de nos services de développement web et design." />
        <meta name="keywords" content="témoignages clients, satisfaction clients, développement web, design, RomsDev, La Ciotat, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur" />
        <link rel="canonical" href="https://romsdev.fr/testimonials" />
      </Head>
      <motion.div
        className="min-h-screen bg-primary/30 py-8 xl:py-12 px-4 flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <Circles />
        <motion.h2
          className="h2 text-center text-white my-8"
          variants={fadeInVariant}
        >
          Témoignages<span className='text-accent'>.</span>
        </motion.h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {testimonialsList.map((testimonial) => (
              <motion.div key={testimonial.id} className="outline-none" variants={fadeInVariant}>
                <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                    objectFit="cover"
                  />
                  <p className="text-xl font-semibold mt-4">{testimonial.name}</p>
                  <p className="text-md my-4">{"${testimonial.comment}"}</p>
                  <p className="text-sm uppercase">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
        <Bulb />
      </motion.div>
    </>
  );
};

export default Testimonials;