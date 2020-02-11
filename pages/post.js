import { useRouter } from 'next/router';
import IndexLayout from '../components/IndexLayout';

const Page = () => {
  const router = useRouter();

  return (
    <IndexLayout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </IndexLayout>
  );
};

export default Page;