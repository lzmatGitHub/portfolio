import HeadConfig from '../../components/Component/HeadConfig';
import { useRouter } from 'next/router';
import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Index() {
    const router = useRouter();
    return (
        <div>
            <HeadConfig title="劉のポートフォリオサイト" description="React.jsとNext.jsで作成したポートフォリオサイト"/>
            <h1>{router.query.id}</h1>
        </div>
    );
}