import { TeaserHeader } from "../../common/teaser-header/TeaserHeader";
import style from './Usp.module.scss'

type UspProps = {
    teaserHeader?: string;
    text: string;
}

export const Usp = ({teaserHeader = "", text}: UspProps) => {
    return (
        <div className={style['wrapper']}>
            <TeaserHeader text={teaserHeader} type="blue"/>
            <p>{text}</p>
        </div>

    )
};