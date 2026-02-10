"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: string;
}

const IconRenderer = ({ name, ...props }: IconProps) => {
  const kebabCaseName = name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase() as keyof typeof dynamicIconImports;

  const Icon = useMemo(() => {
    const importFn = dynamicIconImports[kebabCaseName];
    
    if (!importFn) return null;

    return dynamic(importFn, {
      loading: () => <div className="w-6 h-6 animate-pulse bg-primary/10 rounded" />,
      ssr: false,
    });
  }, [kebabCaseName]);

  if (!Icon) return null;

  return <Icon {...props} />;
};

export default IconRenderer;

