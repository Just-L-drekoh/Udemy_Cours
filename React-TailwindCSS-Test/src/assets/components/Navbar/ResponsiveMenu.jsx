import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../../mockData/dataNavbar";
import { useEffect } from "react";

export default function ({ open, setIsOpen }) {
  // useEffect pour vérifier la taille de la fenêtre et fermer le menu si la largeur dépasse 'md'
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setIsOpen(false); // Fermer le menu si la taille dépasse 'md' et qu'il est encore ouvert
      }
    };

    window.addEventListener("resize", handleResize);

    // Nettoyer l'event listener lorsqu'on démonte le composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setIsOpen]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl md:hidden">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
