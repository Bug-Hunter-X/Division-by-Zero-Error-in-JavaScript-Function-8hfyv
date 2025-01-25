# Division by Zero Bug in JavaScript

This repository demonstrates a common error in JavaScript: division by zero. The `myFunction` attempts to divide `a` by `b`, but doesn't handle the case where `b` is zero. This leads to an error.

The `bug.js` file contains the buggy code. The solution is in `bugSolution.js`, which adds a check to prevent division by zero.

## How to reproduce the bug

1. Clone this repository.
2. Open `bug.js` in your text editor.
3. Run `node bug.js` in your terminal. You'll see an error message because of division by zero.

## How to fix the bug

The fix is to add a check for division by zero. If `b` is zero, the function should return an appropriate value (e.g., `Infinity`, `NaN`, or an error message).  The `bugSolution.js` file shows the corrected code.