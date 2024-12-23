import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FontSizeContextType = {
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined,
);

export const FontSizeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>(
    'medium',
  );
  useEffect(() => {
    const loadFontSize = async () => {
      const savedSize = await AsyncStorage.getItem('fontSize');
      if (savedSize) setFontSize(savedSize as 'small' | 'medium' | 'large');
    };
    loadFontSize();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{fontSize, setFontSize}}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
