import { useTranslation } from 'react-i18next'
import style from './Footer.module.scss'

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={style['footer']}>
          <p>&copy; {new Date().getFullYear()} Anton Asplund</p>
          <div className={style['title-wrapper']}>
            <p>{t("FOOTER_TITLE_TAG_DEVELOPER")}</p>
            <div className={style['divider']}>·</div>
            <p>{t("FOOTER_TITLE_TAG_SCRUM_MASTER")}</p>
          </div>
        </footer>
    )
}
