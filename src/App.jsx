import React, { useState } from 'react';
import DataTable from './components/DataTable.jsx';
import LogConsole from './components/LogConsole.jsx';
import UserInfoModal from './components/UserInfoModal.jsx';
import ControlPanel from './components/ControlPanel.jsx';
import { INITIAL_DATA } from './data/config.js';

const App = () => {
    const [activeTab, setActiveTab] = useState('status');
    const [data, setData] = useState(INITIAL_DATA);
    const [isDarkMode, setIsDarkMode] = useState(true);
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

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        addLog(`Theme switched to: ${!isDarkMode ? 'DARK_MODE' : 'LIGHT_MODE'}`, 'warn');
    };

    // 处理控制面板的动作
    const handleControlAction = (action, payload = '') => {
        if (action === 'CMD_EXEC') {
            addLog(`Executing command: ${payload}`, 'info');
            // 模拟命令处理延迟
            setTimeout(() => {
                addLog(`Command '${payload}' executed successfully.`, 'success');
            }, 600);
        } else {
            addLog(`Action triggered: ${action}`, 'warn');
        }
    };

    return (
        <div className={`screen-wrapper ${isDarkMode ? '' : 'light-mode'}`}>
            <div className="cassette-layout">
                {/* 顶部 */}
                <header className="header-panel">
                    <div className="brand-logo">
                        <div className="brand-icon"></div>
                        DARK_GREY_MIRROR_MATRIX v0.1
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <button className="rhombus-btn small" onClick={toggleTheme}>
                            {isDarkMode ? '☾ 灰镜模式' : '☼ 明镜模式'}
                        </button>
                        {/* <div style={{ fontSize: '0.8rem', color: 'var(--cf-text-dim)' }}>
                            ASPECT: 16:9
                        </div> */}
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
                            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--cf-text-dim)' }}>
                                [ CONFIGURATION MODULE LOCKED ]
                                <br /><br />
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

                    {/* 下半部分：日志 + 控制面板 */}
                    <div className="bottom-section">
                        {/* 左侧 60% 日志 */}
                        <LogConsole logs={logs} />

                        {/* 右侧 40% 功能面板 */}
                        <ControlPanel activeTab={activeTab} onAction={handleControlAction} />
                    </div>

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