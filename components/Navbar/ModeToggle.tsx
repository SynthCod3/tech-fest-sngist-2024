"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <Button variant="ghost" size="icon">
            <SunIcon
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100"
                onClick={() => setTheme("light")}
            />
            <MoonIcon
                className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-90 transition-all dark:rotate-0 dark:scale-0"
                onClick={() => setTheme("dark")}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
