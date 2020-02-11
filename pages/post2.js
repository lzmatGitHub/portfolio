import { useRouter } from 'next/router';
import IndexLayout from '../components/IndexLayout';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page = () => (
  <IndexLayout>
    <Content />
  </IndexLayout>
);

export default Page;