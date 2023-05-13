import { useContext } from 'react';
import { DropContext } from '@/context';

export default function useStatusDrop() {
  const { status, handleStatus, handleUrlOriginal, handleUrlModified } =
    useContext(DropContext);

  return { status, handleStatus, handleUrlOriginal, handleUrlModified };
}
