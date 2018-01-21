import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Helmet from 'react-helmet';


//Resources
import '../../scss/content.scss';

//Components
import {Home} from '../layouts/home.js';
import {About} from '../layouts/about.js';
import {ProductsServices} from '../layouts/products.js';
import {Portfolio} from '../layouts/portfolio.js';
import {Faq} from '../layouts/faq.js';
import {CodeEthics} from '../layouts/ethics.js';
import {Contact} from '../layouts/contact.js';
import {Terms} from '../layouts/terms.js';
import {Privacy} from '../layouts/privacy.js';
import {StyleGuide} from '../layouts/styleGuide.js';

//Client Pages
import {WondaiCountry} from '../clientPortal/wondaiCountryFestival/main.js';
import {SocialPilot} from '../clientPortal/wondaiCountryFestival/socialpilot.js';
import {GlenrockHay} from '../clientPortal/glenrockHay/main.js';



// Variables
export const menuItems = [
  {
    slug: '/',
    title: 'Home',
    component: () => <Home />,
  },
  {
    slug: '/about-us',
    title: 'About Us',
    component: () => <About />,
  },
  {
    slug: '/services',
    title: 'Services',
    component: () => <ProductsServices />,
  },
  {
    slug: '/portfolio',
    title: 'Portfolio',
    component: () => <Portfolio />,
  },
  {
    slug: '/faq',
    title: 'FAQ',
    component: () => <Faq />,
  },
  {
    slug: '/code-of-ethics',
    title: 'Code of Ethics',
    component: () => <CodeEthics />,
  },
  {
    slug: '/contact',
    title: 'Contact',
    component: () => <Contact />,
  },
];
  
export const legalItems = [
  {
    slug: '/privacy',
    title: 'Privacy Policy',
    component: () => <Privacy />,
  },
  {
    slug: '/terms',
    title: 'Terms of Use',
    component: () => <Terms />,
  },
]
  
const hiddenPages = [
  {
    slug: '/style-guide',
    title: 'Style Guide',
    component: () => <StyleGuide />,
  },
];
  
const clientPages = [
  {
    slug: '/wondai-country-festival',
    title: 'Wondai Country Running Festival',
    component: () => <WondaiCountry />,
  },
  {
    slug: '/wondai-country-festival/socialpilot',
    title: 'SocialPilot Instructions - Wondai Country Running Festival',
    component: () => <SocialPilot />,
  },
  {
    slug: '/glenrock-hay',
    title: 'Glenrock Hay',
    component: () => <GlenrockHay />,
  },
];

const routeItems = menuItems.concat(legalItems).concat(hiddenPages).concat(clientPages);

class Meta extends Component {
  render() {
      return (
          <Helmet>
              <link rel="shortcut icon" href="/src/img/favicons/favicon.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/src/img/favicons/favicon-16.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/src/img/favicons/favicon-32.png" />
              <link rel="icon" type="image/png" sizes="96x96" href="/src/img/favicons/favicon-96.png" />

              <link rel="apple-touch-icon" href="/src/img/favicons/favicon-180.png" />
              <meta name="theme-color" content="#1C75BC" />
              <link rel="icon" sizes="192x192" href="/src/img/favicons/favicon-192.png" />
          </Helmet>
      );
  }
};


export class App extends Component {
  render() {
    window.onscroll = function() {
      const perHeight = window.innerHeight * 0.3;
      if(document.documentElement.scrollTop > perHeight) {
          document.getElementById('root').classList.add('scrolled');
      }
      else {
          document.getElementById('root').classList.remove('scrolled');
      };
    };

    document.getElementById('root').classList.remove('style-guide');

    let pages = routeItems.map(page => {
      return(
        <div key={page.title}>
          <Route exact path={page.slug} component={page.component} key={page.slug} />
        </div>
      );
    });

    return (
        <Fragment>
          <Meta />
          <Router>
            <div className="container">
              {pages}
            </div>
          </Router>
        </Fragment>
    );
  }
}