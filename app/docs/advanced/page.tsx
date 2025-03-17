import type { Metadata } from "next"

import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Advanced Topics | Bhasa Programming Language",
  description:
    "Advanced topics in the Bhasa programming language, including symbol tables, parsing, and compilation details",
}

export default function AdvancedPage() {
  const symbolTableCode = `(: Symbol Table Structure :)
struct SymbolTable {
  entries: Map<paath, SymbolEntry>
  parent: SymbolTable?
}

struct SymbolEntry {
  name: paath
  type: Type
  kind: SymbolKind
  scope: Scope
  value: any?
}

enum SymbolKind {
  VARIABLE,
  FUNCTION,
  PARAMETER,
  TYPE
}

enum Scope {
  GLOBAL,
  LOCAL,
  PARAMETER
}`

  const parsingCode = `(: Lexical Analysis (Tokenization) :)
karyakram tokenize(source: paath) -> List<Token> {
  tokens: List<Token> = []
  (: ... tokenization logic ... :)
  pharkau tokens
}

(: Syntax Analysis (Parsing) :)
karyakram parse(tokens: List<Token>) -> AST {
  ast: AST = new AST()
  (: ... parsing logic ... :)
  pharkau ast
}

(: Semantic Analysis :)
karyakram analyze(ast: AST) -> SymbolTable {
  symbolTable: SymbolTable = new SymbolTable()
  (: ... semantic analysis logic ... :)
  pharkau symbolTable
}`

  const compilationCode = `(: Compilation Process :)
karyakram compile(source: paath) -> ByteCode {
  (: 1. Lexical Analysis :)
  tokens: List<Token> = tokenize(source)
  
  (: 2. Syntax Analysis :)
  ast: AST = parse(tokens)
  
  (: 3. Semantic Analysis :)
  symbolTable: SymbolTable = analyze(ast)
  
  (: 4. Intermediate Code Generation :)
  ir: IR = generateIR(ast, symbolTable)
  
  (: 5. Optimization :)
  optimizedIR: IR = optimize(ir)
  
  (: 6. Code Generation :)
  byteCode: ByteCode = generateCode(optimizedIR)
  
  pharkau byteCode
}`

  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Advanced Topics</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This section covers advanced topics in the Bhasa programming language, including symbol tables, parsing, and
        compilation details.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Symbol Tables</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A symbol table is a data structure used by the compiler to keep track of the semantics of variables, functions,
        and other identifiers. It stores information such as the name, type, scope, and other attributes of each
        identifier.
      </p>
      <div className="my-6">
        <CodeBlock code={symbolTableCode} language="typescript" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The symbol table is used during the semantic analysis phase of compilation to ensure that identifiers are used
        correctly and to resolve references to identifiers.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Parsing</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Parsing is the process of analyzing a string of symbols according to the rules of a formal grammar. In the
        context of programming languages, parsing involves converting the source code into a structured representation,
        typically an abstract syntax tree (AST).
      </p>
      <div className="my-6">
        <CodeBlock code={parsingCode} language="typescript" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The parsing process typically involves the following steps:
      </p>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <strong>Lexical Analysis (Tokenization):</strong> Converting the source code into a sequence of tokens
        </li>
        <li>
          <strong>Syntax Analysis (Parsing):</strong> Building an abstract syntax tree (AST) from the tokens
        </li>
        <li>
          <strong>Semantic Analysis:</strong> Checking the AST for semantic errors and building a symbol table
        </li>
      </ol>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Compilation Details</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Compilation is the process of converting source code written in a high-level language (like Bhasa) into a
        lower-level language (like machine code or bytecode) that can be executed by a computer.
      </p>
      <div className="my-6">
        <CodeBlock code={compilationCode} language="typescript" />
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The compilation process typically involves the following phases:
      </p>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <strong>Lexical Analysis:</strong> Converting the source code into tokens
        </li>
        <li>
          <strong>Syntax Analysis:</strong> Building an abstract syntax tree (AST)
        </li>
        <li>
          <strong>Semantic Analysis:</strong> Checking for semantic errors and building a symbol table
        </li>
        <li>
          <strong>Intermediate Code Generation:</strong> Converting the AST into an intermediate representation (IR)
        </li>
        <li>
          <strong>Optimization:</strong> Improving the IR for better performance
        </li>
        <li>
          <strong>Code Generation:</strong> Converting the IR into the target language (e.g., bytecode)
        </li>
      </ol>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Runtime Environment</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The Bhasa runtime environment is responsible for executing the compiled bytecode. It includes components such
        as:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Virtual Machine:</strong> Executes the bytecode instructions
        </li>
        <li>
          <strong>Memory Manager:</strong> Allocates and deallocates memory for variables and objects
        </li>
        <li>
          <strong>Garbage Collector:</strong> Automatically reclaims memory that is no longer in use
        </li>
        <li>
          <strong>Standard Library:</strong> Provides built-in functions and types
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Performance Considerations
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        When writing Bhasa code, consider the following performance tips:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Use appropriate data types for your variables</li>
        <li>Avoid unnecessary computations in loops</li>
        <li>Use efficient algorithms and data structures</li>
        <li>Minimize the use of recursion for performance-critical code</li>
        <li>Consider using memoization for expensive function calls</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Further Reading</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        For more information on compiler design and programming language implementation, consider the following
        resources:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          "Compilers: Principles, Techniques, and Tools" by Alfred V. Aho, Monica S. Lam, Ravi Sethi, and Jeffrey D.
          Ullman
        </li>
        <li>"Engineering a Compiler" by Keith Cooper and Linda Torczon</li>
        <li>"Programming Language Pragmatics" by Michael L. Scott</li>
        <li>"Crafting Interpreters" by Robert Nystrom</li>
      </ul>
    </div>
  )
}

