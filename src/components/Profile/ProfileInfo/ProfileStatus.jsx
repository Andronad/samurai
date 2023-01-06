import { useState } from "react";

export const ProfileStatus = ({ status }) => {
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => setEditMode(false);

    return (
        <div>
            {editMode ? (
                <div>
                    <input
                        value={status}
                        onBlur={deactivateEditMode}
                        autoFocus
                    />
                </div>
            ) : (
                <div onDoubleClick={activateEditMode}>{status}</div>
            )}
        </div>
    );
};
