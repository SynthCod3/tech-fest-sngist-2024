"use client";

import { ModeToggle } from "./components/ModeToggle";
import Image from "next/image";
import { NavMenu } from "./components/NavMenu";

const Navbar = () => {
    return (
        <div className="w-full px-6 h-20 flex items-center justify-between fixed bg-background">
            <div className="max-w-16">
                <Image
                    src={"/logo.png"}
                    alt={"Logo"}
                    width={400}
                    height={400}
                />
            </div>
            <div className="flex gap-14 justify-center items-center">
                <NavMenu />
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
