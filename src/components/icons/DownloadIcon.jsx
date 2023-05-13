export function DownloadIcon(props) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 16 16'
      height={props.size || '1rem'}
      width={props.size || '1rem'}
      {...props}>
      <path d='M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z' />
      <path d='M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z' />
    </svg>
  );
}
