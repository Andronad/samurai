import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer";

export const ProfileStatus = ({ status }) => {
    const dispatch = useDispatch();
    const [localStatus, setLocalStatus] = useState(status);

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(localStatus));
    };

    useEffect(() => {
        setLocalStatus(status);
    }, [status]);

    const onStatusChange = e => {
        setLocalStatus(e.target.value);
    };

    return (
        <div>
            {editMode ? (
                <div>
                    <input
                        value={localStatus}
                        onBlur={deactivateEditMode}
                        autoFocus
                        onChange={onStatusChange}
                    />
                </div>
            ) : (
                <div onDoubleClick={activateEditMode}>
                    {status || "No status"}
                </div>
            )}
        </div>
    );
};
