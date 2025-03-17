import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Comments | Lipi Programming Language",
  description: "Single-line and multi-line comments in the Lipi programming language",
}

export default function CommentsPage() {
  const singleLineCode = `:) This is a single-line comment`

  const multiLineCode = `(: This is a
multiline
comment :)`

  const exampleCode = `:) A program to demonstrate comments
(: Comments are great.
I love comments. You love comments.
Everyone loves comments. :)

bhana("Hello, World!"); :) This prints a greeting
`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Comments</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Comments are annotations in your code that are ignored by the compiler or interpreter. They are used for
        documentation, to explain, clarify, or temporarily disable parts of the code without affecting its execution.
        Comments are essential for documenting your code and making it easier for others (or yourself) to understand its
        purpose and functionality.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Single Line Comments</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Single-line comments in Lipi start with <code>:)</code> and continue until the end of the line.
      </p>
      <div className="my-6">
        <CodeBlock code={singleLineCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Multi-Line Comments</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Multi-line comments in Lipi start with <code>(:)</code> and end with <code>:)</code>. They can span multiple
        lines and are useful for longer explanations or temporarily disabling blocks of code.
      </p>
      <div className="my-6">
        <CodeBlock code={multiLineCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Example</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Here's an example showing both single-line and multi-line comments in a Lipi program:
      </p>
      <div className="my-6">
        <CodeBlock code={exampleCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Best Practices</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Here are some best practices for using comments in your Lipi code:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          Use comments to explain why you're doing something, not what you're doing (the code itself should be clear
          enough to explain what it does)
        </li>
        <li>Keep comments up-to-date with the code</li>
        <li>Use single-line comments for brief explanations</li>
        <li>Use multi-line comments for more detailed explanations or documentation</li>
        <li>Document functions, their parameters, and return values</li>
        <li>Avoid excessive commenting that can make the code harder to read</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand comments in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/keywords" className="font-medium text-primary underline underline-offset-4">
            Keywords
          </a>
        </li>
        <li>
          <a href="/docs/identifiers-literals" className="font-medium text-primary underline underline-offset-4">
            Identifiers and Literals
          </a>
        </li>
        <li>
          <a href="/docs/data-types" className="font-medium text-primary underline underline-offset-4">
            Data Types
          </a>
        </li>
      </ul>
    </div>
  )
}

