"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()

  const sidebarItems = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Preface",
          href: "/docs",
        },
        {
          title: "Program Structure",
          href: "/docs/program-structure",
        },
      ],
    },
    {
      title: "Language Basics",
      items: [
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
      ],
    },
    {
      title: "Statements",
      items: [
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
      ],
    },
    {
      title: "Expressions",
      items: [
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
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Examples",
          href: "/docs/examples",
        },
      ],
    },
  ]

  return (
    <main className="flex-1 flex flex-col">
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-background overflow-y-auto h-[calc(100vh-8rem)]">
          <div className="p-4">
            {sidebarItems.map((section, i) => (
              <div key={i} className="mb-6">
                <h4 className="text-sm font-medium mb-2">{section.title}</h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                          pathname === item.href
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto h-[calc(100vh-8rem)]">
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto py-12 px-6">{children}</div>
        </div>
      </div>
    </main>
  )
}

