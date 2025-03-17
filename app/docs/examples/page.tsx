import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Examples | Lipi Programming Language",
  description: "Example programs in the Lipi programming language",
}

export default function ExamplesPage() {
  const helloWorldCode = `bhana("Namaste, Vishwa!");`

  const calculatorCode = `purna choice;
purna num1;
purna num2;
purna result;

bhana("Simple Calculator");
bhana("1. Addition");
bhana("2. Subtraction");
bhana("3. Multiplication");
bhana("4. Division");

bhana("Enter your choice (1-4): ");
suna(choice);

bhana("Enter first number: ");
suna(num1);

bhana("Enter second number: ");
suna(num2);

yadi(choice == 1) {
  result = num1 + num2;
  bhana("Result: ");
  bhana(result);
}anyatha yadi(choice == 2) {
  result = num1 - num2;
  bhana("Result: ");
  bhana(result);
}anyatha yadi(choice == 3) {
  result = num1 * num2;
  bhana("Result: ");
  bhana(result);
}anyatha yadi(choice == 4) {
  yadi(num2 == 0) {
    bhana("Error: Division by zero");
  }anyatha {
    result = num1 / num2;
    bhana("Result: ");
    bhana(result);
  }
}anyatha {
  bhana("Invalid choice");
}`

  const factorialCode = `kaam purna factorial(purna n) {
  yadi(n <= 1) {
    firta 1;
  }
  firta n * factorial(n - 1);
}

purna num;
purna result;

bhana("Enter a number: ");
suna(num);

yadi(num < 0) {
  bhana("Factorial is not defined for negative numbers");
}anyatha {
  result = factorial(num);
  bhana("Factorial of ");
  bhana(num);
  bhana(" is ");
  bhana(result);
}`

  const primeNumberCode = `purna num;
purna i;
purna isPrime;

bhana("Enter a number: ");
suna(num);

yadi(num <= 1) {
  bhana("Not a prime number");
}anyatha {
  isPrime = thik;
  
  lagi(i = 2; i * i <= num; i = i + 1;) {
    yadi(num % i == 0) {
      isPrime = bethik;
    }
  }
  
  yadi(isPrime) {
    bhana(num);
    bhana(" is a prime number");
  }anyatha {
    bhana(num);
    bhana(" is not a prime number");
  }
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Examples</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This section provides various example programs written in the Lipi programming language to help you understand
        how to use the language features in practice.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Hello, World!</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A simple program that prints "Namaste, Vishwa!" (Hello, World!) to the console.
      </p>
      <div className="my-6">
        <CodeBlock code={helloWorldCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Simple Calculator</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A program that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on
        user input.
      </p>
      <div className="my-6">
        <CodeBlock code={calculatorCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Factorial Calculator</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A program that calculates the factorial of a number using recursion.
      </p>
      <div className="my-6">
        <CodeBlock code={factorialCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Prime Number Checker</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A program that checks whether a number is prime or not.</p>
      <div className="my-6">
        <CodeBlock code={primeNumberCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">More Examples</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        For additional examples and sample programs, please refer to the examples folder in the Lipi repository. The
        examples folder contains various scripts and example programs written in Lipi that demonstrate different
        features and functionalities of the language. You can explore these examples to see how Lipi can be applied in
        real-world scenarios.
      </p>
    </div>
  )
}

