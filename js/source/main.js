/*globals:DOM99, JS99*/
(function () {
    "use strict";
    
    // 1 define functions
    const calculate = function (event) {
        /*
        JS99.vars.result = String(parseInt(JS99.vars.a, 10) * parseInt(JS99.vars.b, 10));
         or write */
        JS99.changeVars({
            result: String(parseInt(JS99.vars.a, 10) * parseInt(JS99.vars.b, 10))
        });
    };

    // 2 store event handlers in JS99
    JS99.calculate = calculate;
    
    // 3 Link the document and the event handlers
    DOM99.linkJsAndDom(); //now we listen to events

    // 4 initialize
    JS99.changeVars({
        a: String(2),
        b: String(4),
    });
    JS99.calculate();
}());
