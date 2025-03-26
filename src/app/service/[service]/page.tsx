"use client"
import Wrapper from "@/components/Wrapper";
import { useParams } from "next/navigation";

const Service = () => {
    const params = useParams()

    return (
        <Wrapper>

            <div>Service - {params?.service}</div>
        </Wrapper>
    );
};

export default Service;
