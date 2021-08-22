import React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Seo from '../components/seo'

const Blog = () => {
    return (
        <Layout>
            <Seo title="Blog" />
            <Navigation/>
            <main>
                <h1>Blog</h1>
            </main>
        </Layout>
    )
}

export default Blog