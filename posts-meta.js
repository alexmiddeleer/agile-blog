const articleLinks = [
  {
    articleHref: "/posts/1.html",
    articleTitle: "Introduction"
  },
  {
    articleHref: "/posts/2.html",
    articleTitle: "A title"
  },
  {
    articleHref: "/posts/3.html",
    articleTitle: "Adding Posts"
  },
  {
    articleHref: "/posts/4.html",
    articleTitle: "Links to Posts"
  },
  {
    articleHref: "/posts/5.html",
    articleTitle: "MVP is Done"
  },
  {
    articleHref: "/posts/6.html",
    articleTitle: "Refactor Spike 1"
  }
];

const posts = [
  {
    date: "April 2019"
  },
  {
    date: "April 2019"
  },
  {
    date: "April 2019"
  },
  {
    date: "April 2019"
  },
  {
    date: "April 2019"
  },
  {
    date: "April 2019"
  }
];

const postsWithLinks = posts.map(p => Object.assign(p, { articleLinks }));

module.exports = postsWithLinks;
