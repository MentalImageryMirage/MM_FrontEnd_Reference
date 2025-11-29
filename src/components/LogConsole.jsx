import React, { useEffect, useRef } from 'react';

const LogConsole = ({ logs }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <div className="log-view">
            <div className="log-header-label">
                <span>SYSTEM_OUTPUT_STREAM</span>
                <span>AUTO_SCROLL: ON</span>
            </div>
            {logs.map((log) => (
                <div key={log.id} className="log-entry">
                    <div className={`log-bullet ${log.type}`}></div>
                    <div className="log-content">
                        <span style={{ color: 'var(--cf-text-dim)' }}>[{log.time}]</span>{' '}
                        <span style={{
                            color: log.type === 'error' ? 'var(--cf-danger)' :
                                log.type === 'warn' ? 'var(--cf-warn)' : 'var(--cf-text-main)'
                        }}>
                            {log.message}
                        </span>
                    </div>
                </div>
            ))}
            <div ref={bottomRef} />
        </div>
    );
};

export default LogConsole;