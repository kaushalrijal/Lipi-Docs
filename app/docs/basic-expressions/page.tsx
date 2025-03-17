import { CodeBlock } from "@/components/code-block"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Basic Expressions | Lipi Programming Language",
  description: "Basic expressions and operations in the Lipi programming language",
}

export default function BasicExpressionsPage() {
  const arithmeticCode = `purna a;
purna b;
purna result;

a = 10;
b = 5;

result = a + b;  :) Addition: result = 15
bhana(result);

result = a - b;  :) Subtraction: result = 5
bhana(result);

result = a * b;  :) Multiplication: result = 50
bhana(result);

result = a / b;  :) Division: result = 2
bhana(result);`

  const complexExpressionCode = `purna a;
purna b;
purna c;
purna result;

a = 5;
b = 3;
c = 2;

result = a + b * c;  :) result = 5 + (3 * 2) = 11
bhana(result);

result = (a + b) * c;  :) result = (5 + 3) * 2 = 16
bhana(result);`

  const stringExpressionCode = `paath firstName;
paath lastName;
paath fullName;

firstName = "John";
lastName = "Doe";

fullName = firstName + " " + lastName;  :) Concatenation: fullName = "John Doe"
bhana(fullName);`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Basic Expressions
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Expressions in Lipi are combinations of values, variables, operators, and function calls that evaluate to a value.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Syntax
      </h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>term &#123; (`+` | `-` | `*` | `/` ) term &#125;</code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Arithmetic Operations
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lipi supports the following arithmetic operations:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><code>+</code> - Addition</li>
        <li><code>-</code> - Subtraction</li>
        <li><code>*</code> - Multiplication</li>
        <li><code>/</code> - Division</li>
      </ul>
      <div className="my-6">
        <CodeBlock code={arithmeticCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Complex Expressions
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can combine multiple operations in a single expression. Lipi follows the standard order of operations (PEMDAS):
      </p>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Parentheses</li>
        <li>Exponents (not supported in Lipi)</li>
        <li>Multiplication and Division (from left to right)</li>
        <li>Addition and Subtraction (from left to right)</li>
      </ol>
      <div className="my-6">
        <CodeBlock code={complexExpressionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        String Expressions
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can concatenate strings using the <code>+</code> operator:
      </p>
      <div className="my-6">
        <CodeBlock code={stringExpressionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Next Steps
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand basic expressions in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><a href="/docs/logical-expressions" className="font-medium text-primary underline underline-offset-4">Logical Expressions</a></li>
        <li><a href="/docs/comparison" className="font-medium text-primary underline underline-offset-4">Comparison</a></li>
        <li><a href="/docs/modulo-expression" className="font-medium text-primary underline underline-offset-4">Modulo Expression</a></li>
      </ul>
    </div>
  )
}

