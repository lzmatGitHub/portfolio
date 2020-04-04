import HeadConfig from '../components/Component/HeadConfig';
import IndexLayout from '../components/Layout/IndexLayout';
import data from '../data/index_button.json';

export default function Index() {

    console.log('json file');
    console.log(data);

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