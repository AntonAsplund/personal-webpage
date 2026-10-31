import { SlActionRedo } from "react-icons/sl";
import { PortfolioEntry } from '../../../data/PortfolioData';
import style from './PortfolioCard.module.scss'

export const PortfolioCard = ({ title, description, tags, href, img, imgAlt = "" }: PortfolioEntry) => {
    const content = (
        <div className={style['card'] + (href ? ' ' + style['clickable'] : '')}>
            {img && <img className={style['image']} src={img} alt={imgAlt} />}
            <div className={style['content']}>
                <div className={style['header-wrapper']}>
                    <h2 className={style['header']}>{title}</h2>
                    {href && <SlActionRedo className={style['icon']} />}
                </div>
                <p className={style['description']}>{description}</p>
                <ul className={style['tags']}>
                    {tags.map((tag) => (
                        <li key={tag} className={style['tag']}>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return href ? (
        <a href={href} className={style['anchor']} target="_blank" rel="noreferrer">
            {content}
        </a>
    ) : content;
}
