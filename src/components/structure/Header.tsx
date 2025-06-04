import logo from '@/assets/logo.png'
import styles from '@/styles/components/structure.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img
                    src={logo}
                    alt="logotype"
                    className={styles.logo}
                />
            </div>
            <nav>
                <ul className={styles.navUl}>
                    <li><a href="https://example.com">Главная</a></li>
                    <li><a href="https://example.com">Все тренажеры</a></li>
                    <li><a href="https://example.com">Мой прогресс</a></li>
                </ul>
            </nav>
            <div className={styles.ad}>
                <p>Здесь могла быть ваша реклама</p>
            </div>
        </header>
    )
}

export default Header
