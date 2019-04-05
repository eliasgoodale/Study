#include "bin_tree.h"
#include "helper.c"

int main()
{
    int size = 5;
    int *values = create_integer_array(size);
    Node *root = binary_tree(NULL, values, 0, size);
    
    
    preorder_apply(root, print_value);
    inorder_apply(root, print_value);
    postorder_apply(root, print_value);

    return (0);
}

Node *binary_tree(Node *root, int *values, int i, int size)
{
    if (i < size)
    {
        root = new_node(values[i]);
        root->left = binary_tree(root->left, values, 2 * i + 1, size);
        root->right = binary_tree(root->right, values, 2 * i + 2, size);
    }
    return root;
}

Node *new_node(int data)
{
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;
    return (new_node);
}

void preorder_apply(Node *root, void (*fn)(Node *))
{
    if (!root) {
        return;
    }

    (*fn)(root);
    preorder_apply(root->left, fn);
    preorder_apply(root->right, fn);
}

void inorder_apply(Node *root, void (*fn)(Node *))
{
    if(!root) { 
        return; 
    }
 
    inorder_apply(root->left, fn); 

    (*fn)(root);

    inorder_apply(root->right, fn);
}

void postorder_apply(Node *root, void (*fn)(Node *)) 
{
    if(!root)
    {
        return;
    }

    postorder_apply(root->left, fn);
    postorder_apply(root->right, fn);
    (*fn)(root);
}


