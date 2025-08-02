//  hooks usado en ContentModals
import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  // NOTE - Custom hooks en este caso retorna array, puede ser un object pero con esto podemos darle un nombre diferente al usarlo repetidamente, ejemplo ContentModal

  return [isOpen, openModal, closeModal];
};
