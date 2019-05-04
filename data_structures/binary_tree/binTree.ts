class _Node {
    constructor(
        public data: number,
        public left: _Node = null,
        public right: _Node = null){}
}

class BinaryTree {
    private _root: _Node;
    private _sortedRoot: _Node;
    get root(): _Node {
        return this._root;
    }
    get sortedRoot(): _Node {
        return this._sortedRoot;
    }

    constructor(values: number[] = []){
        this._root = this.build_tree(this._root, values, 0);
        this._sortedRoot = this.build_tree_sorted(this._sortedRoot, values);

    }

    private build_tree(node: _Node, values: number[], itr: number): _Node {
        if (itr < values.length) {
            node = new _Node(values[itr]);
            node.left = this.build_tree(node.left, values, itr * 2 + 1);
            node.right = this.build_tree(node.right, values, itr * 2 + 2);
        }
        return node;
    }

    private insert(node: _Node, value: number): _Node {
        if (node == null) {
            return new _Node(value);
        }
        if (value <= node.data) {
            node.left = this.insert(node.left, value);
        }
        else if (value > node.data){
            node.right = this.insert(node.right, value);
        }
        return node;
    }

    private build_tree_sorted(root: _Node, values: number[]): _Node {
        root = null
        root = this.insert(root, values[0])
        for(let i: number = 1; i < values.length; i++){
            this.insert(root, values[i])
        }
        return root;
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


var values = [1, 1, 1, 1, 1]

const btree = new BinaryTree(values);

btree.apply_preorder(btree.sortedRoot, print_node_value);
console.log()
btree.apply_inorder(btree.sortedRoot, print_node_value);
console.log()
btree.apply_postorder(btree.sortedRoot, print_node_value);

