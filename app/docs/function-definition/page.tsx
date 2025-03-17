import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Function Definition | Lipi Programming Language",
  description: "Defining functions using kaam in the Lipi programming language",
}

export default function FunctionDefinitionPage() {
  const basicFunctionCode = `kaam khali greet() {
  bhana("Hello, World!");
}

greet();  :) Call the greet function
`

  const functionWithParamsCode = `kaam khali greet(paath name) {
  bhana("Hello, ");
  bhana(name);
  bhana("!");
}

greet("John");  :) Output: Hello, John!
`

  const functionWithReturnCode = `kaam purna add(purna a, purna b) {
  firta a + b;
}

purna result;
result = add(5, 3);  :) result = 8
bhana("The sum is: ");
bhana(result);
`

  const recursiveFunctionCode = `kaam purna factorial(purna n) {
  yadi(n <= 1) {
    firta 1;
  }
  firta n * factorial(n - 1);
}

purna result;
result = factorial(5);  :) result = 120
bhana("Factorial of 5 is: ");
bhana(result);
`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Function Definition</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>kaam</code> keyword is used to define a new function in Lipi.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>
          kaam return_type function_name(parameter_list) {
            // block of code
          }
        </code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Function</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A simple function that prints a greeting:</p>
      <div className="my-6">
        <CodeBlock code={basicFunctionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Function with Parameters
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A function that takes parameters:</p>
      <div className="my-6">
        <CodeBlock code={functionWithParamsCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Function with Return Value
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A function that returns a value:</p>
      <div className="my-6">
        <CodeBlock code={functionWithReturnCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Recursive Function</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A function that calls itself (recursion):</p>
      <div className="my-6">
        <CodeBlock code={recursiveFunctionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Important Notes</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          The return type of a function can be <code>purna</code>, <code>dasa</code>, <code>akshar</code>,{" "}
          <code>paath</code>, or <code>khali</code>.
        </li>
        <li>
          If a function doesn't return a value, its return type should be <code>khali</code>.
        </li>
        <li>Parameters are defined with a type and a name, separated by a space.</li>
        <li>Multiple parameters are separated by commas.</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand function definitions in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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
        <li>
          <a href="/docs/logical-expressions" className="font-medium text-primary underline underline-offset-4">
            Logical Expressions
          </a>
        </li>
      </ul>
    </div>
  )
}

