"use client";

import DataTable from "@/components/DataTable";
import axios from "axios";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

const Page = () => {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const headers = ['Sr', 'Name', 'Email', 'Message', 'Created At'];

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/leads');
                if (response.data.success) {
                    setLeads(response.data.leads);
                }
            } catch (error) {
                console.error('Error fetching leads:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    const rows = leads.map((lead, index) => ({
        Sr: index + 1,
        Name: lead.name,
        Email: lead.email,
        Message: lead.message,
        "Created At": moment(lead.createdAt).format("DD MMM YYYY, hh:mm A"),
    }));

    const excelData = useMemo(() => rows, [rows]);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Leads");
        XLSX.writeFile(wb, "leads-export.xlsx");
    };

    return (
        <>
            <div className="admin-header">
                <h1 className="admin-heading">Leads</h1>
                <button
                    onClick={exportToExcel}
                    className="export-xlsx-btn active"
                >
                    Export to Excel
                </button>
            </div>

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <DataTable headers={headers} rows={rows} />
            )}
        </>
    );
};

export default Page;
