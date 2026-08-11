import React from 'react'
// import style from './Blog.module.scss'

const posts = [
  { title: 'Getting started', description: 'Create routes, layouts, and page components using TanStack Router.' },
  { title: 'Performance first', description: 'Vite gives you a fast developer experience and small production bundles.' },
  { title: 'Modern TypeScript', description: 'Use strict types and JSX with TypeScript support out of the box.' },
]

export const Blog = () => {
  return (
    <section>
      <h1>Blog</h1>
      <p>Here are a few sample posts to show how page content can be structured.</p>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.title} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
