import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';
import PexelsMounirSalah297445214678998Jpg from '../../assets/pexels-mounir-salah-2974452-14678998.jpg';
import PexelsFarhad19239118Jpg from '../../assets/pexels-farhad-19239118.jpg';
import PexelsXmtnguyen5966249Jpg from '../../assets/pexels-xmtnguyen-5966249.jpg';
import PexelsDamI214776179529748127Jpg from '../../assets/pexels-dam-i-2147761795-29748127.jpg';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2>Today&apos;s TOp Deals</h2>
                <div className={styles.cards}>
                    <Card imageUrl={PexelsMounirSalah297445214678998Jpg}>Burger</Card>
                    <Card imageUrl={PexelsFarhad19239118Jpg}>Classic Pizza</Card>
                    <Card imageUrl={PexelsXmtnguyen5966249Jpg}>Ramen</Card>
                    <Card imageUrl={PexelsDamI214776179529748127Jpg}>La Grill</Card>
                    <Card />
                </div>
            </div>
        </div>
    );
};
