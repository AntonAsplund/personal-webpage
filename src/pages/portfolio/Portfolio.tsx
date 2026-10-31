import { useTranslation } from 'react-i18next'
import { TeaserHeader } from '../../components/common/teaser-header/TeaserHeader'
import { PortfolioCard } from '../../components/features/portfolioCard/PortfolioCard'
import { PortfolioData } from '../../data/PortfolioData'
import style from './Portfolio.module.scss'

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className={style['title-description-wrapper']}>
        <TeaserHeader text={t('PORTFOLIO_PAGE_TEASER_HEADER')} />
        <h1>{t('PORTFOLIO_PAGE_HEADER')}</h1>
        <p>{t('PORTFOLIO_PAGE_DESCRIPTION')}</p>
      </div>
      <div className={style['card-grid']}>
        {PortfolioData.map((entry) => (
          <PortfolioCard key={entry.title} {...entry} />
        ))}
      </div>
    </section>
  )
}
