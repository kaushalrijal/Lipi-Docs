import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Variables | Lipi Programming Language",
  description: "Variable declaration and usage in the Lipi programming language",
}

export default function VariablesPage() {
  const variableDeclarationCode = `purna x;       :) Valid
purna x, y, z;  :) Invalid
purna x = 5;    :) Invalid`

  const variableAssignmentCode = `purna age;     :) Declare an integer variable
age = 25;     :) Assign a value to the variable

dasa pi;      :) Declare a decimal variable
pi = 3.14159; :) Assign a value to the variable`

  const variableUsageCode = `purna a;
purna b;
purna sum;

a = 5;
b = 10;
sum = a + b;  :) sum will be 15

bhana(sum);   :) Print the value of sum`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Variables</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You use variables as symbolic names for values in your application. The names of variables, called identifiers,
        must conform to the rules of identifiers.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Variable Declaration</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A variable can be declared in Lipi using the following syntax:
      </p>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>type identifier;</code>
      </pre>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Only one variable can be declared at a time, and each variable must have a unique identifier. Also, values
        cannot be assigned to variables at the time of declaration.
      </p>
      <div className="my-6">
        <CodeBlock code={variableDeclarationCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Variable Assignment</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        After declaring a variable, you can assign a value to it using the assignment operator <code>=</code>.
      </p>
      <div className="my-6">
        <CodeBlock code={variableAssignmentCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Variable Usage</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once a variable is declared and assigned a value, you can use it in expressions, pass it to functions, or print
        its value.
      </p>
      <div className="my-6">
        <CodeBlock code={variableUsageCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Variable Scope</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Variables in Lipi have block scope, which means they are only accessible within the block they are declared in.
        A block is a section of code enclosed in curly braces {}.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand variables in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/print-statement" className="font-medium text-primary underline underline-offset-4">
            Print Statement
          </a>
        </li>
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
      </ul>
    </div>
  )
}

