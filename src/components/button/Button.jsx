import { Button as CKButton } from '@chakra-ui/react';

export default function Button({ children, ...props }) {
  return (
    <CKButton
      {...props}
      variant='solid'
      size={props.size || 'md'}
      colorScheme='whatsapp'>
      {children}
    </CKButton>
  );
}
