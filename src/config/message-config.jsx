import {
  CloudUpload,
  IconCheck,
  IconError,
  IconContainer,
} from '@/components/icons';

export const msgStack = {
  uploading: {
    message: 'We are uploading your image...',
    icon: (
      <IconContainer color='default'>
        <CloudUpload size={24} />
      </IconContainer>
    ),
  },
  error: {
    message: 'oops! something went wrong',
    icon: (
      <IconContainer color='error'>
        <IconError size={26} />
      </IconContainer>
    ),
  },
  success: {
    message: 'Your image was uploaded successfully!',
    icon: (
      <IconContainer color='success'>
        <IconCheck size={24} />
      </IconContainer>
    ),
  },
};
