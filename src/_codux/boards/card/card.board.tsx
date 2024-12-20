import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import styles from './card.board.module.scss';

export default createBoard({
    name: 'Card',
    Board: () => <Card className={styles.card} />,
    environmentProps: {
        windowBackgroundColor: '#908f8f',
        windowHeight: 704,
        windowWidth: 584,
    },
});
