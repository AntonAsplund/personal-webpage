import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss'
import { LinkButton } from '../../components/common/button/LinkButton';

export const NotFoundPage = () => {
    const { t } = useTranslation()

  return (
    <div className={style['wrapper']}>
        <h1 className={style['title']}>{t('NOT_FOUND_PAGE_TITLE')}</h1>
        <div className={style['content']}>
            <p className={style['description']}>{t('NOT_FOUND_PAGE_DESCRIPTION')}</p>
            <LinkButton target="/" linkText={t('NOT_FOUND_PAGE_LINK')}/>
        </div>
    </div>
  )
}