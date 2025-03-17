"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { DocSearch } from "@/components/doc-search"

export function SiteHeader() {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith("/docs")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          {/* <Code2 className="h-6 w-6" /> */}
          <img src="/favicon.ico" className="h-6 w-6"/>
          <span className="font-bold">Lipi</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/docs") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Documentation
            </Link>
            <Link
              href="/docs/examples"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/docs/examples") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Examples
            </Link>
            <Link
              href="https://github.com/kaushalrijal/Lipi"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {isDocsPage && <DocSearch />}
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          {isDocsPage && <DocSearch className="mr-2" />}
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 text-sm">
                <Link
                  href="/docs"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/docs") ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  Documentation
                </Link>
                <Link
                  href="/docs/examples"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/docs/examples") ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  Examples
                </Link>
                <Link
                  href="https://github.com/kaushalrijal/Lipi"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

