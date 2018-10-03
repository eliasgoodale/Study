## Memory Layout (C program)




![alt text][memoryLayout]

[memoryLayout]: https://cdncontribute.geeksforgeeks.org/wp-content/uploads/memoryLayoutC.jpg "Memory Layout"


####  1.) Text Segment

This is the segment which contains **executable instructions**, in either an object file or in memory. It is placed well below the heap or stack to prevent overflows from overwriting instruction data.

#### 2.) Initialized Data Segment

The data segment is a portion of virtual address space which contains the **global** and **static** variables that are **initialized** by the programmer. It can be broken down into two segments: The initialized **read-only** area and initialized **read-write** area. 

#### 3.) Uninitialized Data Segment (BSS)

Data in this segment is initialized to zero before the program starts execution. It is at the end of the data segment and contains all uninitialized global and static variables.

#### 4.) Stack

The stack contains the program stack, a LIFO structure located in higher parts of memory. On x86 architecture it grows toward address 0, on some others it grows in the opposite direction. The **stack pointer** tracks the top of the stack and is adjusted each time a value is **pushed** onto the stack. Each set of values pushed for one function call is termed a **stack frame** consisting of a minimum of a return address. Automatic variables and call-function information is stored here. The address of where to return, the caller's environment, and machine registers are saved on the stack. Recursive functions work by creating a new stack frame and allocating space for new temporary/auto variables. To increase the size of the stack bey, the kernel uses a region of reserved addresses at the bottom of it's max space to allocate ram as needed. This region remains permanently unmapped, and a segmentation fault will occur if either the stack or the heap try to grow into it. 

#### 5.) Heap

This is where dynamic memory allocation occurs. It begins at the end of the BSS segment and grows toward larger addresses. The system calls brk() and sbrk() manipulate the break address for a programs data segment represented by the **dotted line** at the top of the heap.

> See example in memory_layout.c

### Process Control Block

> The OS maintains a special table called the **process control block table**(PCB table). This table contains various info about a process like the **program counter** (PC) and **CPU registers**. The PC points to the next instruction to execute, and the CPU registers hold temporary execution information such as instruction arguments.

Process = [Text + Data + Heap + Stack + PC + PCB + CPU Registers]  