import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Comparison | Lipi Programming Language",
  description: "Comparison operators in the Lipi programming language",
}

export default function ComparisonPage() {
  const equalityCode = `purna a;
purna b;

a = 5;
b = 5;

yadi(a == b) {
  bhana("a is equal to b");
}

a = 10;
b = 5;

yadi(a != b) {
  bhana("a is not equal to b");
}`

  const relationalCode = `purna a;
purna b;

a = 10;
b = 5;

yadi(a > b) {
  bhana("a is greater than b");
}

yadi(a >= b) {
  bhana("a is greater than or equal to b");
}

a = 5;
b = 10;

yadi(a < b) {
  bhana("a is less than b");
}

yadi(a <= b) {
  bhana("a is less than or equal to b");
}`

  const comparisonInLoopsCode = `purna i;

lagi(i = 1; i <= 5; i = i + 1;) {
  bhana(i);
}

purna j;
j = 1;

jabasamma(j <= 5) {
  bhana(j);
  j = j + 1;
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Comparison
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Comparison operators in Lipi are used to compare values and return a boolean result (<code>thik</code> or <code>bethik</code>).
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Syntax
      </h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>expression (== | != | &lt; | &lt;= | &gt; | &gt;=) expression</code>  
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Equality Operators
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lipi supports the following equality operators:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><code>==</code> - Equal to</li>
        <li><code>!=</code> - Not equal to</li>
      </ul>
      <div className="my-6">
        <CodeBlock code={equalityCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Relational Operators
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lipi supports the following relational operators:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><code>&lt;</code> - Less than</li>
        <li><code>&gt;</code> - Greater than</li>
        <li><code>&lt;=</code> - Less than or equal to</li>
        <li><code>&gt;=</code> - Greater than or equal to</li>
      </ul>
      <div className="my-6">
        <CodeBlock code={relationalCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Comparison in Loops
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Comparison operators are commonly used in loop conditions:
      </p>
      <div className="my-6">
        <CodeBlock code={comparisonInLoopsCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Next Steps
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand comparison operators in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><a href="/docs/modulo-expression" className="font-medium text-primary underline underline-offset-4">Modulo Expression</a></li>
        <li><a href="/docs/examples" className="font-medium text-primary underline underline-offset-4">Examples</a></li>
      </ul>
    </div>
  )
}

