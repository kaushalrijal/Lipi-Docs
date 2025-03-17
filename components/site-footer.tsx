import Link from "next/link"
import { Code2, Github, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0 z-40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
        <div className="flex items-center gap-2">
          {/* <Code2 className="h-5 w-5" /> */}
          <img src="/favicon.ico" className="h-6 w-6"/>
          <p className="text-sm leading-loose text-muted-foreground">
            &copy; {new Date().getFullYear()} Lipi Programming Language. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/kaushalrijal/Lipi"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          {/* <Link
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link> */}
        </div>
      </div>
    </footer>
  )
}

