import styles from "./ProfileInfo.module.scss";
import { ProfileStatus } from "./ProfileStatus";
export const ProfileInfo = ({ profile }) => {
    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large} alt={"avatar"} />
                <ProfileStatus status={profile.aboutMe} />
            </div>
        </div>
    );
};
