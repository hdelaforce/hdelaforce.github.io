import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Adventurous Pushy Giraffe</title>
        <meta property="og:title" content="Adventurous Pushy Giraffe" />
      </Helmet>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text10">Click Here to Explode</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text11">Click here to NOT Explode</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text12">
              Click the button below to witness a mind-blowing explosion right
              on your screen.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">
              Welcome to the Hudson&apos;s Explosive Website!
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text14">Interactive Explosion</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text15">Dynamic Destruction</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text16">Explosive Visuals</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1597243508456-d8cb4178de17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGV4cGxvc2lvbnxlbnwwfHx8fDE3Mzg5Mjg1Mjl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text17">
              Click the button and see the magic happen
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text18">
              Experience the thrill of destruction
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text19">
              Watch the website burst into pieces
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text20">Click here to explode</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text21">
              Click the button below to witness the ultimate explosion!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text22">
              Ready to see something explosive?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text23">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text24">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text25">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text26">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text27">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text28">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text29">Choose the perfect plan for you</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text30">
              Explode or to not explode is the question.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text31">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text32">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text33">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text34">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text35">Sign Up</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text36">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text37">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text38">Sign Up</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text39">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text40">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text41">Sign Up</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text42">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text43">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text44">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text45">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text46">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text47">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text48">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text49">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text50">Chance of exploding</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text51">May combust</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text52">Possible detonation</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text53">
              <span>Maybe go boom?</span>
              <br></br>
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text56">Good chance of explosion</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text57">Yeah nah</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text58">Boom</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text59">100% chance of boom</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text60">
              <span>Biggest explosion on internet</span>
              <br></br>
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text63">Chance of computer exploding</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text64">5 devices allowed</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text65">Friends discount</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text66">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text67">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text68">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text69">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text70">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text71">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text72">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text73">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text74">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text75">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text76">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text77">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text78">Click the Button</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text79">Prepare for Impact</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text80">Watch the Magic</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text81">Enjoy the Aftermath</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text82">
              Locate the big orange button on the screen.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text83">
              Brace yourself for the explosion.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text84">
              Click the button and witness the website explode in a spectacular
              display.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text85">
              Take a moment to appreciate the chaos you have unleashed.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text86">
              I am amazed by the explosion effect on this website! It&apos;s
              truly unique and engaging.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text87">
              The exploding button is a game-changer! It adds a fun element to
              the website that keeps visitors hooked.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text88">
              I never thought a website could be so interactive. The explosion
              feature is brilliant!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text89">
              As a designer, I appreciate the creativity behind this exploding
              website. It&apos;s visually stunning!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text90">
              <span>I think there for I AM.</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text93">Our Happy Customers</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text94">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text95">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text96">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text97">Sarah Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text98">CEO, ABC Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text99">Marketing Manager, XYZ Corp.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text100">Founder, 123 Company</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text101">Designer, LMN Designs</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text102">Feel free to talk anytime.</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text103">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text104">Email: hudelaforce@gmail.com</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text105">
              For general inquiries and support
            </span>
          </Fragment>
        }
      ></Contact10>
    </div>
  )
}

export default Home
