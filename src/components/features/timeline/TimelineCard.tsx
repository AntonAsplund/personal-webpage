import { TeaserHeader } from '../../common/teaser-header/TeaserHeader'
import style from './TimelineCard.module.scss'

export type TimelineCardVariant = 'first' | 'last';

type TimelineCardProps = {
    header: string,
    subHeader?: string,
    description: string,
    date: string,
    variant?: TimelineCardVariant
}

export const TimelineCard = ({header, subHeader, description, date, variant } : TimelineCardProps) => {
    return (
        <div className={style['wrapper'] + (variant != null ? ' ' + style[variant] : '')}>
            <div className={style['rail-wrapper']}>
                <div className={style['rail']}>                    
                    {variant === 'last' && (
                        <div className={style['start-arrow']}></div>
                    )}
                </div>
                <div className={style['dot']}></div>
            </div>
            <div className={style['inner-wrapper']}>
                <div className={style['header-date-wrapper']}>
                    <h2 className={style['header']}>{header}</h2>
                    <TeaserHeader text={date}/>
                </div>
                <p className={style['sub-header']}>{subHeader}</p>
                <p className={style['description']}>{description}</p>
            </div>
        </div>
    )
}