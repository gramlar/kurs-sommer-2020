import React, {
  createContext,
  FunctionComponent,
  useState,
  useEffect,
} from 'react';
import { Photo } from '../types';
import { getPhotosResponse } from '../utils';

interface ContextState {
  photos: Photo[];
}

export const PhotosContext = createContext<ContextState | null>(null);

const PhotosProvider: FunctionComponent = ({ children }) => {
  const [photos, setPhotos] = useState<Photo[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPhotosResponse();
      setPhotos(response);
    };
    fetchData();
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        photos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosProvider;
