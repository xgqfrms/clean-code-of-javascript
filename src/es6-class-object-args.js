"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-09-03
 *
 * @description ES6 Class & Object args
 * @augments
 * @example
 * @link
 *
 */

let log = console.log;

class Human {
    constructor(name, age) {
        this.name = name || ``;
        this.age = age || 0;
    }
}

class Person extends Human {
    constructor(...args) {
        log(`args`, args, typeof args);
        // args [ { name: 'xgqfrms', age: 23 } ] object
        log(`...args`, ...args);
        // ...args { name: 'xgqfrms', age: 23 }
        super(...args);
        // this.name = args[0].name || ``;
        this.name = [...args][0].name || ``;
    }
    sayHello() {
        let name = this.name || "who am I?";
        log(`your name is`, name);
    }
    changeName(name = ``) {
        if(name) {
            this.name = name;
        }
    }
}

let person = new Person({
    name: "xgqfrms",
    age: 23,
});

person.sayHello();
setTimeout(() => {
    person.changeName("webgeeker");
    person.sayHello();
}, 1000);
