import MyPosts from "./MyPosts";
import styles from "./Profile.module.scss";

export const Profile = () => {
    return (
        <div>
            <img
                className={styles.mainImage}
                alt="alt"
                src="https://images.caradisiac.com/images/8/6/5/5/198655/S0-moto-electrique-damon-ca-cartonne-731272.jpg"
            ></img>
            <div>ava + sescription</div>
            <MyPosts />
        </div>
    );
};
