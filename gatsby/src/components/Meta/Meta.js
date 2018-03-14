import React from "react";
import { Helmet } from "react-helmet";

const Meta = props => {
  const { data } = props;
  return (
    <Helmet titleTemplate="%s | Gatsby Central" defaultTitle="Gatsby Central">
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.title} />
      <meta name="og:title" content={data.title} />
      <meta name="og:description" content={data.description} />
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@GatsbyCentral" />
    </Helmet>
  );
};

export default Meta;
