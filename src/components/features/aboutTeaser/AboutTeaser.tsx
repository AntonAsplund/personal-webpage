import { TeaserHeader } from "../../common/teaser-header/TeaserHeader"
import style from './AboutTeaser.module.scss'
import { useTranslation } from "react-i18next"
import { Usp } from "./Usp"

export const AboutTeaser = () => {
    const { t } = useTranslation();

    return (
        <div className={style['wrapper']}>
            <div className={style['description-wrapper']}>
                <TeaserHeader text={t("ABOUT_TEASER_HEADER")}/>
                <p className={style['description']}>
                    {t("ABOUT_TEASER_DESCRIPTION")}
                </p>
            </div>
            <div className={style['usp-wrapper']}>
                <Usp teaserHeader="01" text={t("ABOUT_TEASER_USP_ONE")}></Usp>
                <Usp teaserHeader="02" text={t("ABOUT_TEASER_USP_TWO")}></Usp>
                <Usp teaserHeader="03" text={t("ABOUT_TEASER_USP_THREE")}></Usp>
                <Usp teaserHeader="04" text={t("ABOUT_TEASER_USP_FOUR")}></Usp>
                <Usp teaserHeader="05" text={t("ABOUT_TEASER_USP_FIVE")}></Usp>
            </div>
        </div>
    )
}