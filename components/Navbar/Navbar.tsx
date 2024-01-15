"use client";

import { ModeToggle } from "./components/ModeToggle";
import Image from "next/image";
import { NavMenu } from "./components/NavMenu";

const Navbar = () => {
    return (
        <div className="w-full px-6 h-16 flex items-center justify-between">
            <div className="">
				<Image src={"/logo.png"} alt={"Logo"} width={45} height={50} />
			</div>
            <div className="flex gap-12 justify-center items-center">
				<NavMenu />
				<ModeToggle />
			</div>
        </div>
    );
};

export default Navbar;
