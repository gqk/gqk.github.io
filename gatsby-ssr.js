import './src/styles/global.css'
import * as React from 'react'

export const onRenderBody = ({ setBodyAttributes, setHeadComponents }, pluginOptions) => {
  setBodyAttributes({
    className: "min-h-screen bg-background font-sans antialiased",
  });

  setHeadComponents([
    <link
      rel="icon"
      href="/favicon.ico"
      type="image/x-icon"
      key="favicon"
    />,
    <link
      key="ibm-plex-sans"
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />,
    <link
      key="noto-sans-sc"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap"
      rel="stylesheet"
    />,
    <link
      key="source-code-pro"
      href="https://fastly.jsdelivr.net/npm/source-code-pro@2.38.0/source-code-pro.min.css"
      rel="stylesheet"
    />,
  ]);
};