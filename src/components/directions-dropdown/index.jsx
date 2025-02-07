"use client";

import "./style.scss";
import { useDetectClickOutside } from "react-detect-click-outside";
import {useEffect, useState} from "react";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const DirectionDropdown = () => {
    const [drop, setDrop] = useState(false);

    const handleDirectionDrop = () => {
        setDrop(!drop);
    };

    const closeDrop = () => {
        setDrop(false);
    };

    // Detect click outside using `react-detect-click-outside`
    const ref = useDetectClickOutside({ onTriggered: closeDrop });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <SkeletonLoading w={"172px"} h={"40px"} /> :
                <button ref={ref} onClick={handleDirectionDrop} className="direction-drop">
                    <img src="/directions.svg" alt="direction"/>
                    Направления
                    <span className={drop ? "all-subcategories" : "all-subcategories hidden-drop"}>
                <span onClick={closeDrop}>Маркетинг</span>
                <span onClick={closeDrop}>Образование</span>
                <span onClick={closeDrop}>ИТ</span>
                <span onClick={closeDrop}>Культура</span>
                <span onClick={closeDrop}>Маркетинг</span>
                <span onClick={closeDrop}>Бизнес</span>
            </span>
                </button>
            }
        </>

    );
};

export default DirectionDropdown;
