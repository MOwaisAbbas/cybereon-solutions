
interface DataTableProps {
    headers: string[];
    rows: { [key: string]: any }[];
}

const DataTable = ({
    headers,
    rows,
}: DataTableProps) => {


    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.id} >
                            {headers.map(header => (
                                <td key={`${row.id}-${header}`}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {rows.length === 0 && (
                <div className="data-table-no-data">No data available</div>
            )}


        </div>
    );
};

export default DataTable;