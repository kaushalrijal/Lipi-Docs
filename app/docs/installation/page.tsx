import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Installation & Setup | Bhasa Programming Language",
  description: "How to install the Bhasa compiler/interpreter and set up your development environment",
}

export default function InstallationPage() {
  const installCode = `# Linux/macOS
curl -sSL https://bhasa-lang.org/install.sh | bash

# Windows
iwr -useb https://bhasa-lang.org/install.ps1 | iex`

  const verifyCode = `bhasa --version`

  const helloWorldCode = `
bhana("Namaste, Sansar!")
`

  const runCode = `bhasa run hello.bhs`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Installation & Setup</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This guide will help you install the Bhasa compiler and set up your development environment.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">System Requirements</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Bhasa is supported on the following platforms:</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Windows 10 or later</li>
        <li>macOS 10.15 or later</li>
        <li>Linux (most major distributions)</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Installing Bhasa</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">You can install Bhasa using the following commands:</p>
      <div className="my-6">
        <CodeBlock code={installCode} language="bash" />
      </div>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Verifying the Installation</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To verify that Bhasa is installed correctly, run the following command:
      </p>
      <div className="my-6">
        <CodeBlock code={verifyCode} language="bash" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This should display the version of Bhasa that you have installed.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Setting Up Your Development Environment
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To get started with Bhasa development, you'll need a text editor or IDE. Here are some recommended options:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Visual Studio Code with the Bhasa extension</li>
        <li>IntelliJ IDEA with the Bhasa plugin</li>
        <li>Sublime Text with Bhasa syntax highlighting</li>
        <li>Any text editor of your choice</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Creating Your First Bhasa Program</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Let's create a simple "Hello, World!" program to test your installation:
      </p>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          Create a new file named <code>hello.bhs</code>
        </li>
        <li>Add the following code to the file:</li>
      </ol>
      <div className="my-6">
        <CodeBlock code={helloWorldCode} language="typescript" />
      </div>
      <ol start={3} className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Save the file and run it using the Bhasa compiler:</li>
      </ol>
      <div className="my-6">
        <CodeBlock code={runCode} language="bash" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If everything is set up correctly, you should see "Namaste, Vishwa!" printed to the console.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you have Bhasa installed and your development environment set up, you can start learning the language.
        Check out the following sections to learn more about Bhasa:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/syntax" className="font-medium text-primary underline underline-offset-4">
            Basic Syntax
          </a>
        </li>
        <li>
          <a href="/docs/variables" className="font-medium text-primary underline underline-offset-4">
            Variables & Data Types
          </a>
        </li>
        <li>
          <a href="/docs/control-flow" className="font-medium text-primary underline underline-offset-4">
            Control Flow
          </a>
        </li>
      </ul>
    </div>
  )
}

