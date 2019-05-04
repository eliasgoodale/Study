#include "bin_tree.h"
#include "helper.c"

int main()
{
    int size = 5;
    int unsorted_values[5] = {22,3,1,66,4};
    Node *sorted_root = sorted_binary_tree(unsorted_values, size);
    
    preorder_apply(sorted_root, print_value);
    printf("\n");
    inorder_apply(sorted_root, print_value);
    printf("\n");
    postorder_apply(sorted_root, print_value);

    return (0);
}

Node *insert(Node *node, int value)
{
    if (node == NULL)
    {
        return new_node(value);
    }
    if (value <= node->data)
    {
        node->left = insert(node->left, value);
    }
    else if (value > node->data)
    {
        node->right = insert(node->right, value);
    }
    return node;
}

Node *sorted_binary_tree(int *values, int size)
{
    Node *root = NULL; 
    root = insert(root, values[0]);

    for (int i = 1; i < size; i++ )
    {
        insert(root, values[i]);
    }
    return root;
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


