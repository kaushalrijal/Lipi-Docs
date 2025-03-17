import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "If Statement | Lipi Programming Language",
  description: "Conditional statements using yadi and anyatha in the Lipi programming language",
}

export default function IfStatementPage() {
  const basicIfCode = `purna age;
age = 25;

yadi(age >= 18) {
  bhana("You are an adult.");
}`

  const ifElseCode = `purna age;
age = 15;

yadi(age >= 18) {
  bhana("You are an adult.");
}anyatha {
  bhana("You are a minor.");
}`

  const nestedIfCode = `purna score;
score = 85;

yadi(score >= 90) {
  bhana("Grade: A");
}anyatha yadi(score >= 80) {
  bhana("Grade: B");
}anyatha yadi(score >= 70) {
  bhana("Grade: C");
}anyatha yadi(score >= 60) {
  bhana("Grade: D");
}anyatha {
  bhana("Grade: F");
}`

  const complexConditionCode = `purna age;
purna income;

age = 25;
income = 50000;

yadi(age >= 18 && income >= 30000) {
  bhana("You are eligible for a loan.");
}anyatha {
  bhana("You are not eligible for a loan.");
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">If Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>yadi</code> statement is used to execute a block of code conditionally. You can include an{" "}
        <code>anyatha</code> block for the else condition.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>
          yadi(expression) {
            // if block of code
          }anyatha {
            // else block of code
          }
        </code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic If Statement</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A simple if statement without an else block:</p>
      <div className="my-6">
        <CodeBlock code={basicIfCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">If-Else Statement</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">An if statement with an else block:</p>
      <div className="my-6">
        <CodeBlock code={ifElseCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Nested If Statements</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can chain multiple if-else statements for more complex conditions:
      </p>
      <div className="my-6">
        <CodeBlock code={nestedIfCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Complex Conditions</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can use logical operators to create complex conditions:
      </p>
      <div className="my-6">
        <CodeBlock code={complexConditionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand if statements in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/while-statement" className="font-medium text-primary underline underline-offset-4">
            While Statement
          </a>
        </li>
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
      </ul>
    </div>
  )
}

