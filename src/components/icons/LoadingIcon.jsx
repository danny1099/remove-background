import { Oval } from 'react-loader-spinner';

export function LoadingIcon({ color }) {
  return (
    <Oval
      height={22}
      width={22}
      color={color || '#4fa94d'}
      wrapperClass=''
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor={color || '#71f06f'}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
