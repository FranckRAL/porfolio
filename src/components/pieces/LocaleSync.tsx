"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

 const LocaleSync = () => {
    const locale = useLocale();

    useEffect(() => {
      document.documentElement.lang = locale;
    }, [locale]);

    return null;
}

export default LocaleSync;