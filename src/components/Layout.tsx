import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import './all.scss';

interface Heading {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

export const headingQuery = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title,
        description,
      }
    }
  }
`;

export default class TemplateWrapper extends React.Component<{}, {}> {
  renderData = (data: Heading) => {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
          <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet" />
          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div>{this.props.children}</div>
      </div>
    );
  }

  render() {
    return (
    <StaticQuery
      query={headingQuery}
      render={this.renderData}
      />
    );
  }
}
