class _Node {
    constructor(
        public data: number,
        public left: _Node = null,
        public right: _Node = null){}
}

class BinaryTree {
    private _root: _Node;

    get root(): _Node {
        return this._root;
    }

    constructor(values: number[] = []){
        this._root = this.build_tree(this._root, values, 0);
    }

    private build_tree(node: _Node, values: number[], itr: number): _Node {
        if (itr < values.length) {
            node = new _Node(values[itr]);
            node.left = this.build_tree(node.left, values, itr * 2 + 1);
            node.right = this.build_tree(node.right, values, itr * 2 + 2);
        }
        return node;
    }

    public apply_preorder(node: _Node, fn: (node: _Node) => void) {
        if (node != null)
        {
            fn(node);
            this.apply_preorder(node.left, fn);
            this.apply_preorder(node.right, fn);
        }
    }
    public apply_inorder(node: _Node, fn: (node: _Node) => void) {
        if (node != null)
        {

            this.apply_inorder(node.left, fn);
            fn(node);
            this.apply_inorder(node.right, fn);
        }
    }

    public apply_postorder(node: _Node, fn: (node: _Node) => void) {
        if (node != null)
        {
            this.apply_postorder(node.left, fn);
            this.apply_postorder(node.right, fn);
            fn(node);
        }
    }
}

function print_node_value(node:_Node): void {
    console.log(node.data);
}


var values = [1, 2, 3, 4, 5]

const btree = new BinaryTree(values);

btree.apply_preorder(btree.root, print_node_value);
console.log()
btree.apply_inorder(btree.root, print_node_value);
console.log()
btree.apply_postorder(btree.root, print_node_value);

