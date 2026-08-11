import React from 'react'
import { TeaserHeader } from '../../components/common/teaser-header/TeaserHeader'
import { useTranslation } from 'react-i18next'
import { LinkCard } from '../../components/features/linkCard/LinkCard';
import style from './Contact.module.scss';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={style['wrapper']}>
      <div className={style['title-description-wrapper']}>
        <TeaserHeader text={t('CONTACT_PAGE_TEASER_HEADER')} />
        <h1>{t('CONTACT_PAGE_HEADER')}</h1>
        <p>{t('CONTACT_PAGE_DESCRIPTION')}</p>
      </div>
      <LinkCard href='mailto:k.anton.asplund@hotmail.com' type='dark' label='Email' text='k.anton.asplund@hotmail.com'></LinkCard>
      <LinkCard href='https://www.linkedin.com/in/anton-asplund/' type='dark' label='LinkedIn' text='linkedin.com/in/anton-asplund/'></LinkCard>
      <LinkCard href='https://github.com/AntonAsplund' type='dark' label='Github' text='github.com/AntonAsplund'></LinkCard>
    </section>
  )
}
