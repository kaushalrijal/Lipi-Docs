import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "While Statement | Lipi Programming Language",
  description: "Using the jabasamma statement for loops in the Lipi programming language",
}

export default function WhileStatementPage() {
  const basicWhileCode = `purna i;
i = 1;

jabasamma(i <= 5) {
  bhana(i);
  i = i + 1;
}
:) Output: 1 2 3 4 5`

  const whileConditionCode = `purna sum;
purna num;

sum = 0;
num = 1;

jabasamma(sum < 100) {
  sum = sum + num;
  num = num + 1;
  bhana("Sum: ");
  bhana(sum);
}`

  const infiniteLoopCode = `purna i;
i = 1;

jabasamma(thik) {
  bhana(i);
  i = i + 1;
  
  yadi(i > 10) {
    :) Exit the loop when i > 10
    :) (Note: Lipi doesn't have a break statement in this documentation)
  }
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">While Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>jabasamma</code> statement is used to repeat a block of code while a condition is true.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>
          jabasamma(expression) {
            // block of code
          }
        </code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic While Loop</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A simple while loop that counts from 1 to 5:</p>
      <div className="my-6">
        <CodeBlock code={basicWhileCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        While Loop with Condition
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A while loop that continues until a condition is met:</p>
      <div className="my-6">
        <CodeBlock code={whileConditionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Infinite Loop</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can create an infinite loop using <code>thik</code> as the condition. Be careful with infinite loops, as
        they can cause your program to hang.
      </p>
      <div className="my-6">
        <CodeBlock code={infiniteLoopCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Important Notes</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>The condition is checked before each iteration of the loop.</li>
        <li>If the condition is initially false, the loop body will not execute at all.</li>
        <li>Make sure to update the condition inside the loop to avoid infinite loops.</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand while statements in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/for-statement" className="font-medium text-primary underline underline-offset-4">
            For Statement
          </a>
        </li>
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
      </ul>
    </div>
  )
}

