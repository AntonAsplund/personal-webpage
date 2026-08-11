import { useTranslation } from 'react-i18next'
import style from './TechStackTeaser.module.scss'
import { TeaserHeader } from '../../common/teaser-header/TeaserHeader';
import { Teaser } from './Teaser';

export const TechStackTeaser = () => {
    const { t } = useTranslation();

    return (
        <div className={style['wrapper']}>
            <TeaserHeader text={t("TECH_STACK_TEASER_HEADER")}/>
            <div className={style['teaser-wrapper']}>
                <Teaser header={t('TECH_STACK_TEASER_SUB_HEADER_ONE')} tags={["Java", "Javascript", "Typescript", "C#", "HTML", "SCSS", "XML", "YAML"]}></Teaser>
                <Teaser header={t('TECH_STACK_TEASER_SUB_HEADER_TWO')} tags={["Adobe Experience Manager", "React", "ASP.NET Core", "Tanstack Query / Router", "Playwright", "Sling", "OSGI", "Apache Dispatcher", "GraphQL", "Maven", "JUnit", "Open Shift", "Ember.JS"]}></Teaser>
                <Teaser header={t('TECH_STACK_TEASER_SUB_HEADER_THREE')} tags={["GIT", "Azure Cloud services", "Scrum", "VS Code", "Visual Studio", "Docker", "Claude Code / Design" ]}></Teaser>
            </div>
        </div>
    )
}