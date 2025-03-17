import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Input/Output | Bhasa Programming Language",
  description: "Using bhana() for output and suna() for input in the Bhasa programming language",
}

export default function InputOutputPage() {
  const outputCode = `(: Basic output :)
bhana("Hello, World!")

(: Output with variables :)
name: paath = "John"
age: purna = 30
bhana("Name: " + name + ", Age: " + paath(age))

(: Output with formatting :)
a: purna = 10
b: purna = 20
sum: purna = a + b
bhana("{a} + {b} = {sum}")

(: Multiple outputs :)
bhana("Line 1")
bhana("Line 2")
bhana("Line 3")`

  const inputCode = `(: Basic input :)
bhana("Enter your name: ")
name: paath = suna()
bhana("Hello, " + name + "!")

(: Input with type conversion :)
bhana("Enter your age: ")
ageStr: paath = suna()
age: purna = purna(ageStr)
bhana("In 10 years, you will be " + paath(age + 10) + " years old.")

(: Input for calculations :)
bhana("Enter the first number: ")
num1: purna = purna(suna())
bhana("Enter the second number: ")
num2: purna = purna(suna())
sum: purna = num1 + num2
bhana("The sum is: " + paath(sum))`

  const fileIOCode = `(: Writing to a file :)
file: paath = "data.txt"
content: paath = "This is some text to write to a file."
lekhFile(file, content)
bhana("Data written to " + file)

(: Reading from a file :)
file: paath = "data.txt"
content: paath = padhaFile(file)
bhana("File content: " + content)

(: Appending to a file :)
file: paath = "data.txt"
newContent: paath = "\\nThis is a new line appended to the file."
jodaFile(file, newContent)
bhana("Data appended to " + file)`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Input/Output</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This section covers input and output operations in the Bhasa programming language, including console I/O and
        file I/O.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Console Output</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In Bhasa, you can output text to the console using the <code>bhana</code> (print) function. This function takes
        a string as an argument and prints it to the console.
      </p>
      <div className="my-6">
        <CodeBlock code={outputCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Console Input</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To read input from the console, you can use the <code>suna</code> (input) function. This function reads a line
        of text from the console and returns it as a string.
      </p>
      <div className="my-6">
        <CodeBlock code={inputCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">File Input/Output</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Bhasa provides functions for reading from and writing to files:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>lekhFile(filename, content)</code> - Writes content to a file
        </li>
        <li>
          <code>padhaFile(filename)</code> - Reads content from a file
        </li>
        <li>
          <code>jodaFile(filename, content)</code> - Appends content to a file
        </li>
      </ul>
      <div className="my-6">
        <CodeBlock code={fileIOCode} language="typescript" />
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">String Formatting</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Bhasa supports string formatting using curly braces {} to insert variable values into strings. This makes it
        easier to create formatted output.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can also concatenate strings using the + operator, but string formatting is often more readable for complex
        output.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand input and output in Bhasa, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/comments" className="font-medium text-primary underline underline-offset-4">
            Comments
          </a>
        </li>
        <li>
          <a href="/docs/examples" className="font-medium text-primary underline underline-offset-4">
            Code Examples
          </a>
        </li>
        <li>
          <a href="/docs/advanced" className="font-medium text-primary underline underline-offset-4">
            Advanced Topics
          </a>
        </li>
      </ul>
    </div>
  )
}

