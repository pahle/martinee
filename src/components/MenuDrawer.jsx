"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MenuDrawer({ className }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        {open ? (
          <button
            className="text-xl font-bold"
            onClick={() => setOpen(false)}
          >
            CLOSE
          </button>
        ) : (
          <SheetTrigger asChild>
            <button className="text-xl font-bold">
              MENU
            </button>
          </SheetTrigger>
        )}
        <div>
          <SheetContent className="md:max-w-none md:w-1/2 max-w-sm w-3/4 flex flex-col lg:gap-72 gap-40">
            <div className="flex justify-between w-full mt-8">
              <div>
                <div className="font-semibold text-sm flex flex-col gap-2 ">
                  <Link
                    href="/catalog"
                    onClick={() => setOpen(false)}
                  >
                    ALL
                  </Link>
                  <Link
                    href="/catalog/batch-1"
                    onClick={() => setOpen(false)}
                  >
                    BATCH 1
                  </Link>
                  {/* <Link href="/catalog">LACOSTE</Link>
                    <Link href="/catalog">TOPS</Link>
                    <Link href="/catalog">BOTTOM</Link>
                    <Link href="/catalog">FRAGRANCE</Link>
                    <Link href="/catalog">NAIL POLISH</Link>
                    <Link href="/catalog">ACCESSORIES</Link>
                    <Link href="/catalog">LUGGAGE</Link>
                    <Link href="/catalog">FOOTWEAR</Link> */}
                </div>
              </div>
              <div>
                <div className="text-sm flex flex-col gap-2 text-end [&>*]:cursor-pointer">
                  <Link href="/catalog">catalog</Link>
                  <Link href="/catalog">broadcast</Link>
                  <Link href="/catalog">instagram</Link>
                  <Link href="/catalog">store</Link>
                  <Link href="/catalog">privacy</Link>
                  <Link href="/catalog">accessibiaty</Link>
                  <Link href="/catalog">terms</Link>
                </div>
              </div>
            </div>
            <SheetFooter>
              <div className="flex flex-col justify-center items-center gap-8">
                <Button className="text-black font-semibold rounded-full">
                  SUBSCRIBE TO OUR NEWSLETTER
                </Button>
                <p className="font-semibold">
                  Martinee Studio
                </p>
              </div>
            </SheetFooter>
          </SheetContent>
        </div>
      </Sheet>
    </div>
  );
}
