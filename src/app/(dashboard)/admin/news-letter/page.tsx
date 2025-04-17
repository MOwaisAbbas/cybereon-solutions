"use client";
import DataTable from "@/components/DataTable";
import axios from "axios";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

interface NewsletterEntry {
    _id: string;
    email: string;
    createdAt: string;
}

const Page = () => {
    const [data, setData] = useState<NewsletterEntry[]>([]);
    const [loading, setLoading] = useState(true);

    const headers = ["Sr", "Email", "Created At"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/newsletter", { headers: { "Cache-Control": "no-store" } });
                if (res.data.success) {
                    setData(res.data.newsletters || []);
                } else {
                    console.error("Failed to fetch:", res.data.message);
                }
            } catch (err) {
                console.error("API error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const rows = data.map((entry, index) => ({
        Sr: index + 1,
        Email: entry.email,
        "Created At": moment(entry.createdAt).format("DD MMM YYYY, hh:mm A"),
    }));

    const excelData = useMemo(() => {
        return rows.map((row) => ({
            Sr: row.Sr,
            Email: row.Email,
            "Created At": row["Created At"],
        }));
    }, [rows]);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "emails");
        XLSX.writeFile(wb, "newsletter-emails.xlsx");
    };

    return (
        <>
            <div className="admin-header">
                <h1 className="admin-heading">Newsletter Emails</h1>
                <button onClick={exportToExcel} className="export-xlsx-btn active">
                    Export to Excel
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataTable headers={headers} rows={rows} />
            )}
        </>
    );
};

export default Page;
