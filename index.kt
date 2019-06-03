package org.sample
   
inline fun <T> Array<out T>.dummyIteration(f: (T) -> Unit) {
  for(item in this) {
    f(item)
  }
}

fun main(args: Array<String>) {
  val dummy = arrayOf<Int>(1, 2, 3, 4, 5);
  // Example one
  dummy.dummyIteration{ number:Int -> console.log(number) }
  
  // Example two
  val result = dummy.filter{ number:Int -> number % 2 ==0 }.map{ number: Int -> console.log(number) }
}