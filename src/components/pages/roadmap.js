import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Link } from '@reach/router';
const NavLink = props => (
	<Link
	  {...props}
	  getProps={({ isCurrent }) => {
		// the object returned here is passed to the
		// anchor element's props
		return {
		  className: isCurrent ? 'active' : 'non-active',
		};
	  }}
	/>
  );
  
  

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }

  .box {
    height: 45px;
	width: 45px;
  }

  .bg-primary{
	background-color:#FF343F !important;
  }
  a{
	  text-decoration:none;
	  color:#fff;
  }
  a:hover{
	  color:#fff;
  }

`;

const contact= function() {

  function sendEmail(e) {

    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }

  return (
  <div>
  <GlobalStyles />

  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1> Trad3u Roadmap</h1>
              <p> Starting the Digital Revolution</p>
          </div>
        </div>
      </div>
    </div>
  </section>

   

  <section className="py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6">
        <div className="mx-auto mb-5">
          <span className="text-muted" data-config-id="label">Lorem ipsum</span>
          <h2 className="display-5 fw-bold mt-2 mb-4" data-config-id="header">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
          <p className="lead text-muted mb-4" data-config-id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
<span className="btn-main lead m-auto"><NavLink to="/about"> About Trad3U</NavLink></span>
        </div>
      </div>
      <div className="col-12 col-lg-5 ms-auto">
        <div className="px-4 py-5 px-lg-5 bg-light rounded mx-auto">
          <div className="d-flex mb-5">
            <span className="d-flex flex-shrink-0 me-3 me-lg-5 justify-content-center align-items-center rounded-circle bg-primary text-white box" >1</span>
            <div>
              <p className="lead text-muted" data-config-id="desc1">Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.</p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <span className="d-flex flex-shrink-0 me-3 me-lg-5 justify-content-center align-items-center rounded-circle bg-primary text-white box" >2</span>
            <div>
              <p className="lead text-muted" data-config-id="desc2">Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.</p>
            </div>
          </div>
          <div className="d-flex">
            <span className="d-flex flex-shrink-0 me-3 me-lg-5 justify-content-center align-items-center rounded-circle bg-primary text-white box">3</span>
            <div>
              <p className="lead text-muted" data-config-id="desc3">Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


	  
      <Footer />
    </div>
  );
}
export default contact;