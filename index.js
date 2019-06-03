if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'index'.");
}
var index = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var dummyIteration = defineInlineFunction('index.org.sample.dummyIteration_je628z$', function ($receiver, f) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      f(item);
    }
  });
  function main(args) {
    var dummy = [1, 2, 3, 4, 5];
    var tmp$;
    for (tmp$ = 0; tmp$ !== dummy.length; ++tmp$) {
      var item = dummy[tmp$];
      console.log(item);
    }
  }
  $$importsForInline$$.index = _;
  var package$org = _.org || (_.org = {});
  var package$sample = package$org.sample || (package$org.sample = {});
  package$sample.dummyIteration_je628z$ = dummyIteration;
  package$sample.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(typeof index === 'undefined' ? {} : index, kotlin);
