import React from "react";
import ContentLoader from "react-content-loader";

const ContentPlaceHolder = () => (
  <ContentLoader>
    <rect x="70" y="0" rx="50" ry="50" width="70" height="70" />
    <rect x="0" y="80" rx="4" ry="4" width="250" height="10" />
    <rect x="0" y="100" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

export default ContentPlaceHolder;
