import React from 'react'
import { TeaserHeader } from '../../components/common/teaser-header/TeaserHeader'
import { useTranslation } from 'react-i18next'
import style from './TimelineHistory.module.scss'
import { Timeline } from '../../components/features/timeline/Timeline'

export const TimelineHistory = () => {
  const { t } = useTranslation();

  return (
    <section>
      <TeaserHeader text={t("TIMELINE_HISTORY_PAGE_TEASER_HEADER")}/>
      <h1 className={style['header']}>{t("TIMELINE_HISTORY_PAGE_HEADER")}</h1>
      <Timeline/>
    </section>
  )
}
