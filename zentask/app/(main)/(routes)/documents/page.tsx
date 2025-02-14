"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";



const DocumentsPage = () => {

    const { user } = useUser();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.svg"
                height="200"
                width="200"
                alt="empty"
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.svg"
                height="200"
                width="200"
                alt="empty"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s ZenHub
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>

        </div>
    )
}

export default DocumentsPage;