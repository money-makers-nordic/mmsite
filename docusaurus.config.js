module.exports = {
  title: 'The Money Makers',
  tagline: 'Financial know-how for newcomers in the Nordics',
  url: 'http://money-makers-nordic.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'money-makers-nordic', // Usually your GitHub org/user name.
  projectName: 'money-makers-nordic.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'themoneymakers.se',
      logo: {
        alt: 'MM Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://instagram.com/themoneymakers.se',
          label: 'Instagram',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook Group',
              href: 'https://www.facebook.com/groups/144739109544832',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/themoneymakers.se/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/moneymakersnordic/mmdocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} I. Engström`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/DirtyF/docusaurus-forestry-starter/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DirtyF/docusaurus-forestry-starter/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
