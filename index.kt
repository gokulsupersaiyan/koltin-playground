package org.sample
   
inline fun <T> Array<out T>.dummyIteration(f: (T) -> Unit) {
  for(item in this) {
    f(item)
  }
}

fun main(args: Array<String>) {
  val dummy = arrayOf<Int>(1, 2, 3, 4, 5);
  dummy.dummyIteration{ number:Int -> console.log(number) }
}