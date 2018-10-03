## Multi-Threading

### Processes

> A process is an executing **instance** of a computer program. When loaded into memory a process' memory is divided into sections. See **memory_layout.md**

### Thread

> A thread is a flow of execution through process code. It contains a private **program counter** with the next instructions, **system registers** which hold current working variables, and a **stack** which contains its execution history. A thread shares code and data segments with its peer threads in the process which can see any alterations made by it. 

Thread = [Parent Code, Data and Heap + Stack, PC, and CPU Registers]

![alt text][multiVsSingle]

[multiVsSingle]: https://www.tutorialspoint.com/operating_system/images/thread_processes.jpg "Multi vs Single Threaded Process"

### Context Switching

> Process context switching is CPU time expensive and involves saving and restoring state information including the program counter, CPU registers, and the PCB.

> Thread context switching involves pushing all thread CPU registers and the program counter to the thread private stack, and saving the stack pointer. Since it only saves and restores the CPU registers, it is relatively cheap.

### User Level Threads


> The thread management kernel is not aware of the existance of user level threads. The **thread library** handles the creation and destruction of threads, passing messages/data between them, and scheduling thread execution/saving or restoring thread contexts. However, they still require a kernel system call to operate. User level threads are a good choice for **non-blocking tasks** because these tasks will block the entire process.

Advantages:

* No requirement for Kernel mode privileges
*	Can run on any operating system.
*	Scheduling is application specific
*	Fast to create and easy to manage

Disadvantages:

*	Kernel may not favor a process with many threads
*	System calls are blocked
*	Cannot take advantage of multi-processing

### Kernel Level Threads

> Managed by the OS, thread operations are implemented in the **kernel code**. Kernel level threads favor thread heavy processes. They may also utilize multiprocessor systems by splitting threads on different cores. A good choice for processes that **block frequently**(an entire process is not blocked if one if its threads is). 

Advantages:
*	Kernel may schedule multiple threads from the same process on multiple processes
* If a thread in a process is blocked the Kernel can schedule another thread of the same process
* Kernel routines themselves can be multi-threaded.

Disadvantages:

*	Slower than user level threads due to management overhead
*	Context switching is slower, requiring more steps
* They are **not portable** because the implementation is OS dependent 

## Multi-threading Models

> Some OS's provide a combined user/kernel level threading. In a combined system, multiple threads may run in parallel on multiple processors, and a blocking call does not effect the whole process. There are three types of multi-threading models.

### Many to many model

>Multiplexing is a method by which multiple threads are combined over a shared medium. The aim is to share CPU power. In a many to many model, threads are multiplexed any number of user threads onto equal or smaller number of kernel threads. Developers can create as many user threads as necessary and use this model to map them onto kernel threads **running in parallel**. This model provides best accuracy on **concurrency** and when a thread performs a **blocking system call**, the kernel may schedule another thread for its execution. 

![alt text][manyToMany]

[manyToMany]: https://www.tutorialspoint.com/operating_system/images/many_to_many.jpg "Many To Many"

### Many to one model
> This model maps many user level threads to one Kernel-level thread. Thread management is performed by the **user library**. A blocking call will block the entire process. Multiple threads are **unable to run in parellel**. Only one thread from the user level may access the Kernel at a time. If the user level thread libraries are not supported by the OS, the Kernel defaults to this model.

![alt text][manyToOne]

[manyToOne]: https://www.tutorialspoint.com/operating_system/images/many_to_one.jpg "Many To One"


### One to one model

> This model provides more concurrency than many-to-one. It also allows another thread to run when a thread makes a blocking system call. Multiple threads may be **executed in parallel**

![alt text][oneToOne]

[oneToOne]: 
https://www.tutorialspoint.com/operating_system/images/one_to_one.jpg "One to One"



## Concurrency





## Paralellism

> Parallel computing is the simultaneous use of multiple compute resources to solve a computational problem. A problem is broken down into discrete parts that can be solved concurrently. Each part is broken into instructions that are executed on different processors. An overall control/coordination mechanism is employed.

> An example of the function do payroll, broken up by each employee, and instructions for completing the calculation are processed on separate cores


![alt text][payrollParallel]

[payrollParallel]: 
https://computing.llnl.gov/tutorials/parallel_comp/images/parallelProblem2.gif "Payroll Parallelism"

In order for a problem to be a candidate for parallelism, it must be able to:

*	Be broken down into discrete pieces of work that can be solved simultaneously

*	Execute multiple program instructions at any moment in time

*	Be solved in less time with multiple compute resources (single computer with multiple processors or an arbitrary number of computers connected to a network)



