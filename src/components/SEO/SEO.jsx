import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
const defKeywords = [
  "enginate consultants",
  "enginate",
  "consultants",
  "structural engineers",
  "civil engineers",
  "BIM",
  "consulting",
  "bridge engineers",
  "innovation",
  "CAD",
  "chartered engineers",
  "civil",
  "structural",
  "enginateconsultants.com",
];
const SEO = ({ title, siteUrl, description, author, keywords }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaUrl = siteUrl || data.site.siteMetadata.siteUrl;
        const metaKeywords = keywords || defKeywords;
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:author`,
                content: metaAuthor,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
  }
`;

export default SEO;
