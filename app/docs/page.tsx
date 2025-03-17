import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Preface | Lipi Programming Language",
  description: "An overview of the Lipi programming language",
}

export default function PrefacePage() {
  const helloWorldCode = `bhana("Namaste, Vishwa!");`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Preface</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In Lipi, the syntax is intentionally designed to be familiar to speakers of Nepali language, making it easier to
        learn and use for those with a background in the Nepali, Hindi, or other Sanskrit based languages. It provides a
        straightforward set of constructs for defining variables, creating functions, and managing control flow, all
        while using Nepali keywords and expressions.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Prerequisites</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This guide assumes you have the following basic background:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>A General Understanding of Programming Concepts:</strong> Familiarity with fundamental programming
          concepts such as variables, control structures, and functions will be beneficial.
        </li>
        <li>
          <strong>Basic Knowledge of Nepali Language:</strong> Since Lipi uses Nepali-inspired syntax, having a general
          understanding of Nepali grammar and expressions will help in grasping the language's unique constructs.
        </li>
        <li>
          <strong>Some Experience with Programming:</strong> If you are new to programming, it's advisable to explore
          introductory programming tutorials or resources. While Lipi is designed to be accessible, having a
          foundational understanding of programming principles will make learning the language smoother.
        </li>
      </ul>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If you're new to programming or want to get a quick start, consider exploring introductory programming resources
        and tutorials. This will help you build a solid foundation before diving into Lipi's specific features and
        syntax.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Hello, World!</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Here's a simple "Hello, World!" program in Lipi:</p>
      <div className="my-6">
        <CodeBlock code={helloWorldCode} language="typescript" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This program prints "Namaste, Vishwa!" (Hello, World!) to the console using the <code>bhana</code> function.
        Note that Lipi doesn't require a main function - you can write code directly at the top level.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">To get started with Lipi, explore the following sections:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/program-structure" className="font-medium text-primary underline underline-offset-4">
            Program Structure
          </a>
        </li>
        <li>
          <a href="/docs/comments" className="font-medium text-primary underline underline-offset-4">
            Comments
          </a>
        </li>
        <li>
          <a href="/docs/data-types" className="font-medium text-primary underline underline-offset-4">
            Data Types
          </a>
        </li>
        <li>
          <a href="/docs/variables" className="font-medium text-primary underline underline-offset-4">
            Variables
          </a>
        </li>
        <li>
          <a href="/docs/print-statement" className="font-medium text-primary underline underline-offset-4">
            Print Statement
          </a>
        </li>
      </ul>
    </div>
  )
}

