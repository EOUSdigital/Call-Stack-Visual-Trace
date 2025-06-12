//TODO 📚 Module 4 - Lesson 13.02: The Call Stack - Challenge


//TODO  🛠️ Step 4: Project Lesson Challenge — “Call Stack Visual Trace”


//* 🔰 Scenario
//  We have been tasked with creating a function flow that logs a traceable execution path through multiple function calls — mimicking how a real call stack grows and shrinks. This will reinforce your mental model of function stacking, scope traversal, and error tracing.

//* 🧩 Requirements
//  1. Create at least 3 nested function calls, e.g., main() → process() → compute().

//  2. Each function should:
//  • Log its entry (e.g., > Entering: compute)
//  • Log its exit (e.g., < Exiting: compute)

//  3.Insert a deliberate error inside the deepest function to trigger a stack trace (e.g., access an undefined variable).

//  4. Wrap the top-level call in a try/catch block to observe and handle the error.

//  5. Use comments to document the expected stack state at each major step (e.g., “Stack now has: main → process → compute”).

//* 🧠 Learning Goals
//  • Practice reading and simulating stack traces
//  • Understand how errors propagate through the stack
//  • Gain confidence in function flow and nested behavior
//  • Observe how the stack is rebuilt and collapsed during execution

//* 🔍 Optional Stretch Goals
//  Add a recursive function with a base case, and visually log each stack level.
//  Build a simple “stack trace logger” utility that appends each function name to an array and prints it at the end.

//* 🧾 Reflection Prompts

//  • What did the call stack look like at the moment of the error?
//! Answer: 

//  • Which function exited first, and which last?
//! Answer: 

//  • How can this trace pattern help when debugging asynchronous or modular code?
//! Answer: 


//! Solution

const globalCompute = "compute";
let callTrace = [];

function main() {
    console.log("Entering: main");
    
    try {
        process();
    } catch (e) {
        console.log("Caught error in main:", e.message);
    }

    console.log("Exiting: main");
    callTrace.push("main");
    console.log("Current stack:", callTrace);
    callTrace.pop();
}

function process() {
    callTrace.push("process");
    console.log("Entering: process");
    compute();
    console.log("Exiting: process");
    console.log("Current stack:", callTrace);
    callTrace.pop();
}

function compute() {
    callTrace.push("compute");
    console.log("Entering: compute");
    
    //  Stack now has: main → process → compute
    console.log("Current callTrace:", callTrace.join(" → "));

    console.log("Exiting: compute");
    console.log("Current stack:", callTrace);
    callTrace.pop();

    // Error test
    throw new ReferenceError("access an undefined variable");
}

main();
























