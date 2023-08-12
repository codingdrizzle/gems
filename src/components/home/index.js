import React from 'react'
import Layout from '../../layouts/home-layout'
import PageContent from './page-content'
import PageFooter from '../footer'
const list = ['Home', 'Report', 'Support']


const Home = () => {
  return (           
    <Layout footer={<PageFooter company={{title: 'GEMS',list: list}}/> }>
       <PageContent/>
    </Layout>
  )
}

export default Home