import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import style from './Header.module.scss';
import { useIsDesktop } from "../../../hooks/useIsDesktop";
import { useState } from "react";

export const Header = () => {
    const { t, i18n } = useTranslation();
    const isDesktop = useIsDesktop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = (onNavigate?: () => void) => (
        <>
            <Link className={style['nav-link']} to="/" activeProps={{ className: style['active'] }} onClick={onNavigate}>
                {t("HEADER_HOME")}
            </Link>
            <Link className={style['nav-link']} to="/timeline" activeProps={{ className: style['active'] }} onClick={onNavigate}>
                {t("HEADER_TIMELINE")}
            </Link>
            <Link className={style['nav-link']} to="/contact" activeProps={{ className: style['active'] }} onClick={onNavigate}>
                {t("HEADER_CONTACT")}
            </Link>
        </>
    );

    const languageButtons = (
        <div className={style['language-wrapper']}>
            <button className={i18n.resolvedLanguage === 'en' ? style['active'] : ''} onClick={() => i18n.changeLanguage('en')}>
                English
            </button>
            <div className={style['divider']}></div>
            <button className={i18n.resolvedLanguage === 'sv' ? style['active'] : ''} onClick={() => i18n.changeLanguage('sv')}>
                Svenska
            </button>
        </div>
    );

    return (
        <header className={style['topbar']}>
            {isDesktop ? (
                <>
                    {languageButtons}
                    <nav className={style['nav-menu']}>
                        {links()}
                    </nav>
                </>
            ) : (
                <>
                    <button
                        className={`${style['mobile-menu-btn']} ${isMenuOpen ? style['open'] : ''}`}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span className={style['line-one']}></span>
                        <span className={style['line-two']}></span>
                        <span className={style['line-three']}></span>
                    </button>
                    <div className={style['mobile-menu']}>
                        <nav id="mobile-nav" className={style['nav-menu-mobile']}>
                            {links(() => setIsMenuOpen(false))}
                        </nav>
                        {languageButtons}
                    </div>
                </>  
            )}
        </header>
    )
}
