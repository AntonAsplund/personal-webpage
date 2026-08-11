import { TimelineCard } from './TimelineCard'
import style from './Timeline.module.scss'
import { useTranslation } from 'react-i18next'

export const Timeline = () => {
    const { t } = useTranslation();

    return (
        <div className={style['wrapper']}>
            <TimelineCard variant='first' header={t('TIMELINE_THREE_HEADER')} subHeader={t('TIMELINE_THREE_SUB_HEADER')} description={t('TIMELINE_THREE_DESCRIPTION')} date='Jan 2025 - Ongoing'/>
            <TimelineCard header={t('TIMELINE_TWO_HEADER')} subHeader={t('TIMELINE_TWO_SUB_HEADER')} description={t('TIMELINE_TWO_DESCRIPTION')} date='Aug 2021 - Jan 2025'/>
            <TimelineCard variant='last' header={t('TIMELINE_ONE_HEADER')} subHeader={t('TIMELINE_ONE_SUB_HEADER')} description={t('TIMELINE_ONE_DESCRIPTION')} date='Nov 2020 - June 2021'/>
        </div>
    )
}