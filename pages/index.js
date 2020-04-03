import HeadConfig from '../components/Component/HeadConfig';
import IndexLayout from '../components/Layout/IndexLayout';
import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Index() {
    const { data, error } = useSWR('api/index_button', fetcher);
    if (data) {
        return (
            <div>
                <HeadConfig title="劉のポートフォリオサイト" description="React.jsとNext.jsで作成したポートフォリオサイト"/>
                <IndexLayout indexbuttons={data} />
            </div>
        );
    } else {
        return (
            <div>
                <HeadConfig title="劉のポートフォリオサイト" description="React.jsとNext.jsで作成したポートフォリオサイト"/>
            </div>
        );
    }
}