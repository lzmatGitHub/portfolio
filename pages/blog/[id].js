import { useRouter } from 'next/router';
import IndexLayout from '../../components/IndexLayout';

export default function Post() {
  const router = useRouter();

  return (
    <IndexLayout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </IndexLayout>
  );
}