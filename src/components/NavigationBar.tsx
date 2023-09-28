import React from 'react';

import { useNavigate } from 'react-router-dom';
import { pathNames } from '../Routes';
import { useThemeStore } from '../store/themeStore';
import Button from './Button';
import type { ThemeStoreType } from '../store/themeStore';

const NavigationBar = () => {
  const { setDarkTheme, setLightTheme } = useThemeStore();
  const themeStore = useThemeStore((state: ThemeStoreType) => {
    return state.theme;
  });

  const navigate = useNavigate();

  return (
    <>
      <div className={'mih-50 flex flex-row flex-wrap items-center justify-between'}>
        <div>
          {Object.entries(pathNames)?.map(([key, value], index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  navigate(value);
                }}
              >
                {key}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
