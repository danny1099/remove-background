export const API_URL = import.meta.env.VITE_API_URL;

export const dropzoneConfig = {
  uploadMultiple: false,
  maxFiles: 1,
  maxFilesize: 4,
  acceptedFiles: '.jpg, .jpeg, .png, .webp',
  url: API_URL,
};

export const dropzoneStatus = {
  IDLE: 'idle',
  READY: 'ready',
  UPLOADING: 'uploading',
  ERROR: 'error',
  SUCCESS: 'success',
  TRANSFORM: 'transform',
};
