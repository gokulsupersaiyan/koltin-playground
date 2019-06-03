In functional programming, callback makes the code more readable, but it comes with little overhead (More info: https://www.slideshare.net/madrobby/extreme-javascript-performance/). The following sample shows a good use case for types in the programming language.

Actual code - (https://github.com/gokulsupersaiyan/koltin-playground/blob/master/index.kt)

Transpiled javascript code - (https://github.com/gokulsupersaiyan/koltin-playground/blob/master/index.js)

The way kotlin transpiles the code is, it takes the actual code (function body of the lambda) and put it in the callsite (where the function is called).
ultimately eliminating the performance overhead caused by functional programming.

Even JVM uses these kind of techniques to optimize bytecode while running program on its own without doing anything on our side (https://aboullaite.me/understanding-jit-compiler-just-in-time-compiler/). When the system has more knowledge of the type system, the more tricks it can do for performance. That's why in recent times, JVM got a lot better and the performance is comparable to C++.

We can use this kind of techniques when we are more worried about performance than the size of the JS file.