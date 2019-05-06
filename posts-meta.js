const articleLinks = [
  {
    href: '/posts/1.html',
    title: 'Introduction'
  },
  {
    href: '/posts/2.html',
    title: 'A title'
  },
  {
    href: '/posts/3.html',
    title: 'Adding Posts'
  },
  {
    href: '/posts/4.html',
    title: 'Links to Posts'
  },
  {
    href: '/posts/5.html',
    title: 'MVP is Done'
  },
  {
    href: '/posts/6.html',
    title: 'Refactor Spike 1'
  }
];

const posts = [
  {
    date: 'April 2019'
  },
  {
    date: 'April 2019'
  },
  {
    date: 'April 2019'
  },
  {
    date: 'April 2019'
  },
  {
    date: 'April 2019'
  },
  {
    date: 'April 2019'
  }
];

const postsWithLinks = posts.map(p => Object.assign(p, { articleLinks }));

module.exports = postsWithLinks;
