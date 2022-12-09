import styles from "./ProfileInfo.module.scss";
export const ProfileInfo = () => {
    return (
        <div>
            <img
                className={styles.mainImage}
                alt="alt"
                src="https://images.caradisiac.com/images/8/6/5/5/198655/S0-moto-electrique-damon-ca-cartonne-731272.jpg"
            ></img>
            <div className={styles.descriptionBlock}>ava + sescription</div>
        </div>
    );
};
