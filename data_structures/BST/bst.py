class BinarySearchTree:
    class Node:
        def __init__(self, value):
            self.left = None
            self.right = None
            self.value = value
    

    def __init__(self, values):
        self.build_tree(self.root, values)
    


