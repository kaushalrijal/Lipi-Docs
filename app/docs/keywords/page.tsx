import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Keywords | Lipi Programming Language",
  description: "Reserved keywords in the Lipi programming language",
}

export default function KeywordsPage() {
  const keywords = [
    { keyword: "bhana", description: "Used for printing output to the console" },
    { keyword: "suna", description: "Used for reading input from the user" },
    { keyword: "purna", description: "Integer data type" },
    { keyword: "dasa", description: "Decimal data type" },
    { keyword: "akshar", description: "Character data type" },
    { keyword: "paath", description: "String data type" },
    { keyword: "khali", description: "Void data type (for functions)" },
    { keyword: "yadi", description: "Used for conditional statements (if)" },
    { keyword: "anyatha", description: "Used for else condition in if statements" },
    { keyword: "jabasamma", description: "Used for while loops" },
    { keyword: "lagi", description: "Used for for loops" },
    { keyword: "kaam", description: "Used for function definitions" },
    { keyword: "firta", description: "Used for returning values from functions" },
    { keyword: "thik", description: "Boolean true value" },
    { keyword: "bethik", description: "Boolean false value" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Keywords</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The following keywords are reserved in Lipi and cannot be used as identifiers:
      </p>

      <div className="my-6 overflow-hidden rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Keyword</th>
              <th className="px-4 py-2 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                <td className="px-4 py-2 font-mono text-sm">{item.keyword}</td>
                <td className="px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Usage</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        These keywords have special meanings in Lipi and are used to perform specific operations or define specific
        constructs. You cannot use these keywords as variable names, function names, or any other identifiers in your
        code.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Next Steps</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Now that you understand the keywords in Lipi, you can learn more about:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a href="/docs/identifiers-literals" className="font-medium text-primary underline underline-offset-4">
            Identifiers and Literals
          </a>
        </li>
        <li>
          <a href="/docs/data-types" className="font-medium text-primary underline underline-offset-4">
            Data Types
          </a>
        </li>
        <li>
          <a href="/docs/variables" className="font-medium text-primary underline underline-offset-4">
            Variables
          </a>
        </li>
      </ul>
    </div>
  )
}

