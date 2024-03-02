"use client"
import Styles from './Header.module.css'
import { Popup } from '../Popup/Popup'
import { Overlay } from '../Overlay/Overlay'
import { AuthForm } from '../AuthForm/AuthForm'
import { useState } from 'react'
export const Header = (props) => {
  const [popupIsOpened, setPopupIsOpened] = useState(false)

  const openPopup = () => {
    setPopupIsOpened(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
  }

  return (
    <header className={Styles['header']}>
      <a href="./index.html" className={Styles['logo']}>
        <img
          className={Styles['logo__image']}
          src="./images/logo.svg"
          alt="Логотип Pindie"
        />
      </a>
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <a href="" className={Styles['menu__link']}>
              Новинки
            </a>
          </li>
          <li className={Styles['menu__item']}>
            <a href="" className={Styles['menu__link']}>
              Популярные
            </a>
          </li>
          <li className={Styles['menu__item']}>
            <a href="" className={Styles['menu__link']}>
              Шутеры
            </a>
          </li>
          <li className={Styles['menu__item']}>
            <a href="" className={Styles['menu__link']}>
              Ранеры
            </a>
          </li>
          <li className={Styles['menu__item']}>
            <a href="" className={Styles['menu__link']}>
              Пиксельные
            </a>
          </li>
          <li className={Styles['menu__item']}>
            <a href="" className={Styles['menu__link']}>
              TDS
            </a>
          </li>
        </ul>
        <div className={Styles['auth']}>
          <button className={Styles['auth__button']} onClick={openPopup}>Войти</button>
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} closePopup={closePopup}/>
      <Popup isOpened={popupIsOpened} сlosePopup={closePopup}>
          <AuthForm/>
      </Popup>
    </header>
  )
}
