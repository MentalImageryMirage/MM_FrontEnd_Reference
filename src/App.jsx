import React, { useState } from 'react';
import DataTable from './components/DataTable.jsx';
import LogConsole from './components/LogConsole.jsx';
import UserInfoModal from './components/UserInfoModal.jsx';
import { INITIAL_DATA } from './data/config.js';

const App = () => {
    const [activeTab, setActiveTab] = useState('status');
    const [data, setData] = useState(INITIAL_DATA);
    const [logs, setLogs] = useState([
        { id: 1, time: '10:00:00', type: 'info', message: 'System initialized.' },
        { id: 2, time: '10:00:05', type: 'info', message: 'Viewport locked to 16:9 aspect ratio.' },
    ]);
    const [modalState, setModalState] = useState({ isOpen: false, columnData: null });

    const addLog = (msg, type = 'info') => {
        const now = new Date().toLocaleTimeString('en-GB');
        setLogs(prev => [...prev, { id: Date.now(), time: now, type, message: msg }]);
    };

    const handleHeaderClick = (columnData) => {
        addLog(`Accessing profile for: ${columnData.label}`, 'info');
        setModalState({ isOpen: true, columnData });
    };

    return (
        <div className="screen-wrapper">
            <div className="cassette-layout">
                {/* 顶部 */}
                <header className="header-panel">
                    <div className="brand-logo">
                        <div className="brand-icon"></div>
                        DIAMOND_OS v4.3
                    </div>
                    <div style={{fontSize: '0.8rem', color: '#666'}}>
                        ASPECT: 16:9
                    </div>
                </header>

                {/* Tab 栏 */}
                <div className="nav-bar">
                    <button className={`nav-tab ${activeTab === 'status' ? 'active' : ''}`} onClick={() => setActiveTab('status')}>
                        Grid_View
                    </button>
                    <button className={`nav-tab ${activeTab === 'config' ? 'active' : ''}`} onClick={() => setActiveTab('config')}>
                        Sys_Config
                    </button>
                </div>

                {/* CRT 主屏幕框 */}
                <div className="crt-frame">
                    
                    {/* 上半部分：表格区域 */}
                    <div className="main-view">
                        {activeTab === 'status' && (
                            <DataTable data={data} onHeaderClick={handleHeaderClick} />
                        )}
                        {activeTab === 'config' && (
                            <div style={{padding: '40px', textAlign: 'center', color: '#555'}}>
                                [ CONFIGURATION MODULE LOCKED ]
                                <br/><br/>
                                Please contact administrator.
                            </div>
                        )}
                    </div>

                    {/* 分割线 */}
                    <div className="split-divider">
                        <div className="diamond-dot"></div>
                        <div className="diamond-dot active"></div>
                        <div className="diamond-dot"></div>
                        <div className="diamond-dot active"></div>
                        <div className="diamond-dot"></div>
                    </div>

                    {/* 下半部分：日志 */}
                    <LogConsole logs={logs} />

                </div>

                {/* 弹窗组件 */}
                <UserInfoModal 
                    isOpen={modalState.isOpen} 
                    columnData={modalState.columnData}
                    onClose={() => setModalState({ ...modalState, isOpen: false })}
                />
            </div>
        </div>
    );
};

export default App;