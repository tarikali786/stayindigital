"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const CodeEditor = dynamic(() => import("@uiw/react-textarea-code-editor").then(mod => ({ default: mod.default })), { ssr: false });

export default function RichEditor({ value, onChange, placeholder }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-black/60 border border-white/20 rounded p-3 text-white/60 min-h-[200px]">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="bg-black/60 border border-white/20 rounded text-white">
      <CodeEditor
        value={value}
        language="html"
        placeholder={placeholder || "Write your HTML content here..."}
        onChange={(evn) => onChange(evn.target.value)}
        padding={15}
        style={{
          fontSize: 14,
          backgroundColor: "transparent",
          fontFamily: 'ui-monospace,SFMono-Regular,"SF Mono",Consolas,"Liberation Mono",Menlo,monospace',
          minHeight: "300px",
        }}
      />
    </div>
  );
}


