import React from 'react'
import Arrow from './Arrow-black.svg'
import rp2 from './rp2.jpg'
import p1 from './p1.png'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import Fade from 'react-reveal/Fade';

const testfile = () => {
    return ( 
      <div className="main_page">
        <div className="collaborate">
          <h4>Let's Collaborate</h4>
        </div>
        <div className="content_section">
          <Fade bottom>
            <div className="row">
              <div className="col-md-6">
                <div className="services_section">
                  <div className="servicesH2">
                    <h2>AI + RPA is what we do</h2>
                  </div>
                  <div className="servicesH3">
                    <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
                  </div>
                  <div className="servicesP">
                    <a href="https://www.xivtech.io/services/AIandRPAautomation">
                      <p>AI + RPA Automation</p>
                      <img src={Arrow} alt="arrow-black"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 hello2">
                <img className="serviceImage" src={rp2} alt="servicesimage"/>
              </div>
            </div>
          </Fade>
          
          <Fade bottom >
            <div className="row">
              <div className="col-md-6">
                <div className="services_section">
                  <div className="servicesH2">
                    <h2>Make Bolder Choices</h2>
                  </div>
                  <div className="servicesH3">
                    <h3>Digital focused strategies to realize market-changing ideas</h3>
                  </div>
                  <div className="servicesP">
                    <a href="https://www.xivtech.io/services/enterprise-apps">
                      <p>Build Better Apps</p>
                      <img src={Arrow} alt="arrow-black"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img className="serviceImage" src={p1} alt="servicesimage"/>
              </div>
            </div>
          </Fade>
          <Fade bottom >
            <div className="row">
              <div className="col-md-6">
                <div className="services_section">
                  <div className="servicesH2">
                    <h2>Innovate with Speed</h2>
                  </div>
                  <div className="servicesH3">
                    <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
                  </div>
                  <div className="servicesP">
                    <a href="https://www.xivtech.io/services/delivery-pipeline-automation">
                      <p>Devops</p>
                      <img src={Arrow} alt="arrow-black"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img className="serviceImage" src={p2} alt="servicesimage"/>
              </div>
            </div>
          </Fade>
          <Fade bottom >
            <div className="row">
              <div className="col-md-6">
                <div className="services_section">
                  <div className="servicesH2">
                    <h2>Embrace Cloud</h2>
                  </div>
                  <div className="servicesH3">
                    <h3>With Cloud-First accelerate innovation and optimize performance</h3>
                  </div>
                  <div className="servicesP">
                    <a href="https://www.xivtech.io/services/cloud">
                      <p>Cloud Services</p>
                      <img src={Arrow} alt="arrow-black"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img className="serviceImage" src={p3} alt="servicesimage"/>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
}

export default testfile