import React, { useContext } from "react";
import Link from 'next/link';
import { navBarItems } from '../../utils/navBarItems';
import Button from '../Button';
import Select from '../Select';
import styles from './NavBar.module.scss';
import { useRouter } from 'next/router';
import ModalContext from "../../contexts/modalContext";

type NavBarProps = {
    style?: any;
}
const NavBar = ({
    style
}: NavBarProps) => {
    const { route } = useRouter();

    const modal: any = useContext(ModalContext);

    return (
        <nav>
            <div className={styles.navBarContainer}>
                {navBarItems.map((item: any, i: any) => {
                    return (
                        <Link
                            href={item.navigate}
                            key={`navBarItems-${i}`}
                        >
                            <div
                                className={`${styles.navBarItem} ${route === item.navigate ? styles.active : ``}`}
                                style={{
                                    ...style
                                }}>
                                {item.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div onClick={() => modal.handleConnect()}>
                <Button
                    title={modal.isConnected ? `${modal?.accountAddress?.substr(0, 2)}...${modal?.accountAddress?.substr(modal?.accountAddress.length - 4, 4)}` : 'Connect'} 
                    style={{}}
                    />
            </div>
            <div className={styles.mobileContainer}>
                <Select
                    navBarItems={navBarItems}
                />
                <Button
                    title={`DONATE NOW`}
                    link={`/donate`}
                    min
                />
            </div>
        </nav>
    )
}

export default NavBar;