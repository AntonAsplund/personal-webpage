import style from './TeaserHeader.module.scss'

export type TeaserHeaderTypes = 'blue' | 'yellow';

type TeaserHeaderProps = {
    text: string,
    type?: TeaserHeaderTypes,
    classNames?: string[]
}

export const TeaserHeader = ({text, type = 'blue', classNames = []}: TeaserHeaderProps) => {
    const classList = [style['teaser-header'], style[type], ...classNames]
        .filter(Boolean)
        .join(' ');

    return (
        <p className={classList}>{text}</p>
    )
}