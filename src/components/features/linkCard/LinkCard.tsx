import { TeaserHeader } from '../../common/teaser-header/TeaserHeader';
import style from './LinkCard.module.scss'
import { SlActionRedo } from "react-icons/sl";

type LinkCardType = "dark" | "light";

type LinkCardProps = {
    href: string,
    type: LinkCardType,
    label?: string,
    text: string
}

export const LinkCard = ({href, type, label = "", text}: LinkCardProps) => {
    return (
        <a href={href} className={style['anchor']}>
            <div className={style['link'] + ' ' + style[type]}>
                {label && <TeaserHeader text={label}/>}
                <div className={style['wrapper']}>
                    <p className={style['text']}>{text}</p>
                    <SlActionRedo />
                </div>
            </div>
        </a>
    )
};