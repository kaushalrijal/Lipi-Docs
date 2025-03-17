import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"

export default function Home() {
  const features = [
    "Nepali-inspired syntax",
    "Easy to learn for speakers of Nepali, Hindi, or Sanskrit-based languages",
    "Simple and intuitive control structures",
    "Strong type system with native types",
    "Straightforward function definitions",
    "Familiar programming constructs",
  ]

  const codeExample = `(: A simple program to calculate factorial :)
kaam purna factorial(purna n) {
  yadi (n <= 1) {
    firta 1;
  }
  firta n * factorial(n - 1);
}

bhana("Enter a number: ");
purna n;
suna(n);
bhana("Factorial of ");
bhana(n);
bhana(" is ");
bhana(factorial(n));
`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Lipi</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A programming language with Nepali-inspired syntax
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/docs">
                  <Button className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Familiar Syntax</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Lipi features a syntax that is intentionally designed to be familiar to speakers of Nepali language,
                  making it easier to learn and use for those with a background in Nepali, Hindi, or other Sanskrit
                  based languages.
                </p>
                <div className="flex flex-col gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <CodeBlock code={codeExample} language="typescript" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to dive in?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive documentation to learn everything about Lipi.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/docs">
                  <Button className="w-full">View Documentation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

