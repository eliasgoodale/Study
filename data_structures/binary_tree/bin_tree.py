

class BinaryTree:

    class Node:
        def __init__(self, data):
            self.data = data
            self.left = self.right = None

    def __init__(self, values=[]):
        self.root = None
        self.root = self.build_tree(self.root, 0, values)

    def build_tree(self, root, itr, values):
        if itr < len(values):
            root = self.Node(values[itr])
            root.left = self.build_tree(root.left, itr * 2 + 1, values)
            root.right = self.build_tree(root.right, itr * 2 + 2, values)
        return root
    
    def apply_preorder(self, node, fn):
        if node:
            fn(node)
            self.apply_preorder(node.left, fn)
            self.apply_preorder(node.right, fn)

    def apply_inorder(self, node, fn):
        if node:
            self.apply_inorder(node.left, fn)
            fn(node)
            self.apply_inorder(node.right, fn)
    
    def apply_postorder(self, node, fn):
        if node:
            self.apply_postorder(node.left, fn)
            self.apply_postorder(node.right, fn)
            fn(node)
            




def print_node(node):
    print(node.data, end=" ")


btree = BinaryTree([1, 2, 3, 4, 5])

btree.apply_preorder(btree.root, print_node)
print()
btree.apply_inorder(btree.root, print_node)
print()
btree.apply_postorder(btree.root, print_node)


#print(btree.root, btree.left.root, btree.right.root)


# values = [0, 1, 2]
# print(values[1:])