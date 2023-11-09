function LinkedList() {
    let Node = function (element) { // {1}
        this.element = element;
        this.next = null;
    };
    let length = 0; // {2}
    let head = null; // {3}
    this.append = function (element) { };
    this.insert = function (position, element) { };
    this.removeAt = function (position) { };
    this.remove = function (element) { };
    this.indexOf = function (element) { };
    this.isEmpty = function () { };
    this.size = function () { };
    this.toString = function () { };
    this.print = function () { };
}
