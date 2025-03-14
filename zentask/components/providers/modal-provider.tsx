"use client";

import { CoverImageModal } from "@/app/(main)/_components/modals/cover-image-modal";
import { SettingsModal } from "@/app/(main)/_components/modals/settings-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;

    return (
        <>
        <SettingsModal />
        <CoverImageModal />
        </>
    )
}