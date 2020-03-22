import HeadConfig from '../components/Component/HeadConfig';
import IndexLayout from '../components/Layout/IndexLayout';

export default function Index() {
    return (
        <div>
            <HeadConfig title="劉のポートフォリオサイト" description="React.jsとNext.jsで作成したポートフォリオサイト"/>
            <IndexLayout/>
        </div>
    );
}