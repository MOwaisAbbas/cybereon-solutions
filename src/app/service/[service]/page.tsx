"use client"
import { useParams } from "next/navigation";

const Service = () => {
    const params = useParams()

    console.log(params?.service);
    return (
        <div>Service - {params?.service}</div>
    );
};

export default Service;
