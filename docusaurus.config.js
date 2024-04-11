// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Escape documentation",
  tagline: "",
  url: "https://docs.escape.tech",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        max: 1030, // taille maximale de l'image redimensionnée.
        min: 640, // taille minimale de l'image redimensionnée. si celle de l'original est inférieure, utilisez cette taille.
        steps: 10, // le nombre maximum d'images générées entre min et max (inclus)
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { from: "/dast", to: "/", },
          {
            from: "/getting-started/registration",
            to: "/dast/getting-started/registration",
          },
          {
            from: "/getting-started/retrieve-schema",
            to: "/dast/getting-started/retrieve-schema",
          },
          {
            from: "/advanced-usage/data-types-reference",
            to: "/dast/advanced-usage/data-types-reference",
          },
          {
            from: "/advanced-usage/parameters-reference",
            to: "/dast/advanced-usage/parameters-reference",
          },
          { from: "/integrations", to: "/dast/integrations" },
          {
            from: "/ci-cd/configuration-override",
            to: "/dast/ci-cd/configuration-override",
          },
          { from: "/ci-cd/commit-sha", to: "/dast/ci-cd/commit-sha" },
          {
            from: "/ci-cd/introspection-update",
            to: "/dast/ci-cd/introspection-update",
          },
          { from: "/enterprise/repeater/", to: "/dast/enterprise/repeater/" },
        ],
      },
    ],
    require.resolve("docusaurus-lunr-search"),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Escape-Technologies/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: "Escape logo",
          src: "img/logo.svg",
          height: "300px",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "dast/getting-started/index",
            label: "DAST",
          },
          {
            type: "doc",
            position: "left",
            docId: "inventory/introduction/index",
            label: "Inventory",
          },
          {
            href: "https://calendly.com/d/46g-xzy-dgw",
            label: "New to Escape? Chat with our team",
            position: "right",
          },
          {
            href: "https://escape.tech",
            label: "Website",
            position: "right",
          },
          {
            href: "https://app.escape.tech/login",
            label: "Login",
            position: "right",
          },
          {
            href: "https://github.com/Escape-Technologies",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.escape.tech",
              },
              {
                label: "GitHub",
                href: "https://github.com/escape-technologies",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Escape website",
                href: "https://escape.tech/",
              },
              {
                label: "Blog",
                href: "https://escape.tech/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Escape Technologies SAS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
