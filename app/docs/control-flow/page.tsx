import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Control Flow | Bhasa Programming Language",
  description: "Conditional statements and loops in the Bhasa programming language",
}

export default function ControlFlowPage() {
  const conditionalCode = `(: Simple if statement :)
yadi (age >= 18) {
  bhana("You are an adult.")
}

(: If-else statement :)
yadi (score >= 60) {
  bhana("You passed!")
} anyatha {
  bhana("You failed.")
}

(: Multiple conditions :)
yadi (score >= 90) {
  bhana("Grade: A")
} anyatha yadi (score >= 80) {
  bhana("Grade: B")
} anyatha yadi (score >= 70) {
  bhana("Grade: C")
} anyatha yadi (score >= 60) {
  bhana("Grade: D")
} anyatha {
  bhana("Grade: F")
}`

  const forLoopCode = `(: Basic for loop :)
lagi (i: purna = 0; i < 5; i = i + 1) {
  bhana(i)
}

(: For loop with existing variable :)
i: purna = 0
lagi (i = 0; i < 5; i = i + 1) {
  bhana(i)
}

(: Nested for loops :)
lagi (i: purna = 0; i < 3; i = i + 1) {
  lagi (j: purna = 0; j < 3; j = j + 1) {
    bhana("i = " + paath(i) + ", j = " + paath(j))
  }
}`

  const whileLoopCode = `(: Basic while loop :)
i: purna = 0
jabasamma (i < 5) {
  bhana(i)
  i = i + 1
}

(: While loop with break :)
i: purna = 0
jabasamma (thik) {
  bhana(i)
  i = i + 1
  yadi (i >= 5) {
    rokau  (: Break out of the loop :)
  }
}

(: While loop with continue :)
i: purna = 0
jabasamma (i < 10) {
  i = i + 1
  yadi (i % 2 == 0) {
    arko  (: Skip to the next iteration :)
  }
  bhana(i)  (: Only prints odd numbers :)
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Control Flow</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This section covers control flow statements in the Bhasa programming language, including conditional statements
        and loops.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Conditional Statements</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Conditional statements allow you to execute different code blocks based on different conditions. Bhasa supports{" "}
        <code>yadi</code> (if) and <code>anyatha</code> (else) statements.
      </p>
      <div className="my-6">
        <CodeBlock code={conditionalCode} language="typescript" />
      </div>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Comparison Operators</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Bhasa supports the following comparison operators:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>==</code> - Equal to
        </li>
        <li>
          <code>!=</code> - Not equal to
        </li>
        <li>
          <code>&lt;</code> - Less than
        </li>
        <li>
          <code>&gt;</code> - Greater than
        </li>
        <li>
          <code>&lt;=</code> - Less than or equal to
        </li>
        <li>
          <code>&gt;=</code> - Greater than or equal to
        </li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Logical Operators</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Bhasa supports the following logical operators:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>&&</code> - Logical AND
        </li>
        <li>
          <code>||</code> - Logical OR
        </li>
        <li>
          <code>!</code> - Logical NOT
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">For Loops</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        For loops allow you to execute a block of code repeatedly. The <code>lagi</code> (for) loop in Bhasa has three
        parts: initialization, condition, and increment.
      </p>
      <div className="my-6">
        <CodeBlock code={forLoopCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">While Loops</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        While loops execute a block of code as long as a condition is true. The <code>jabasamma</code> (while) loop in
        Bhasa checks the condition before each iteration.
      </p>
      <div className="my-6">
        <CodeBlock code={whileLoopCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Break and Continue</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Bhasa provides two special statements for controlling loops:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>rokau</code> (break) - Exits the loop immediately
        </li>
        <li>
          <code>arko</code> (continue) - Skips the rest of the current iteration and moves to the next one
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand control flow in Bhasa, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/functions" className="font-medium text-primary underline underline-offset-4">
            Functions
          </a>
        </li>
        <li>
          <a href="/docs/input-output" className="font-medium text-primary underline underline-offset-4">
            Input/Output
          </a>
        </li>
        <li>
          <a href="/docs/comments" className="font-medium text-primary underline underline-offset-4">
            Comments
          </a>
        </li>
      </ul>
    </div>
  )
}

