"use client"
import { useParams } from "next/navigation";

const Service = () => {
    const params = useParams()

    return (
        <div>Service - {params?.service}</div>
    );
};

export default Service;
