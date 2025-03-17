import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Logical Expressions | Lipi Programming Language",
  description: "Logical expressions and operators in the Lipi programming language",
}

export default function LogicalExpressionsPage() {
  const logicalAndCode = `purna age;
purna income;

age = 25;
income = 50000;

yadi(age >= 18 && income >= 30000) {
  bhana("You are eligible for a loan.");
}anyatha {
  bhana("You are not eligible for a loan.");
}`

  const logicalOrCode = `purna temperature;
temperature = 38;

yadi(temperature <= 0 || temperature >= 30) {
  bhana("Extreme temperature detected!");
}anyatha {
  bhana("Normal temperature.");
}`

  const logicalNotCode = `purna isRaining;
isRaining = thik;

yadi(!isRaining) {
  bhana("It's not raining.");
}anyatha {
  bhana("It's raining.");
}`

  const complexLogicalCode = `purna age;
purna income;
purna creditScore;

age = 25;
income = 50000;
creditScore = 750;

yadi((age >= 18 && income >= 30000) || creditScore >= 700) {
  bhana("You are eligible for a loan.");
}anyatha {
  bhana("You are not eligible for a loan.");
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Logical Expressions
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Logical expressions in Lipi are used to combine or negate conditions, resulting in a boolean value (<code>thik</code> or <code>bethik</code>).
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Syntax
      </h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
      <code>logical_term &#123; ("&amp;&amp;" | "||" | "!" ) logical_term &#125;</code>

      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Logical AND (&amp;&amp;)
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The logical AND operator (<code>&&</code>) returns <code>thik</code> if both operands are <code>thik</code>, otherwise it returns <code>bethik</code>.
      </p>
      <div className="my-6">
        <CodeBlock code={logicalAndCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Logical OR (||)
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The logical OR operator (<code>||</code>) returns <code>thik</code> if at least one of the operands is <code>thik</code>, otherwise it returns <code>bethik</code>.
      </p>
      <div className="my-6">
        <CodeBlock code={logicalOrCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Logical NOT (!)
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The logical NOT operator (<code>!</code>) returns <code>thik</code> if the operand is <code>bethik</code>, and <code>bethik</code> if the operand is <code>thik</code>.
      </p>
      <div className="my-6">
        <CodeBlock code={logicalNotCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Complex Logical Expressions
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can combine multiple logical operators to create complex conditions:
      </p>
      <div className="my-6">
        <CodeBlock code={complexLogicalCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Next Steps
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand logical expressions in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><a href="/docs/comparison" className="font-medium text-primary underline underline-offset-4">Comparison</a></li>
        <li><a href="/docs/modulo-expression" className="font-medium text-primary underline underline-offset-4">Modulo Expression</a></li>
        <li><a href="/docs/examples" className="font-medium text-primary underline underline-offset-4">Examples</a></li>
      </ul>
    </div>
  )
}

