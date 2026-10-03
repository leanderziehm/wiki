import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Docs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },
  markdown: {
    format: 'md',
  },

    scripts: [
    {
      src: 'https://u.leanderziehm.com/script.js',
      defer: true,
      'data-website-id': 'f6c43e3f-ed36-41a9-a120-c63cf96bf025',
    },
    {
      src: '/js/searchFromUrl.js',
      defer: true,
    }
  ],

  url: 'https://docs.leanderziehm.com',
  baseUrl: '/',
  organizationName: 'LeanderZiehm', // Usually your GitHub org/user name.
  projectName: 'docusaurus_obsidian', // Usually your repo name.
  onBrokenLinks: 'warn', // 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
      docs: {
        sidebarPath: './sidebars.ts',
        routeBasePath: '/',
        numberPrefixParser: false,
         // editUrl:'https://github.com/leanderziehm/docusaurus_obsidian/tree/main/packages/create-docusaurus/templates/shared/',

        sidebarItemsGenerator: async ({
          defaultSidebarItemsGenerator,
          ...args
        }) => {
          return defaultSidebarItemsGenerator({
            ...args,
            docs: args.docs.map((doc) => ({
              ...doc,
              sidebarPosition: doc.sidebarPosition ?? 50,
            })),
          });
        },
      },
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'My Docs Logo',
        src: 'img/logo.png',
      },

      

      items: [
      {
        type: 'search',
        position: 'left',
      },
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'tutorialSidebar',
      //     position: 'left',
      //     label: 'Docs',
      //   },
      //   {
      //     href: 'https://github.com/leanderziehm/docusaurus_obsidian',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [      
    //     {
    //       title: 'More',
    //       items: [

    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/leanderziehm/docusaurus_obsidian',
    //         },
    //       ],
    //     },
    //   ],
    // },
     copyright: `<img src="https://pix.leanderziehm.com/docs_docusaurus?url=docs.leanderziehm.com">`,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
