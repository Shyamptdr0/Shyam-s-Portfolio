import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-50 px-6 py-4 flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold">Shyam Patidar</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
                {["hero", "about", "skills", "experience", "projects", "contact"].map((id) => (
                    <a key={id} href={`#${id}`} className="hover:shadow-b  hover:border-b hover:shadow-gray-400 p-2 capitalize">
                        {id}
                    </a>
                ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="text-white border-black bg-gray-500 cursor-pointer"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="bg-gray-900 text-white w-3/4"
                    >
                        <nav className="flex flex-col space-y-4 mt-10 ml-5">
                            {["hero", "about", "skills", "experience", "projects", "contact"].map((id) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={handleLinkClick}
                                    className="text-lg hover:underline capitalize"
                                >
                                    {id}
                                </a>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default Navbar;
