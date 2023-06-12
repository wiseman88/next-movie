import styles from './header.module.scss'

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
            <a href="" role="menuitem">
              Search
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              Online
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              Icon
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              Avatar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
