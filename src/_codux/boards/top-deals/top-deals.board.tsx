import { createBoard } from '@wixc3/react-board';
import { TopDeals } from '../../../components/top-deals/top-deals';

export default createBoard({
    name: 'TopDeals',
    Board: () => <TopDeals />,
    isSnippet: false,
    environmentProps: {
        windowHeight: 306,
        windowWidth: 1180,
    },
});
