import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Identifiers and Literals | Lipi Programming Language",
  description: "Naming conventions and literal values in the Lipi programming language",
}

export default function IdentifiersLiteralsPage() {
  const identifiersCode = `purna count;       :) Valid identifier
purna _count;      :) Valid identifier
purna count123;    :) Valid identifier
purna 123count;    :) Invalid - starts with a number
purna my-var;      :) Invalid - contains hyphen
purna my var;      :) Invalid - contains space
purna if;          :) Invalid - reserved keyword`

  const literalsCode = `purna num;           :) Integer variable declaration
dasa pi;            :) Decimal variable declaration
akshar grade;       :) Character variable declaration
paath name;         :) String variable declaration

num = 42;           :) integer literal
pi = 3.14;         :) decimal literal
grade = 'A';       :) character literal
name = "John";     :) string literal
`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Identifiers and Literals</h1>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Identifiers</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        An identifier is a name for a variable or function. In Lipi, identifiers must follow these rules:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Must start with a letter or underscore</li>
        <li>Can contain letters, numbers, or underscores</li>
        <li>Cannot be a reserved keyword</li>
        <li>Cannot contain spaces or special characters</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Examples of valid and invalid identifiers:</p>
      <div className="my-6">
        <CodeBlock code={identifiersCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Literals</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Literals are fixed values that appear directly in the code. Lipi supports the following types of literals:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Number:</strong> An integer or decimal value (e.g., 42, 3.14)
        </li>
        <li>
          <strong>String:</strong> A sequence of characters enclosed in double quotes (e.g., "Sample text")
        </li>
        <li>
          <strong>Character:</strong> A single character enclosed in single quotes (e.g., 'A')
        </li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Examples of literals:</p>
      <div className="my-6">
        <CodeBlock code={literalsCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand identifiers and literals in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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

