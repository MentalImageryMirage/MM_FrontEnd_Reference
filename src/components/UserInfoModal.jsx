import React from 'react';

const UserInfoModal = ({ isOpen, onClose, columnData }) => {
    if (!isOpen || !columnData) return null;
    const { userInfo, label } = columnData;
    const perms = userInfo || { userName: "N/A", userId: "N/A", perms: {} }; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-diamond-box" onClick={e => e.stopPropagation()}>
                <div className="modal-title">
                    <span>// USER_PROFILE</span>
                    <span style={{color: 'var(--cf-accent)'}}>[{label}]</span>
                </div>
                {userInfo ? (
                    <>
                        <div className="user-info-grid">
                            <div className="info-item">
                                <label>USER_NAME</label>
                                <div className="value">{userInfo.userName}</div>
                            </div>
                            <div className="info-item">
                                <label>USER_ID</label>
                                <div className="value">{userInfo.userId}</div>
                            </div>
                        </div>
                        <div className="bool-matrix">
                            <div className="bool-matrix-title">PERMISSION_MATRIX</div>
                            <div className="bool-grid">
                                {Object.entries(userInfo.perms).map(([key, value]) => (
                                    <div key={key} className="bool-item">
                                        <div className={`bool-indicator ${value ? 'true' : 'false'}`}></div>
                                        <span className="bool-label">{key}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div style={{padding: '20px', textAlign: 'center', color: 'var(--cf-text-dim)'}}>
                        NO_DATA_AVAILABLE
                    </div>
                )}
                <div style={{marginTop: '25px', textAlign: 'right'}}>
                    <button className="rhombus-btn" onClick={onClose}>CLOSE_VIEW</button>
                </div>
            </div>
        </div>
    );
};

export default UserInfoModal;