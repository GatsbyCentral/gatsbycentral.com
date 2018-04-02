import React from "react";
import { Helmet } from "react-helmet";
import logo from "images/gc-logo.png";

const Meta = props => {
  const { data } = props;

  // Default values
  const title = data.title || "Gatsby Central";
  const path = data.path || "";
  const rootUrl = "https://www.gatsbycentral.com";
  // schema.org via JSON-LD
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: rootUrl,
      name: title
    }
  ];

  if (data) {
    schemaOrgJSONLD.push([
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: rootUrl + `/${path}`,
        name: title,
        headline: title,
        // image: {
        //   "@type": "ImageObject",
        //   url: image
        // },
        description: data.description
      }
    ]);
  }
  console.log(schemaOrgJSONLD);

  return (
    <Helmet titleTemplate="%s | Gatsby Central" defaultTitle="Gatsby Central">
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <title>{title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={title} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={data.description} />
      <meta name="og:image" content={logo} />
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@GatsbyCentral" />
      <meta name="twitter:image" content={logo} />
      <link rel="canonical" href={`https://www.gatsbycentral.com${path}`} />
      <link rel="image_src" href={logo} />
    </Helmet>
  );
};

export default Meta;
