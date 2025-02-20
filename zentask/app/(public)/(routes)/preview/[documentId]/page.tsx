"use client";

import { useParams } from "next/navigation";
import { Toolbar } from "@/app/(main)/_components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery , useMutation } from "convex/react";
import { Cover } from "@/app/(main)/_components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useMemo } from "react";




const DocumentIdPage = () => {
    const Editor = useMemo(() => dynamic(() => import("@/components/editor"), {ssr: false}) , []);
    const params = useParams(); // Unwrap params

    const document = useQuery(api.documents.getbyId, {
        documentId: params.documentId as Id<"documents">,
    });

    const update = useMutation(api.documents.update);

    const onChange = (content: string) => {
        update({
            id: params.documentId as Id<"documents">,
            content
        })
    }

    if (document === undefined) {
        return (
            <div>
                <Cover.Skeleton />
                <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
                    <div className="space-y-4 pl-8 pt-4">
                        <Skeleton className="h-14 w-[50%]" />
                        <Skeleton className="h-4 w-[80%]" />
                        <Skeleton className="h-4 w-[40%]" />
                        <Skeleton className="h-4 w-[60%]" />

                    </div>
                </div>
            </div>
        )
    }

    if (document === null) {
        return <div>Not found</div>;
    }

    return (
        <>
        <div className="pb-40">
                <Cover preview url={document.coverImage} />
                <div className="md:max-w-3xl lg:max-w-4xl mx-auto dark:[#1F1F1F]">
                   <Toolbar preview initialData={document} />
                   <Editor
                        editable={false}
                        onChange={onChange}
                        initialContent={document.content}
                    />
                </div>
        </div>
        </>
    );
};

export default DocumentIdPage;
