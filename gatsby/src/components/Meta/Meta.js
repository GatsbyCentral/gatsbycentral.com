import React from "react";
import { Helmet } from "react-helmet";

import logo from "images/gc-logo.png";

const Meta = props => {
  const { data, rich = false } = props;
  // Default values
  const title = data.title || null;
  const path = data.path || "";
  const rootUrl = "https://www.gatsbycentral.com";
  // schema.org via JSON-LD
  let schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: rootUrl,
    name: title
  };

  if (rich) {
    schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "TechArticle",
      url: rootUrl + `/${path}`,
      name: title,
      headline: title,
      description: data.description,
      datePublished: data.date,
      image: rootUrl + logo
    };
  }

  return (
    <Helmet titleTemplate="%s | Gatsby Central" defaultTitle="Gatsby Central">
      <html lang="en" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <title>{title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={title} />
      <meta name="og:title" content={title || "Gatsby Central"} />
      <meta name="og:description" content={data.description} />
      <meta name="og:image" content={logo} />
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@GatsbyCentral" />
      <meta name="twitter:image" content={logo} />
      <link rel="canonical" href={`${rootUrl}${path}`} />
      <link rel="image_src" href={`${rootUrl}${logo}`} />
    </Helmet>
  );
};

export default Meta;
