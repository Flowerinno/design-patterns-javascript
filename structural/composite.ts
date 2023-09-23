// Structural: Composite pattern

// Open-closed principle (adding but not modifying)
// Code reusability
// Recursive operations
// Usable in documents/tree like structures

export class Node {
    children: Node[];
    name: string;

    constructor(name: string) {
        this.children = [];
        this.name = name;
    }

    add(child: Node) {
        this.children.push(child);
    }

    remove(child: Node) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getChild(i: number) {
        return this.children[i];
    }

    hasChildren() {
        return this.children.length > 0;
    }
}

// Recursively traverse a (sub)tree
function traverse(indent, node) {
    console.log(Array(indent).join("--") + node.name);

    for (let i = 0, len = node.children.length; i < len; i++) {
        traverse(indent + 1, node.getChild(i));
    }
}

function run() {
    const tree = new Node("root");
    const left = new Node("left");
    const right = new Node("right");
    const leftleft = new Node("leftleft");
    const leftright = new Node("leftright");
    const rightleft = new Node("rightleft");
    const rightright = new Node("rightright");

    tree.add(left);
    tree.add(right);
    tree.remove(right); // note: remove
    tree.add(right);

    left.add(leftleft);
    left.add(leftright);

    right.add(rightleft);
    right.add(rightright);

    traverse(1, tree);
    console.log(tree)
}

run();