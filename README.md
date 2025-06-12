# Lesson 13 — Challenge Project

## 🎯 Project Objective

This challenge demonstrates a complete simulation of JavaScript's **call stack behavior** using nested functions, manual tracking via an array (`callTrace`), and error handling through `try/catch`. It serves both as a learning tool and a conceptual model for understanding **how the JavaScript engine executes code**.

---

## ✅ Features

### 🔁 Nested Function Execution
- Functions: `main()` → `process()` → `compute()`
- Logs entry and exit of each function to represent real-time stack behavior

### 📦 Manual Stack Tracking
- Uses a `callTrace` array to simulate stack frame addition (`push`) and removal (`pop`)
- Prints current stack state at key points

### 💥 Error Handling
- `compute()` throws a `ReferenceError`
- Error is caught in `main()` using a `try/catch` block
- Helps visualize **how errors bubble up** the call stack

---

## 🧪 Code Flow Overview

```
main()
 └─ calls process()
      └─ calls compute()
           └─ throws ReferenceError
```

Each function:
- Pushes its name to `callTrace` when entered
- Logs current stack
- Pops from `callTrace` when exited

---

## 🧾 Sample Console Output

```
Entering: main
Entering: process
Entering: compute
Current callTrace: main → process → compute
Exiting: compute
Current stack: [ 'main', 'process', 'compute' ]
Caught error in main: access an undefined variable
Exiting: main
Current stack: [ 'main' ]
```

---

## 🧠 Learning Outcomes

- Understand how JavaScript maintains execution order using a **call stack**
- See how function calls are stacked and unstacked in a **LIFO** (Last In, First Out) fashion
- Practice error handling and understand stack trace interpretation
- Learn how to simulate internal engine behavior with clean, readable code

---

## 📝 Reflection Questions

- At what point in the execution does the stack grow to its deepest?
- What does the call stack look like when an error is thrown?
- How does manually simulating the stack reinforce your understanding?
- What changes would be needed to adapt this for asynchronous behavior?

---

This challenge reinforces core concepts of execution flow, stack depth, and trace-based debugging — all of which are foundational for mastering JavaScript behavior in real applications.
