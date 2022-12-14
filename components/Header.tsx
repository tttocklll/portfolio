"use client";

import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import logoImage from "../public/tttocklll.png";

export default function Header() {
  return (
    <Popover as="header" className="relative bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-14">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">tttocklll</span>
              <Image className="h-8 w-auto sm:h-10" src={logoImage} alt="tttocklll" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="/about" className="text-xl font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/experiences"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Experiences
            </Link>
          </Popover.Group>
          <div className="hidden justify-end space-x-10 md:flex md:flex-1 lg:w-0">
            <Link
              href="https://forms.gle/t18jvVB6x1HdnXbj7"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image className="h-8 w-auto" src={logoImage} alt="tttocklll" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <Link
                  href="/about"
                  className="border-b pb-2 text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </Link>
                <Link
                  href="/experiences"
                  className="border-b pb-2 text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Experiences
                </Link>
                <Link
                  href="https://forms.gle/t18jvVB6x1HdnXbj7"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
