import React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Seo from '../components/seo'

const Waste = () => {
    return (
        <Layout>
            <Seo title="Waste Management" />
            <Navigation/>
            <main>
                <h1>Waste Management</h1>
            </main>
        </Layout>
    )
}

export default Waste