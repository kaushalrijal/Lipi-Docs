import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Return Statement | Lipi Programming Language",
  description: "Using the firta statement to return values from functions in the Lipi programming language",
}

export default function ReturnStatementPage() {
  const basicReturnCode = `kaam purna add(purna a, purna b) {
  firta a + b;
}

purna result;
result = add(5, 3);  :) result = 8
bhana(result);
`

  const conditionalReturnCode = `kaam purna max(purna a, purna b) {
  yadi(a > b) {
    firta a;
  }anyatha {
    firta b;
  }
}

purna result;
result = max(10, 5);  :) result = 10
bhana("The maximum is: ");
bhana(result);
`

  const earlyReturnCode = `kaam purna factorial(purna n) {
  yadi(n < 0) {
    bhana("Error: Factorial is not defined for negative numbers");
    firta -1;  :) Early return for error case
  }
  
  yadi(n <= 1) {
    firta 1;
  }
  
  firta n * factorial(n - 1);
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Return Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>firta</code> statement is used to return a value from a function.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>firta expression;</code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Return</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A simple function that returns the sum of two numbers:</p>
      <div className="my-6">
        <CodeBlock code={basicReturnCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Conditional Return</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A function that returns different values based on a condition:
      </p>
      <div className="my-6">
        <CodeBlock code={conditionalReturnCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Early Return</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A function that returns early in certain cases:</p>
      <div className="my-6">
        <CodeBlock code={earlyReturnCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Important Notes</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          The <code>firta</code> statement immediately exits the function and returns the specified value.
        </li>
        <li>The type of the returned value must match the return type specified in the function definition.</li>
        <li>
          A function with a return type of <code>khali</code> should not use the <code>firta</code> statement with a
          value.
        </li>
        <li>
          If a function has a return type other than <code>khali</code>, it must have at least one <code>firta</code>{" "}
          statement.
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand return statements in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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
        <li>
          <a href="/docs/comparison" className="font-medium text-primary underline underline-offset-4">
            Comparison
          </a>
        </li>
      </ul>
    </div>
  )
}

