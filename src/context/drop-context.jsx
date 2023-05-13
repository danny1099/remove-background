import { createContext, useState } from 'react';
import { dropzoneStatus, msgStack, toastConfig } from '@/config';
import toast from 'react-hot-toast';

export const DropContext = createContext();

const initialState = {
  status: dropzoneStatus.IDLE,
  urlOriginal: '',
  urlModified: '',
  publicId: '',
};

export function DropProvider({ children }) {
  const [status, setStatus] = useState(initialState);

  const handleStatus = (newStatus) => {
    setStatus({ ...status, newStatus });

    /* Genera el mensa de cambio de estado */
    handleToastMessage(newStatus);
  };

  const handleUrlOriginal = (response) => {
    const { secure_url, public_id } = response;

    /* Actualiza el estado de la url original con el id generado por la respuesta */
    setStatus({
      ...status,
      urlOriginal: secure_url,
      publicId: public_id,
      status: dropzoneStatus.SUCCESS,
    });

    /* Genera el mensaje de confirmación del proceso */
    handleToastMessage(dropzoneStatus.SUCCESS);
  };

  const handleUrlModified = (urlModified) => {
    setStatus({ ...status, urlModified, status: dropzoneStatus.SUCCESS });
  };

  const handleToastMessage = (msg) => {
    toast(msgStack[msg].message, { ...toastConfig, icon: msgStack[msg].icon });
  };

  const value = {
    status,
    handleStatus,
    handleUrlOriginal,
    handleUrlModified,
  };

  return <DropContext.Provider value={value}>{children}</DropContext.Provider>;
}
