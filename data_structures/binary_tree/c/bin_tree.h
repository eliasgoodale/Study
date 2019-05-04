
#ifndef BIN_TREE_H
#define BIN_TREE_H

#include <stdio.h>
#include <stdlib.h>


typedef struct s_node
{
    int data;
    struct s_node *left;
    struct s_node *right;
}               Node;

Node *binary_tree(Node *root, int *values, int i, int size);
Node *sorted_binary_tree(int *values, int size);
Node *new_node(int data);
int *create_integer_array(int size);
void print_value(Node *n);
void inorder_apply(Node *root, void (*f)(Node *n));
void preorder_apply(Node *root, void(*fn)(Node *n));
void postorder_apply(Node *root, void(*fn)(Node *n));

#endif