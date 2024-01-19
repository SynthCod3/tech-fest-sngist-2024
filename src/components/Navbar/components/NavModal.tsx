import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "../index.module.css";
import NavCards from "./NavCards";
import { NavItems } from "../services/NavItems";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavModal = (props: Props) => {
    return (
        props.isOpen && (
            <div className={styles.navModalWrapper}>
                <div className={styles.navModalContents}>
                    <button
                        className={styles.closeButton}
                        onClick={() => props.setIsOpen(false)}
                    >
                        <IoMdCloseCircleOutline />
                    </button>
                    <div className={styles.navItems}>
                        {NavItems.map((item) => (
                            <NavCards
                                text={item.text}
                                link={item.link}
                                icon={item.icon}
                                index={item.index}
								onclick={() => props.setIsOpen(false)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default NavModal;
