import React from 'react';
import { Sun as SunIcon, Moon as MoonIcon } from 'react-feather';
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
        <div>
          <div className={'mih-50 pre-10 flex flex-row flex-wrap items-center justify-between gap-10'}>
            {themeStore.isDark ? (
              <SunIcon className="cursor-pointer" onClick={setLightTheme} />
            ) : (
              <MoonIcon className="cursor-pointer" onClick={setDarkTheme} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
