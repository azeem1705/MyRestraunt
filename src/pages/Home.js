import React from 'react'
import Layout from '../components/Layout'
import '../styles/home.css'

const Home = () => {
  return (
    <Layout>
        	<div class="index-banner">
		<div class="index-banner-bg"><img src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhJTIwY3VwfGVufDB8fDB8fHww&w=1000&q=100" alt="banner"/></div>
		<div class="index-banner-text">
			<div class="text-logo"></div>
			<p class="text-info">
				<i class="line line-left"></i>
				<span class="text">resto restaurant home page website template</span><i class="line line-right"></i>
			</p>
		</div>
	</div>
    </Layout>
  )
}

export default Home