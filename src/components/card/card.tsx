import classNames from 'classnames';
import styles from './card.module.scss';
import GrilledChickenRiceSpicyChickpeasAvocadoCabbagePepperBuddhaBowlJpg from '../../assets/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl.jpg';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({ imageUrl = GrilledChickenRiceSpicyChickpeasAvocadoCabbagePepperBuddhaBowlJpg, children = "Super Salad", className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={imageUrl}
                alt=""
                className={styles.image}
            />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
