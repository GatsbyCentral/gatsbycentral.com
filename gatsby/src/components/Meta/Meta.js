import React from "react";
import { Helmet } from "react-helmet";

const Meta = props => {
  const { data } = props;
  console.log(data);
  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.title} />
      <meta name="og:title" content={data.title} />
      <meta name="og:description" content={data.description} />
      {data.image ? <meta name="og:image" content={data.image.url} /> : null}
    </Helmet>
  );
};

export default Meta;
