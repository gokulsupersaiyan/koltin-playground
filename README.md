In functional programming, callback makes the code more readable, but it comes with little overhead (More info: https://www.slideshare.net/madrobby/extreme-javascript-performance/). The following sample shows a good use case for types in the programming language.

Actual code - (https://github.com/gokulsupersaiyan/koltin-playground/blob/master/index.kt)

Transpiled javascript code - (https://github.com/gokulsupersaiyan/koltin-playground/blob/master/index.js)

The way kotlin transpiles the code is, it takes the actual code (function body of the lambda) and put it in the callsite (where the function is called).
ultimately eliminating the performance overhead caused by functional programming.The above trick only solves the performance overhead of lambda function.we will still have intermediate results, multiple iterations caused by functional programing. That's also a major overhead. A small solution for this problem (https://stackoverflow.com/questions/35506544/how-to-avoid-intermediate-results-when-performing-array-iterations).But again it comes at a cost of callback overhead.

JVM uses these kind of techniques to optimize bytecode while running program on its own without doing anything on our side (https://aboullaite.me/understanding-jit-compiler-just-in-time-compiler/). When the system has more knowledge of the type system, the more tricks it can do for performance. That's why in recent times, JVM got a lot better and the performance is comparable to C++.

We can use this kind of techniques when we are more worried about performance than the size of the JS file. 

Ex,
_.([1,2,3,4]).filter(even).map(square);
Filtering even numbers creates an array.That is not at needed after computing the square.

Some interesting things to read:

