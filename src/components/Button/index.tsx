import styles from "./index.module.css";
type Props = {
    content: string;
    type?: string;
    variant?: "primary" | "outline";
    onClick?: () => void;
};

const Button = (props: Props) => {
    return (
        <div className={styles.buttonWrapper} onClick={props.onClick}>
            <button
                style={{
                    backgroundColor:
                        props.variant === "outline"
                            ? "transparent"
                            : "var(--primary)",
                    color:
                        props.variant === "outline"
                            ? "var(--primary)"
                            : "var(--background)",
                    border: `1px solid ${
                        props.variant === "outline"
                            ? "var(--primary)"
                            : "transparent"
                    }`,
                }}
            >
                {props.content}
            </button>
        </div>
    );
};

export default Button;
