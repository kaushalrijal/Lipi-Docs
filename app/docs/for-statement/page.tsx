import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "For Statement | Lipi Programming Language",
  description: "Using the lagi statement for loops in the Lipi programming language",
}

export default function ForStatementPage() {
  const basicForCode = `purna i;

lagi(i = 0; i < 5; i = i + 1;) {
  bhana(i);
}
:) Output: 0 1 2 3 4`

  const forSumCode = `purna i;
purna sum;

sum = 0;
lagi(i = 1; i <= 10; i = i + 1;) {
  sum = sum + i;
}
bhana("Sum of numbers from 1 to 10: ");
bhana(sum);
:) Output: Sum of numbers from 1 to 10: 55`

  const nestedForCode = `purna i;
purna j;

lagi(i = 1; i <= 3; i = i + 1;) {
  lagi(j = 1; j <= 3; j = j + 1;) {
    bhana("i = ");
    bhana(i);
    bhana(", j = ");
    bhana(j);
    bhana("\\n");
  }
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">For Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>lagi</code> statement is used to loop through a range of values, specifying initialization, condition,
        and update.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>
          lagi(initialization; condition; update;) {
            // block of code
          }
        </code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic For Loop</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A simple for loop that iterates from 0 to 4:</p>
      <div className="my-6">
        <CodeBlock code={basicForCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        For Loop for Calculations
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A for loop that calculates the sum of numbers from 1 to 10:
      </p>
      <div className="my-6">
        <CodeBlock code={forSumCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Nested For Loops</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can nest for loops to work with multi-dimensional data:
      </p>
      <div className="my-6">
        <CodeBlock code={nestedForCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Important Notes</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>The variable used in the for loop must be declared before the loop.</li>
        <li>The initialization, condition, and update parts are separated by semicolons.</li>
        <li>The update part must end with a semicolon.</li>
        <li>
          The for loop is equivalent to a while loop with initialization before the loop and update at the end of each
          iteration.
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand for statements in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/function-definition" className="font-medium text-primary underline underline-offset-4">
            Function Definition
          </a>
        </li>
        <li>
          <a href="/docs/return-statement" className="font-medium text-primary underline underline-offset-4">
            Return Statement
          </a>
        </li>
        <li>
          <a href="/docs/basic-expressions" className="font-medium text-primary underline underline-offset-4">
            Basic Expressions
          </a>
        </li>
      </ul>
    </div>
  )
}

