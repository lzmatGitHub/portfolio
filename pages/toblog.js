import IndexLayout from '../components/IndexLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/blog/[id]" as={`/blog/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <IndexLayout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="blog1" />
        <PostLink id="blog2" />
        <PostLink id="blog3" />
      </ul>
    </IndexLayout>
  );
}