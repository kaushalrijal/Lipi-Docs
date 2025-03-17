import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Data Types | Lipi Programming Language",
  description: "Data types in the Lipi programming language",
}

export default function DataTypesPage() {
  const dataTypesCode = `purna count;    :) Integer
dasa price;     :) Decimal
akshar grade;   :) Character
paath name;     :) String
khali nothing;  :) Invalid, khali is only for functions`

  const examplesCode = `purna age;       :) Declare an integer variable
age = 25;       :) Assign an integer value

dasa pi;        :) Declare a decimal variable
pi = 3.14159;   :) Assign a decimal value

akshar grade;   :) Declare a character variable
grade = 'A';    :) Assign a character value

paath name;     :) Declare a string variable
name = "John";  :) Assign a string value`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Data Types</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lipi supports several primitive data types for storing different kinds of values.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Data Types</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Lipi provides the following basic data types:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>purna</code>: Integer (whole numbers)
        </li>
        <li>
          <code>dasa</code>: Decimal (floating-point numbers)
        </li>
        <li>
          <code>akshar</code>: Character (single character)
        </li>
        <li>
          <code>paath</code>: String (text)
        </li>
        <li>
          <code>khali</code>: Void (only for functions)
        </li>
      </ul>
      <div className="my-6">
        <CodeBlock code={dataTypesCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Examples</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Here are examples of declaring and using variables of different data types:
      </p>
      <div className="my-6">
        <CodeBlock code={examplesCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Boolean Values</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lipi uses <code>thik</code> and <code>bethik</code> as boolean values for true and false, respectively. These
        are typically used in conditional expressions.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand data types in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/variables" className="font-medium text-primary underline underline-offset-4">
            Variables
          </a>
        </li>
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
      </ul>
    </div>
  )
}

