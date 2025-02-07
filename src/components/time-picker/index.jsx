"use client"
import {TimePicker} from "antd";
import SkeletonLoading from "@/components/skeleton-main-page-loading";
import {useEffect, useState} from "react";

const TimePickers = () => {
    const [loading, setLoading] = useState(true);
    const format = 'HH:mm';

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return(
        <>
            {loading ? <SkeletonLoading w={"140px"} h={"40px"} /> :
                <TimePicker format={format} placeholder="Время"/>            }
        </>
    )
}

export default TimePickers;