import React from "react"
import Hero from "../components/hero";
import Layout from "../components/layout";


const IndexPage = () => {
  return (
    <Layout>
      <Hero title="AD Supplies"/>
      <main>
        <h2>Who are we?</h2>
        <p>AD Supplies aim is to reduce food and associated waste to landfill by making waste management in your business, our business. Our expertise enables us to find ways of effectively recycling your waste streams into biogas and electricity via anaerobic digestion. With over 25 years experience in the food, co-products and the logistics industry, we pride ourselves in our ability to help you reduce cost while improving your company’s green credentials.</p>
        <p>We can support our clients with bespoke waste management solutions. This includes storage and collection, bulk tanks, skips, IBC’s, drums and dolavs. To make life easier for your business, using telematics is a popular way to manage removal of waste liquids.</p>
        <p>We’re licensed waste brokers who believe in good old fashioned customer service. Our goal is to tailor a waste and recycling solution that fits with your needs and puts a STOP to those waste streams going to trade effluent, land fill or land injection. For our partner customers we can also offer a process optimisation service to help reduce waste and improve energy usage.</p>
        <p>Our operations office is at the convenient location of Trafford Docks, Manchester, but our service cover is nationwide.</p>
        <p>Take the first step in improving your companies green credentials and help clean up the planet. Contact us to see how we can help you today make a cleaner planet tomorrow.</p>
        <p>We are AD Supplies, Recycling For Energy … is our passion!</p>
      </main>
    </Layout>
  )
}

export default IndexPage;