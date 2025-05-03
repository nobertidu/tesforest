import styles from './Select.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

type SelectProps = {
    navBarItems: any;
}
const Select = ({
    navBarItems
}: SelectProps) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const handleClick = () => {
        setIsMenuOpened((prev) => !prev);
    }
    return (
        <div
            className={styles.container}
            onClick={handleClick}
        >
            <div className={styles.buttonMenu}>
                <Image
                    src={isMenuOpened
                        ? `/common/MenuButtonClose.svg`
                        : `/common/MenuButtonOpen.svg`
                    }
                    width={20}
                    height={15}
                    alt={`MobileMenuButton`}
                />
            </div>
            <div className={`${styles.mobileSelectMenu} ${isMenuOpened
                ? styles.opened
                : ``
            }`}>
                {navBarItems.map((item: any, i: any) => {
                    return (
                        <Link
                            href={item.navigate}
                            key={`navBarItemsMobile-${i}`}
                        >
                            <div className={styles.itemContainer}>
                                {item.title}
                            </div>
                            {item.borderline ? <div className={styles.borderline}></div> : ``}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Select;