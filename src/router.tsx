import React from 'react'
import { Outlet, createRootRoute, createRoute, createRouter, notFound } from '@tanstack/react-router'
import { Home } from './pages/Home/Home'
import { TimelineHistory } from './pages/timelineHistory/TimelineHistory'
import { Blog } from './pages/blog/Blog'
import { Contact } from './pages/contact/Contact'
import { Header } from './components/common/header/Header'
import { Footer } from './components/common/footer/Footer'
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage'
import { Portfolio } from './pages/portfolio/Portfolio'
import { FEATURE_TOGGLES, isFeatureEnabled } from './utils/featureToggle'

const Root = () => (
  <div className="app-shell">
    <Header />

    <main className="page-content">
      <Outlet />
    </main>

    <Footer />
  </div>
)

const rootRoute = createRootRoute({
  component: Root,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const timelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'timeline',
  component: TimelineHistory,
})

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'blog',
  component: Blog,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Contact,
})

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'portfolio',
  beforeLoad: () => {
    if (!isFeatureEnabled(FEATURE_TOGGLES.PORTFOLIO)) throw notFound()
  },
  component: Portfolio,
})

const routeTree = rootRoute.addChildren([homeRoute, timelineRoute, blogRoute, contactRoute, portfolioRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultNotFoundComponent: NotFoundPage,
})
