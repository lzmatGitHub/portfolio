import HeadConfig from '../components/Component/HeadConfig';
import IndexLayout from '../components/Layout/IndexLayout';
import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Index() {
    const { data, error } = useSWR('/api/cards', fetcher);
    console.log(data);
    return (
        <div>
            <HeadConfig title="劉のポートフォリオサイト" description="React.jsとNext.jsで作成したポートフォリオサイト"/>
            <IndexLayout/>
        </div>
    );
}