using System;

namespace BinaryTree {
    public class Node 
    {
        public int data { get; set; }
        public Node Left { get; set; }
        public Node Right { get; set; }

        public Node(int data)
        {
            this.data = data;
            this.Left = null;
            this.Right = null;
        }
    }

    public class BinaryTree {


        public Node Root { get; }
        public BinaryTree(int[] values) 
        {
            this.Root = this.BuildTree(this.Root, values, 0);
        }

        private Node BuildTree(Node node, int[] values, int itr) 
        {
            if (itr < values.Length)
            {   
                node = new Node(values[itr]);
                node.Left = this.BuildTree(node.Left, values, itr * 2 + 1);
                node.Right = this.BuildTree(node.Right, values, itr * 2 + 2);
            }
            return node;
        }

        public void PreorderApply(Node node, Del<Node> Callback)
        {
            if (node != null)
            {
                Callback(node);
                this.PreorderApply(node.Left, Callback);
                this.PreorderApply(node.Right, Callback);
            }
        }

        public void InorderApply(Node node, Del<Node> Callback)
        {
            if (node != null)
            {
                this.InorderApply(node.Left, Callback);
                Callback(node);
                this.InorderApply(node.Right, Callback);
            }
        }

        public void PostOrderApply(Node node, Del<Node> Callback)
        {
            if (node != null)
            {
                this.PostOrderApply(node.Left, Callback);
                this.PostOrderApply(node.Right, Callback);
                Callback(node);
            }
        }
    }

    public delegate void Del<T>(T param);
    
    public class Program
    {

        public static void PrintNodeValue(Node n)
        {
            Console.Write($"{n.data}, ");
        }

        public static void Main(string[] args)
        {
            int[] values = {1,2,3,4,5};
            var Btree = new BinaryTree(values);
            Del<Node> Callback = Program.PrintNodeValue;

            Btree.PreorderApply(Btree.Root, Callback);
            Console.WriteLine();
            Btree.InorderApply(Btree.Root, Callback);
            Console.WriteLine();
            Btree.PostOrderApply(Btree.Root, Callback);
        }
    }
}