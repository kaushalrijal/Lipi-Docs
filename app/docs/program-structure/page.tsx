import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Program Structure | Lipi Programming Language",
  description: "Basic structure of Lipi programs",
}

export default function ProgramStructurePage() {
  const programStructureCode = `statement1;
statement2;
statement3;`

  const fullProgramCode = `(: A simple program to calculate the sum of two numbers :)
purna a;
purna b;
purna sum;

bhana("Enter first number: ");
suna(a);

bhana("Enter second number: ");
suna(b);

sum = a + b;

bhana("The sum is: ");
bhana(sum);`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Program Structure</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A program in Lipi is a sequence of statements, each ending with a semicolon <code>;</code>.
      </p>
      <div className="my-6">
        <CodeBlock code={programStructureCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Structure</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Every Lipi program consists of a series of statements. Each statement must end with a semicolon, which tells the
        compiler that the statement is complete. Unlike many other languages, Lipi doesn't require a main function - you
        can write code directly at the top level.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Statements can be:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Variable declarations</li>
        <li>Assignment statements</li>
        <li>Function calls</li>
        <li>Control flow statements (if, while, for)</li>
        <li>Function definitions</li>
        <li>Return statements</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Complete Program Example
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Here's an example of a complete Lipi program that calculates the sum of two numbers:
      </p>
      <div className="my-6">
        <CodeBlock code={fullProgramCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand the basic structure of a Lipi program, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/comments" className="font-medium text-primary underline underline-offset-4">
            Comments
          </a>
        </li>
        <li>
          <a href="/docs/keywords" className="font-medium text-primary underline underline-offset-4">
            Keywords
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
      </ul>
    </div>
  )
}

