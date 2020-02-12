import IndexLayout from '../components/IndexLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const BolgIndex = props => (
  <IndexLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/shows/[id]" as={`/shows/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </IndexLayout>
);

BolgIndex.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default BolgIndex;