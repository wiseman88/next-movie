import styles from './header.module.scss'
import { CiGrid41, CiHeart, CiSearch, CiUser } from 'react-icons/ci'

const Header = () => {
  return (
    <header className={styles.header__main}>
      <div className={styles.logo}>
        <a href="">movea</a>
      </div>
      <nav className={styles.navigation}>
        <ul role="menubar">
          <li role="none">
            <a href="" role="menuitem">
              Movies
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              Tv shows
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              Animations
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              Plans
            </a>
          </li>
        </ul>
        <ul>
          <li role="none">
            <button type="button" role="menuitem" aria-label="Search">
              <CiSearch className={styles.icon} />
            </button>
          </li>
          <li role="none">
            <button type="button" role="menuitem">
              <CiHeart className={styles.icon} />
            </button>
          </li>
          <li role="none">
            <button type="button" role="menuitem">
              <CiGrid41 className={styles.icon} />
            </button>
          </li>
          <li role="none">
            <button type="button" role="menuitem">
              <CiUser className={styles.icon} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
