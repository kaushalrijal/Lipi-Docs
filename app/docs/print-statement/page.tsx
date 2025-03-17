import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Print Statement | Lipi Programming Language",
  description: "Using the bhana statement for output in the Lipi programming language",
}

export default function PrintStatementPage() {
  const basicPrintCode = `bhana("Hello, World!");`

  const printExpressionCode = `bhana(5 + 3);  :) Output: 8`

  const printVariableCode = `purna age;
age = 25;
bhana("Age: ");
bhana(age);  :) Output: Age: 25`

  const printCombinedCode = `purna a;
purna b;
purna sum;

a = 5;
b = 10;
sum = a + b;

bhana("The sum of ");
bhana(a);
bhana(" and ");
bhana(b);
bhana(" is ");
bhana(sum);  :) Output: The sum of 5 and 10 is 15`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Print Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>bhana</code> statement is used to print a value or expression to the output.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>bhana(expression);</code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Usage</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can use <code>bhana</code> to print a string literal:
      </p>
      <div className="my-6">
        <CodeBlock code={basicPrintCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Printing Expressions</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can also use <code>bhana</code> to print the result of an expression:
      </p>
      <div className="my-6">
        <CodeBlock code={printExpressionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Printing Variables</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">You can print the value of a variable:</p>
      <div className="my-6">
        <CodeBlock code={printVariableCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Combining Multiple Prints
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can use multiple <code>bhana</code> statements to build more complex output:
      </p>
      <div className="my-6">
        <CodeBlock code={printCombinedCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand the print statement in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/input-statement" className="font-medium text-primary underline underline-offset-4">
            Input Statement
          </a>
        </li>
        <li>
          <a href="/docs/assignment-statement" className="font-medium text-primary underline underline-offset-4">
            Assignment Statement
          </a>
        </li>
        <li>
          <a href="/docs/if-statement" className="font-medium text-primary underline underline-offset-4">
            If Statement
          </a>
        </li>
      </ul>
    </div>
  )
}

