import styles from "./ProfileInfo.module.scss";
import { ProfileStatus } from "./ProfileStatus";
export const ProfileInfo = ({ profile, status }) => {
    return (
        <div>
            <div className={styles.descriptionBlock}>
                <div>{profile.fullName}</div>
                <img src={profile.photos.large} alt={"avatar"} />
                <ProfileStatus status={status} />
            </div>
        </div>
    );
};
