"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface DocSearchProps {
  className?: string
}

export function DocSearch({ className }: DocSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  // This would be replaced with actual search data
  const searchItems = [
    {
      title: "Preface",
      href: "/docs",
    },
    {
      title: "Program Structure",
      href: "/docs/program-structure",
    },
    {
      title: "Comments",
      href: "/docs/comments",
    },
    {
      title: "Keywords",
      href: "/docs/keywords",
    },
    {
      title: "Identifiers and Literals",
      href: "/docs/identifiers-literals",
    },
    {
      title: "Data Types",
      href: "/docs/data-types",
    },
    {
      title: "Variables",
      href: "/docs/variables",
    },
    {
      title: "Print Statement",
      href: "/docs/print-statement",
    },
    {
      title: "Input Statement",
      href: "/docs/input-statement",
    },
    {
      title: "Assignment Statement",
      href: "/docs/assignment-statement",
    },
    {
      title: "If Statement",
      href: "/docs/if-statement",
    },
    {
      title: "While Statement",
      href: "/docs/while-statement",
    },
    {
      title: "For Statement",
      href: "/docs/for-statement",
    },
    {
      title: "Function Definition",
      href: "/docs/function-definition",
    },
    {
      title: "Return Statement",
      href: "/docs/return-statement",
    },
    {
      title: "Basic Expressions",
      href: "/docs/basic-expressions",
    },
    {
      title: "Logical Expressions",
      href: "/docs/logical-expressions",
    },
    {
      title: "Comparison",
      href: "/docs/comparison",
    },
    {
      title: "Modulo Expression",
      href: "/docs/modulo-expression",
    },
    {
      title: "Examples",
      href: "/docs/examples",
    },
  ]

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-md text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
          className,
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  router.push(item.href)
                  setOpen(false)
                }}
              >
                <Search className="mr-2 h-4 w-4" />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

