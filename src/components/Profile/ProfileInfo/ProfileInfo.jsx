import styles from "./ProfileInfo.module.scss";
export const ProfileInfo = ({ profile }) => {
    return (
        <div>
            <img
                className={styles.mainImage}
                alt="alt"
                src="https://images.caradisiac.com/images/8/6/5/5/198655/S0-moto-electrique-damon-ca-cartonne-731272.jpg"
            ></img>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large} alt={"avatar"} />
                ava + sescription
            </div>
        </div>
    );
};
