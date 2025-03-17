import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Assignment Statement | Lipi Programming Language",
  description: "Assignment statements in the Lipi programming language",
}

export default function AssignmentStatementPage() {
  const basicAssignmentCode = `purna age;
age = 25;  :) Assigns the value 25 to the variable age

dasa pi;
pi = 3.14159;  :) Assigns the value 3.14159 to the variable pi

akshar grade;
grade = 'A';  :) Assigns the character 'A' to the variable grade

paath name;
name = "John";  :) Assigns the string "John" to the variable name`

  const expressionAssignmentCode = `purna a;
purna b;
purna sum;

a = 5;
b = 10;
sum = a + b;  :) Assigns the result of a + b (15) to the variable sum

purna x;
x = sum * 2;  :) Assigns the result of sum * 2 (30) to the variable x`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Assignment Statement</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        An assignment statement is used to assign a value to a variable. In Lipi, you can assign a value to an existing
        variable, but you cannot assign a value at the time of declaration.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>variable_name = expression;</code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Assignment</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">You can assign a literal value to a variable:</p>
      <div className="my-6">
        <CodeBlock code={basicAssignmentCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Assignment with Expressions
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can also assign the result of an expression to a variable:
      </p>
      <div className="my-6">
        <CodeBlock code={expressionAssignmentCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Important Notes</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>The variable must be declared before it can be assigned a value.</li>
        <li>The type of the value being assigned must match the type of the variable.</li>
        <li>You cannot assign a value at the time of declaration.</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand assignment statements in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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
        <li>
          <a href="/docs/for-statement" className="font-medium text-primary underline underline-offset-4">
            For Statement
          </a>
        </li>
      </ul>
    </div>
  )
}

