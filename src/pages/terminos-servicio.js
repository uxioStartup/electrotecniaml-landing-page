import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PageTitle from "../components/PageTitle"

const PageTemplate = ({ data }) => {
  let title = data.terminos.nodes[0].content.title

  return (
    <Layout>
      <PageTitle title={title} />
      <section class="privacy-section">
        <div class="auto-container">
          <div class="privacy-content">
            <h2>{title}</h2>
            <p>
              For each project we establish relationships with partners who we
              know will help us create added value for your project. As well as
              bringing together the public and private sectors, we make
              sector-overarching links to gather knowledge and to learn from
              each other who we know will help us create added value for your
              project.
            </p>
            <div class="date">Updated January 6, 2022</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse
              vitae ex fermentum, suscipit sem id, dapibus orci. Cras efficitur
              mi augue, ut sodales felis rhoncus bibendum. Fusce sagittis nibh
              orci, id vestibulum tortor aliquet ut. Vivamus maximus felis ac
              nisl luctus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae
              ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi
              augue.
            </p>
            <h2>Overview</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#8217;t look even
              slightly believable. If you are going to use a passage of There
              are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
          <div class="privacy-content">
            <h4>
              The standard chunk of Lorem Ipsum used since the 1500s is <br />
              reproduced below for those interested.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa
              suscipit. Sed scelerisque quam justo, sed volutpat neque tempor
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam consequat tellus id risus condimentum fringilla.
              Etiam maximus porttitor magna sit amet consectetur. Integer eget
              ante scelerisque tortor sodales aliquet. Integer in vestibulum
              leo, vitae tristique orci. Etiam tortor sem, porttitor at
              pellentesque sit amet, fringilla nec massa. Nunc nec magna sed
              metus tristique ornare vitae ut nisl. Mauris lacus enim, posuere
              et tincidunt condimentum, sodales ac elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa
              suscipit. Sed scelerisque quam justo, sed volutpat neque tempor
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam consequat tellus id risus condimentum fringilla.
              Etiam maximus porttitor magna sit amet consectetur. Integer eget
              ante scelerisque tortor sodales aliquet. Integer in vestibulum
              leo, vitae tristique orci. Etiam tortor
            </p>
          </div>
          <div class="privacy-content">
            <h4>
              The standard chunk of Lorem Ipsum used since the 1500s is <br />
              reproduced below for those interested.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa
              suscipit. Sed scelerisque quam justo, sed volutpat neque tempor
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam consequat tellus id risus condimentum fringilla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut.
            </p>
            <ul class="privacy-list">
              <li>Construction Management</li>
              <li>Pre Construction Services</li>
              <li>Contract Administration</li>
              <li>Online Appointment</li>
            </ul>
          </div>
          <div class="privacy-content">
            <h4>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for <br />
              those interested.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa
              suscipit. Sed scelerisque quam justo, sed volutpat neque tempor
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam consequat tellus id risus condimentum fringilla.
              Etiam maximus porttitor magna sit amet consectetur. Integer eget
              ante scelerisque tortor sodales aliquet. Integer in vestibulum
              leo, vitae tristique orci. Etiam tortor sem, porttitor at
              pellentesque sit amet, fringilla nec massa. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nam at nisl ligula. Suspendisse
              vitae ex fermentum, suscipit sem id, dapibus orci.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum.
            </p>
          </div>
          <div class="privacy-content">
            <h2>Security and Retention</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa
              suscipit. Sed scelerisque quam justo, sed volutpat neque tempor
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam consequat tellus id risus condimentum fringilla.
            </p>
          </div>
          <div class="privacy-content">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula. Suspendisse vitae ex fermentum, suscipit sem id,
              dapibus orci. Cras efficitur mi augue, ut sodales felis rhoncus
              bibendum. Fusce sagittis nibh orci, id vestibulum tortor aliquet
              ut. Vivamus maximus felis ac nisl luctus, ut aliquet massa
              suscipit. Sed scelerisque quam justo, sed volutpat neque tempor
              porta. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam consequat tellus id risus condimentum fringilla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
              nisl ligula.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    terminos: allPagesJson(filter: { idPage: { eq: "terminos-servicio" } }) {
      nodes {
        idPage
        content {
          category
          description
          title
        }
      }
    }

    privacidad: allPagesJson(
      filter: { idPage: { eq: "politica-privacidad" } }
    ) {
      nodes {
        idPage
        content {
          category
          description
          title
        }
      }
    }
  }
`

export default PageTemplate
