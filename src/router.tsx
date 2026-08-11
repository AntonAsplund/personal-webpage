import React from 'react'
import { Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { Home } from './pages/Home/Home'
import { TimelineHistory } from './pages/timelineHistory/TimelineHistory'
import { Blog } from './pages/blog/Blog'
import { Contact } from './pages/contact/Contact'
import { Header } from './components/common/header/Header'
import { Footer } from './components/common/footer/Footer'

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

const routeTree = rootRoute.addChildren([homeRoute, timelineRoute, blogRoute, contactRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})
