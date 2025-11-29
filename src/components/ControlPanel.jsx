import React from 'react';
import { useState } from 'react';

// --- 组件：控制面板 (新增) ---
const ControlPanel = ({ activeTab, onAction }) => {
    const [inputValue, setInputValue] = useState('');

    // 根据 Tab 定义不同的按钮
    const buttons = activeTab === 'status' 
        ? ['REFRESH_GRID', 'EXPORT_CSV', 'FILTER_ACTIVE', 'CLEAR_SELECTION']
        : ['SAVE_CONFIG', 'RESET_DEFAULTS', 'TEST_CONN', 'DEBUG_MODE'];

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            onAction('CMD_EXEC', inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="control-panel">
            <div className="panel-label">COMMAND_INPUT</div>
            <div className="cmd-input-wrapper">
                <span className="cmd-prompt">&gt;</span>
                <input 
                    type="text" 
                    className="cmd-input" 
                    placeholder="ENTER_CMD..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className="panel-label" style={{marginTop: '5px'}}>
                QUICK_ACTIONS [{activeTab.toUpperCase()}]
            </div>
            <div className="control-grid">
                {buttons.map(btn => (
                    <button 
                        key={btn} 
                        className="rhombus-btn small"
                        onClick={() => onAction(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ControlPanel;