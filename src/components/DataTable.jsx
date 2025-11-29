import React from 'react';
import { COLUMNS } from '../data/config.js';

const DataTable = ({ data, onHeaderClick }) => {
    return (
        <div className="table-scroll-container">
            <table className="rhombus-table">
                <thead>
                    <tr>
                        {COLUMNS.map((col) => (
                            <th 
                                key={col.key}
                                onClick={() => col.userInfo ? onHeaderClick(col) : null}
                                style={{ cursor: col.userInfo ? 'pointer' : 'default' }}
                            >
                                {col.label}
                                {col.userInfo && <span className="info-icon"></span>}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id}>
                            {COLUMNS.map(col => (
                                <td key={`${row.id}-${col.key}`}>
                                    {row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;