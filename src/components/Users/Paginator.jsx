import styles from "./Users.module.scss";
import Loader from "../Loader";

export const Paginator = ({
    pages,
    currentPage,
    setCurrentPage,
    isLoading,
}) => {
    if (isLoading) return <Loader />;
    return (
        <div>
            {pages.map((e) => (
                <span
                    key={e}
                    className={
                        currentPage === e ? styles.selectedPage : styles.page
                    }
                    onClick={() => setCurrentPage(e)}
                >
                    {e}
                </span>
            ))}
        </div>
    );
};
