import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const theme = {
  /* eslint-disable key-spacing */
  // Colors
  background: "#F9F9F9",
  textColor: "#333333",
  codeColor: "#00263E",
  linkColor: "#27251F",

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#D6D6D6",

  // Used in PageHeader
  pageHeadingBackground: "#26C672",
  pageHeadingTextColor: "#fff",

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 200,

  // Used for navigation bar
  navBarBackground: "#F2F2F2",
  navBarTextColor: "#27251F",

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#26C672",

  sidebarColor: "#FFFFFF",
  sidebarColorText: "#27251F",
  sidebarColorTextActive: "#26C672",
  sidebarColorLine: "#EBEBEB",
  sidebarColorHeading: "#003B5C",

  // Used in the html, react, and image specimens.
  bgLight: "#F2F2F2",
  bgDark: "#333333",

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: { color: "#FF5555" },
    punctuation: { color: "#535353" },
    script: { color: "#3F7397" },
    function: { color: "#FF5555" },
    keyword: { color: "#3F7397" },
    string: { color: "#00263E" }
  },

  // Patterns
  checkerboardPatternLight:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=",
  checkerboardPatternDark:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==",

  // Fonts
  fontFamily: "'Inter', sans-serif",
  fontHeading: "'Lekton', sans-serif",
  fontMono: "'Roboto Mono', monospace",

  // Base font size in pixels.
  baseFontSize: 16,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2

}


const pages = [
  {
    path: "/",
    title: "Grafický manuál",
    content: pageLoader(() => import("./graficky-manual.md"))
  },
  {
    title: "Naše značky",
    pages: [
    {
      path: "/coalfamily",
      title: "coalfamily",
      content: pageLoader(() => import("./coalfamily.md"))
    },
    {
      path: "/coalsoft",
      title: "coalsoft",
      content: pageLoader(() => import("./coalsoft.md"))
    },
    {
      path: "/coalios",
      title: "coalios",
      content: pageLoader(() => import("./coalios.md"))
    },
    {
      path: "/coaledu",
      title: "coaledu",
      content: pageLoader(() => import("./coaledu.md"))
    },
    {
      path: "/coalmarketing",
      title: "coalmarketing",
      content: pageLoader(() => import("./coalmarketing.md"))
    },
  ]
  },
  {
    path: "/safezone",
    title: "Bezpečná zóna",
    content: pageLoader(() => import("./safezone.md"))
  },
  {
    path: "/typography",
    title: "Typografie",
    content: pageLoader(() => import("./typography.md"))
  },
  {
    path: "/grid",
    title: "Mřížka",
    content: pageLoader(() => import("./grid.md"))
  },
];

ReactDOM.render(
  <Catalog title="coalfamily" pages={pages} theme={theme} logoSrc="/src/logo/coalfamily_logo_header.png"/>,
  document.getElementById("catalog")
);
