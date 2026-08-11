import React from 'react'
import style from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import { LinkButton } from '../../components/common/button/LinkButton'
import { TeaserHeader } from '../../components/common/teaser-header/TeaserHeader'
import { AboutTeaser } from '../../components/features/aboutTeaser/AboutTeaser'
import { TechStackTeaser } from '../../components/features/techStackTeaser/TechStackTeaser'
import antonAsplundImage from '../../assets/images/anton-asplund-2.jpg'


export function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className={style['hero']}>
        <div className={style['description-wrapper']}>
          <TeaserHeader type='blue' text={t("HOME_PAGE_HERO_PRE_HEADER")}></TeaserHeader>
          <h1 className={style['header']}>{t("HOME_PAGE_HERO_HEADER")}</h1>
          <p className={style['description']}>
            {t("HOME_PAGE_HERO_SUBHEADER")}
          </p>
          <div className={style['link-wrapper']}>
            <LinkButton target='/timeline' type='primary' linkText={t("HOME_PAGE_HERO_TIMELINE_LINK_TEXT")}/>
            <LinkButton target='/contact' type='secondary' linkText={t("HOME_PAGE_HERO_CONTACT_LINK_TEXT")}/>
          </div>
        </div>
        <div className={style['image-wrapper']}>
          <img className={style['image']} src={antonAsplundImage} alt="An image of Anton Asplund" />
        </div>
      </div>

      <div className={style['divider']}></div>

      <AboutTeaser/>

      <div className={style['divider']}></div>

      <TechStackTeaser/>
    </>
  )
}
