import { motion } from 'framer-motion';
import Image from 'next/image';

const imageWidth = 400; // Width of the image in pixels
const imageHeight = 300; // Height of the image in pixels

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <motion.div className="fixed inset-0 bg-opacity-30 bg-cover bg-black flex justify-center items-center p-4 z-50" 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -50 }}
    >
      <motion.div className="bg-black/30 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-lg p-6 max-w-2xl w-full space-y-12"
                   initial={{ scale: 0.9 }} 
                   animate={{ scale: 1 }} 
                   exit={{ scale: 0.9 }}
      >
        <h2 className="text-2xl text-center font-bold text-white">{project.title}<span className='text-accent'>.</span></h2>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-4'>
          <div className='md:w-1/2'>
            <ul className="flex justify-center items-center flex-wrap">
              {project.frameworks.map((framework, index) => (
                <li key={index} className="text-red-500 flex items-center m-2">
                  {project.icon[index]}
                  <span className="ml-2 text-white">{framework}</span>
                </li>
              ))}
            </ul>
            <p className='text-center text-white'>{project.description}</p>
          </div>
          <Image 
            src={project.image} 
            alt={project.title} 
            width={imageWidth} 
            height={imageHeight}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className='flex justify-between mt-4'>
          <a href={project.link} className="text-white hover:text-accent rounded px-4 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Visiter le site</a>
        
        <div className='text-center'>
          <button className="py-2 px-4 bg-white text-accent rounded hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsModal;
