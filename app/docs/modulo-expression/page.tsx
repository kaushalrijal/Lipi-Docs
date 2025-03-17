import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Modulo Expression | Lipi Programming Language",
  description: "Using the modulo operator in the Lipi programming language",
}

export default function ModuloExpressionPage() {
  const basicModuloCode = `purna a;
purna b;
purna result;

a = 10;
b = 3;

result = a % b;  :) result = 1
bhana("10 % 3 = ");
bhana(result);`

  const evenOddCheckCode = `purna num;
num = 7;

yadi(num % 2 == 0) {
  bhana("The number is even.");
}anyatha {
  bhana("The number is odd.");
}`

  const moduloInLoopCode = `purna i;

lagi(i = 1; i <= 10; i = i + 1;) {
  yadi(i % 3 == 0) {
    bhana("Divisible by 3: ");
    bhana(i);
  }
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Modulo Expression</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The modulo operator (<code>%</code>) in Lipi is used to calculate the remainder of a division operation.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Syntax</h2>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>expression % expression</code>
      </pre>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Basic Usage</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The modulo operator returns the remainder when the first operand is divided by the second operand:
      </p>
      <div className="my-6">
        <CodeBlock code={basicModuloCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Checking for Even/Odd Numbers
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A common use of the modulo operator is to check if a number is even or odd:
      </p>
      <div className="my-6">
        <CodeBlock code={evenOddCheckCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Modulo in Loops</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The modulo operator is often used in loops to perform actions at specific intervals:
      </p>
      <div className="my-6">
        <CodeBlock code={moduloInLoopCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand the modulo operator in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/examples" className="font-medium text-primary underline underline-offset-4">
            Examples
          </a>
        </li>
      </ul>
    </div>
  )
}

