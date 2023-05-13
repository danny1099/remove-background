export function IconCheck(props) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 16 16'
      height={props.size || '1rem'}
      width={props.size || '1rem'}
      {...props}>
      <path d='M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z' />
    </svg>
  );
}
