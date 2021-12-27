import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const about= function() {

 

  return (
  <div>
  <GlobalStyles />

  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1> About Trad3U</h1>
              <p> Starting the Digital Revolution</p>
          </div>
        </div>
      </div>
    </div>
  </section>

   <div className="container py-5">
	<div className="row">
		<div className="col-md-4 align-self-center">
			<div className="lc-block border-top py-4">
				<div >
					<h2><strong>About Trad3 U</strong></h2>
				</div>
			</div>
		</div>
		<div className="col-md-8">
			<div className="lc-block">
				<div >
					<p>Around 2012, some video game companies, unfortunately, went under. For example, THQ to name one. It's not they were not producing great games. Who didn’t like, “The Saints”? Other companies didn’t want to have the same fate, Like Bio-Ware. So to save their company. They got brought out by bigger studios called EA which gave us Mass Effect 2, which is one of my favorite games of all time to this day.</p>
				</div>
			</div>
			<div className="lc-block">
				<div >
					<p>The issues were not the gaming companies nor the hardware company like Nintendo, PlayStation, and Xbox. It was the retail stores reselling the pre-own games again, again and again, etc… making a profit, while the studios were receiving none.</p>
				</div>
			</div>
			<div className="lc-block">
				<div>
					<p>Here at Trad3-U, we want to start something new. Something that benefits the user or the gamer as well as the studio. We want to start a digital revolution. Imagine at T3U You buy a digital game on your favorite platform Nintendo, PlayStation, or Xbox. Depending on if it’s a first or third-party when you trade your old digital game via T3U. You will get a digital currency that will be valid within your favorite platform so you could repurchase another digital game or purchase a preowned game. When the customer purchases a preowned game via T3U a percentage will go back to the studios and the other percentage will go to T3U to maintain the servers.</p>
				</div>
			</div>
			<div className="lc-block">
				<div>
					<p> I may be the founder and co-creator, but I will always be a gamer first. Trad3- U was not only designed to give the customers more freedom in their gaming experience but it was also designed to protect the men and women that work day in and day out to make the games that are not only iconic but dear to our hearts.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="container py-5">
	<div className="row">
	<div className="col-md-6">
		<div className="lc-block me-lg-5">
    <div className="col-md-12">
    <p className="mb-0">How Trad3U will revolutionize the</p>
    <h2><strong>Digital Industry</strong></h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nullam tincidunt ac augue suscipit rhoncus.
					Donec ante erat, hendrerit sed eleifend et, dapibus at leo. Mauris bibendum mi ut dui sagittis volutpat.</p>
			</div>
		</div>
</div>
		
	
	<div className="col-md-6 my-auto p-5">
		<div className="lc-block">
			<div className="ratio ratio-16x9" lc-helper="video-embed">
				&lt;<iframe src="https://player.vimeo.com/video/660146363?h=f7e7340c69&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Trad3-U_Kickstarter_HD_1920x1080"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
			</div>
		</div>
	</div>
  </div>
  </div>

	  
      <Footer />
    </div>
  );
}
export default about;