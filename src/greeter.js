export default class Greeter {

    /**
     * @param who who to greet (default: World)
     * @param container the host element
     */
    constructor(who, container) {
        this.container = container || document.body;
        this.who = who || "World";
    }

    sayHello() {
        this.container.innerHTML= `<p>Hello, ${this.who}! ☺</p>`;
    }
}