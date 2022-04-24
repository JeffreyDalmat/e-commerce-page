import hamburger from 'src/assets/images/icon-menu.svg';
import logo from 'src/assets/images/logo.svg';
import cart from 'src/assets/images/icon-cart.svg';
import customer from 'src/assets/images/image-avatar.png';
import close from 'src/assets/images/icon-close.svg';

import './header.scss';

import { toggleMobileMenu } from 'src/slice/header';

import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.header.open);
  const handleCloseClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <header className="header">

      <div className="header__logo logo">
        <img
          className="logo__hamburger"
          src={hamburger}
          alt=""
          onClick={handleCloseClick}
        />
        <img className="logo__main" src={logo} alt="" />
      </div>

      <nav className={isOpen ? 'header__nav nav nav--open' : 'header__nav nav'}>
        <img
          className="nav__close"
          src={close}
          alt=""
          onClick={handleCloseClick}
        />
        <ul className="nav__list">
          <li className="nav__item">Collections</li>
          <li className="nav__item">Men</li>
          <li className="nav__item">Women</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Contact</li>
        </ul>
      </nav>

      <div className={isOpen ? 'nav__overlay nav__overlay--open' : 'nav__overlay'} />

      <div className="header__customer customer">
        <img className="customer__cart" src={cart} alt="" />
        <img className="customer__avatar" src={customer} alt="" />
      </div>
    </header>
  );
}
