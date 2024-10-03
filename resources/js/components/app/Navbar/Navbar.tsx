"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import {Link} from "@inertiajs/react";

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Accueil", path: "/" },
        { title: "Le programme", path: "/program" },
        { title: "Participer", path: "/participate" },
        {title: "Les ressources", path: "/resources"},
        { title: "Qui sommes-nous ?", path: "/about" },
    ]

    return (
        <nav className="z-10 absolute bg-transparent w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img src="/assets/images/logo.png" alt="Logo" className="hidden md:block w-32" />
                    </a>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        state ? "block" : "hidden"
                    }`}
                >
                    <ul className="font-bold justify-center items-center space-y-8 md:flex md:space-x-24 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-slate-900 hover:text-slate-500">
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
