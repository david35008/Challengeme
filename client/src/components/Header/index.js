import React, { useState, useMemo, useCallback } from 'react';
import NarrowNav from './NarrowNav';
import WideNav from './WideNav';
import '../../styles/Header.css';

function Header() {
  const [navOrMenu, setNavOrMenu] = useState(window.innerWidth < 700);

  const displayWindowSize = useCallback(() => {
    if (window.innerWidth < 700) {
      setNavOrMenu(true);
    } else {
      setNavOrMenu(false);
    }
  }, []);

  useMemo(
    () => window.addEventListener('resize', displayWindowSize),
    [displayWindowSize],
  );

  return <>{!navOrMenu ? <WideNav /> : <NarrowNav />}</>;
}

export default Header;
