import Header from './Header'
import About from './About';
import ArticleList from './ArticleList';

const DEFAULT_POSTS = [
  {
    id: 1,
    title: 'Why I started writing things down',
    date: 'Nov 12, 2026',
    preview:
      'Every time I solved a problem I felt sure I’d remember how. I never did. This blog is my fix: a place to keep the answers.',
  },
  {
    id: 2,
    title: 'Learning React, one component at a time',
    date: 'Oct 28, 2026',
    preview:
      'Breaking a page into a tree of small pieces changed how I think about interfaces. Here is the first tree I drew, and what I got wrong.',
  },
  {
    id: 3,
    title: 'The case for a slow weekend',
    date: 'Oct 9, 2026',
    preview:
      'No plans, no list, one long walk. What I noticed when I stopped trying to get anything done.',
  },
];

export default function App({
  name = 'Field Notes',
  image = '/logo.svg',
  about = 'A personal blog about learning to build for the web, walking in the evenings, and writing down what I figure out along the way.',
  posts = DEFAULT_POSTS,
}) {
  return (
  <div className="App">
    <Header name={name} />
    <About image={image} about={about} />
    <ArticleList posts={posts} />
  </div>
);
}