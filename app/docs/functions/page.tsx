import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
  title: "Functions | Bhasa Programming Language",
  description:
    "Defining and calling functions in the Bhasa programming language",
};

export default function FunctionsPage() {
  const functionDefinitionCode = `(: Function with no parameters and no return value :)
karyakram sayHello() {
  bhana("Hello, World!")
}

(: Function with parameters and return value :)
karyakram add(a: purna, b: purna) -> purna {
  pharkau a + b
}

(: Function with multiple parameters and return value :)
karyakram calculateArea(length: dasa, width: dasa) -> dasa {
  pharkau length * width
}`;

  const functionCallCode = `(: Calling a function with no parameters :)
sayHello()  (: Prints "Hello, World!" :)

(: Calling a function with parameters :)
sum: purna = add(5, 3)  (: sum = 8 :)

(: Calling a function and using the result in an expression :)
area: dasa = calculateArea(4.5, 2.5)  (: area = 11.25 :)
bhana("The area is: " + paath(area))`;

  const recursionCode = `(: Recursive function to calculate factorial :)
karyakram factorial(n: purna) -> purna {
  yadi (n <= 1) {
    pharkau 1
  }
  pharkau n * factorial(n - 1)
}

(: Calling the recursive function :)
result: purna = factorial(5)  (: result = 120 :)
bhana("Factorial of 5 is: " + paath(result))`;

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Functions
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This section covers functions in the Bhasa programming language,
        including defining and calling functions, parameters, return values, and
        recursion.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Function Definition
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In Bhasa, functions are defined using the <code>karyakram</code>{" "}
        keyword, followed by the function name, parameters in parentheses, an
        optional return type, and a block of code enclosed in curly braces.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The syntax for defining a function is:
      </p>
      <pre className="my-6 rounded-lg bg-muted p-4">
        <code>
          karyakram functionName(param1: type1, param2: type2, ...) -&gt;
          returnType &#123; (: Function body :) pharkau value; &#125;
        </code>
      </pre>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Here are some examples of function definitions:
      </p>
      <div className="my-6">
        <CodeBlock code={functionDefinitionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Function Call
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To call a function in Bhasa, you use the function name followed by
        parentheses containing the arguments (if any).
      </p>
      <div className="my-6">
        <CodeBlock code={functionCallCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Parameters and Arguments
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Parameters are the variables listed in the function definition, while
        arguments are the values passed to the function when it is called.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In Bhasa, parameters are defined with a name and a type, separated by a
        colon. Multiple parameters are separated by commas.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Return Values
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Functions in Bhasa can return a value using the <code>pharkau</code>{" "}
        (return) statement. The return type of the function is specified after
        the parameter list, preceded by an arrow (<code>-&gt;</code>).
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If a function does not return a value, the return type is omitted.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Recursion
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Recursion is a technique where a function calls itself. Bhasa supports
        recursive functions, which can be useful for solving problems that can
        be broken down into smaller, similar subproblems.
      </p>
      <div className="my-6">
        <CodeBlock code={recursionCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Next Steps
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand functions in Bhasa, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a
            href="/docs/input-output"
            className="font-medium text-primary underline underline-offset-4"
          >
            Input/Output
          </a>
        </li>
        <li>
          <a
            href="/docs/comments"
            className="font-medium text-primary underline underline-offset-4"
          >
            Comments
          </a>
        </li>
        <li>
          <a
            href="/docs/examples"
            className="font-medium text-primary underline underline-offset-4"
          >
            Code Examples
          </a>
        </li>
      </ul>
    </div>
  );
}
