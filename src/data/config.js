// 列配置
export const COLUMNS = [
    { key: 'id', label: 'UNIT_ID', fixed: true },
    { 
        key: 'operator', label: 'OPERATOR', 
        userInfo: { 
            userName: "Alex_R", userId: "OP-7721", 
            perms: { "READ": true, "WRITE": true, "EXEC": false, "NET": true, "ADMIN": false, "ROOT": false } 
        } 
    },
    { 
        key: 'supervisor', label: 'SUPERVISOR', 
        userInfo: { 
            userName: "Sarah_K", userId: "SV-9901", 
            perms: { "READ": true, "WRITE": true, "EXEC": true, "NET": true, "ADMIN": true, "ROOT": false } 
        } 
    },
    { 
        key: 'tech_lead', label: 'TECH_LEAD', 
        userInfo: { 
            userName: "Unit_404", userId: "AI-CORE", 
            perms: { "READ": true, "WRITE": true, "EXEC": true, "NET": true, "ADMIN": true, "ROOT": true } 
        } 
    },
    { 
        key: 'maintenance', label: 'MAINT_CREW', 
        userInfo: { 
            userName: "Bob_M", userId: "MT-1023", 
            perms: { "READ": true, "WRITE": false, "EXEC": false, "NET": false, "ADMIN": false, "ROOT": false } 
        } 
    },
    { 
        key: 'security', label: 'SEC_OFFICER', 
        userInfo: { 
            userName: "Cmdr_Z", userId: "SC-5500", 
            perms: { "READ": true, "WRITE": false, "EXEC": true, "NET": false, "ADMIN": true, "ROOT": false } 
        } 
    },
    { 
        key: 'audit', label: 'AUDIT_LOG', 
        userInfo: { 
            userName: "Ext_Audit", userId: "AU-0012", 
            perms: { "READ": true, "WRITE": false, "EXEC": false, "NET": true, "ADMIN": false, "ROOT": false } 
        } 
    },
    { 
        key: 'backup', label: 'BACKUP_SYS', 
        userInfo: { 
            userName: "Auto_Bot", userId: "BK-8888", 
            perms: { "READ": true, "WRITE": true, "EXEC": false, "NET": true, "ADMIN": false, "ROOT": false } 
        } 
    }
];

// 生成表格数据
export const generateRows = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `SEC-${String(i + 1).padStart(3, '0')}`,
        operator: i % 2 === 0 ? 'Active' : 'Idle',
        supervisor: 'On_Duty',
        tech_lead: 'Monitoring',
        maintenance: i % 5 === 0 ? 'Scheduled' : 'None',
        security: 'Secure',
        audit: 'Logging...',
        backup: 'Synced'
    }));
};

export const INITIAL_DATA = generateRows(30);