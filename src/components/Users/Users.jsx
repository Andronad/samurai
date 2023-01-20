import Loader from "../Loader";
import { Paginator } from "./Paginator";
import { User } from "./User";

export const Users = ({
    pages,
    users,
    follow,
    unfollow,
    currentPage,
    setCurrentPage,
    isLoading,
    followingInProgress,
}) => {
    if (isLoading) return <Loader />;
    return (
        <div>
            <Paginator
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isLoading={isLoading}
            />
            {users.map((u) => (
                <User
                    user={u}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            ))}
        </div>
    );
};
