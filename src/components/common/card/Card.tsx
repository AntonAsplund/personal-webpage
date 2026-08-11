import style from './Card.module.scss'

type props = {
    badgeTitle?: string;
    content?: string;
    img?: string;
    imgAlt?: string;
};

export const Card = ({ badgeTitle, content, img, imgAlt }: props) => {

    return (
        <div className={style.card}>
            <div className={style.content}>
                <h2>{badgeTitle}</h2>
                <p>{content}</p>
            </div>
            <div className={style['image-wrapper']}>
                <img className={style['card-image']} src={img} alt={imgAlt} />
            </div>
        </div>
    )
}
