import style from './Teaser.module.scss'

type TeaserProps = {
    header: string;
    tags: string[]
}

export const Teaser = ({header, tags}: TeaserProps) => {


    return (
        <div className={style['wrapper']}>
            <p className={style['header']}>
                {header}
            </p>
            <div className={style['tag-wrapper']}>
                {tags.map((tag, index) => (
                    <p key={index} className={style['tag']}>
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    )
}