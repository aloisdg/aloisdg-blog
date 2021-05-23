module.exports = {
  meta: {
    title: "alois",
    description: "Personal blog of alois de gouvello.",
    lang: "en",
    siteUrl: "https://aloisdg.netlify.app/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://aloisdg.netlify.app/",
    authorName: "aloisdg",
    authorEmail: "alois@outlook.fr"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to aloisdg's blog",
    description: "Lets document what I face in my life."
  }
}