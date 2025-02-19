"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgesstore";


interface EditorProps {
  onChange: (value: string) => void; 
  initialContent?: string;
  editable?: boolean;
}

 const Editor = ({
  onChange,
  initialContent,
  editable = true, // Provide a default value for editable
}: EditorProps) => {
  const initialBlocks = initialContent ? JSON.parse(initialContent) : undefined;
  const [blocks, setBlocks] = useState<PartialBlock[]>(initialBlocks);
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const respone = await edgestore.publicFiles.upload({
      file
    });

    return respone.url;
  }
  const { resolvedTheme } = useTheme();

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: blocks,
    uploadFile: handleUpload
  });


  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onChange={()=> {
        setBlocks(editor.document);
        onChange(JSON.stringify(blocks));
      }}
    />
  );
};


export default Editor;