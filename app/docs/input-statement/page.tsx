import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Input Statement | Lipi Programming Language",
  description: "Using the suna statement for input in the Lipi programming language",
}

export default function InputStatementPage() {
  const basicInputCode = `purna age;
bhana("Enter your age: ");
suna(age);
bhana("Your age is: ");
bhana(age);`

  const inputCalculationCode = `purna a;
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
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Input Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>suna</code> statement is used to read a value from the user and store it in a variable.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>suna(variable_name);</code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Usage</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can use <code>suna</code> to read input into a variable:
      </p>
      <div className="my-6">
        <CodeBlock code={basicInputCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Input for Calculations</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can use <code>suna</code> to read input for calculations:
      </p>
      <div className="my-6">
        <CodeBlock code={inputCalculationCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Important Notes</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          The variable must be declared before using it with <code>suna</code>.
        </li>
        <li>The input is automatically converted to the type of the variable.</li>
        <li>It's a good practice to display a prompt before asking for input.</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand the input statement in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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
        <li>
          <a href="/docs/while-statement" className="font-medium text-primary underline underline-offset-4">
            While Statement
          </a>
        </li>
      </ul>
    </div>
  )
}

