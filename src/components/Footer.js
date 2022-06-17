import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className=" p-6 flex flex-col md:flex-row items-center justify-between text-white bg-gray-700">
        <p className="font-medium">Built by Emcali Dev</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contacto
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Emcali Dev
          </a>
        </div>
      </footer>
    </div>
  );
}
