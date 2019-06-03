if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'index'.");
}
var index = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
    var destination = ArrayList_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== dummy.length; ++tmp$_0) {
      var element = dummy[tmp$_0];
      if (element % 2 === 0)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      console.log(item_0);
      tmp$_2.call(destination_0, Unit);
    }
    var result = destination_0;
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
