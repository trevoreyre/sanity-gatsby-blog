export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eabc6cb102789604b85f65b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xc1pc43y',
                  apiId: 'fc1848db-4595-4ddc-9c9a-6963b168971d'
                },
                {
                  buildHookId: '5eabc6cb7b6cc3bcaa71f324',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dx5j4cs3',
                  apiId: '4ccbffbb-9e91-4b87-ad5b-a477ee440a20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trevoreyre/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dx5j4cs3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
