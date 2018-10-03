# Important terms and concepts

## Terms
*	**Task** - A program or program like set of instructions that is executed by a processor.
*	**Pipelining** - A type of parallel computing that breaks tasks into steps performed by different cores, with inputs streaming through.
*	**Shared Memory** - describes computer architecture where all processors have direct access to common physical memory. In programming, it describes a model where each task has the same picture of memory and can access the same locations regardless of where the physical memory exists.
* **Synchronization** - Coordination of parallel tasks in real time. Often associated with communications and implemented by establishing a synch point within an application where the task may not proceed furhter until another task reaches the same locally equivalent point.
* **Granularity** - Ratio of computation to communication. In **course granularity** large amounts of computational work are performed between communication events. In **fine granularity** small amounts of work are done between events. 


## Concepts

### von Neumann Architecture

> Known as a "stored program computer" wherein both program instructions and data are kept in electronic memory. Virtually all computers follow this basic design

![alt text][payrollParallel]

[payrollParallel]: 
https://computing.llnl.gov/tutorials/parallel_comp/images/vonNeumann1.gif "Payroll Parallelism"

The design is comprised of 4 main components:

*	**Memory** implemented as read and write RAM storing both program instructions and data. Instructions are coded data telling the computer to do something. Data is information used by a program
* **Control Unit** that fetches instructions/data from memory, decodes the instructions and **sequentially** coordinates operations to accomplish a task. 
* **ALU** performs basic arithmetic operations
* **I/O** is the interface to the human operator

### Flynn's Classical Taxonomy

> In this classification of parallel computers there are two independent dimensions: **Instruction Stream** and **Data Stream**

This derives 4 classifications:

####	Single Instruction Single Data
*	Found in **serial(non-parallel)** computers
*	Only one instruction being acted on by CPU each clock cycle
*	Only one data stream as input per clock cycle
* Deterministic execution

![alt text][SISD]

[SISD]:
https://computing.llnl.gov/tutorials/parallel_comp/images/sisd.gif "SISD"

####	Single Instruction Multiple Data
* **Parallel**, performs the same operation on multiple streams of data.
* Single Instruction: All cores execute the same instruction for any given clock cycle
* Each core can operate on a different data element
* Bes for problems with a high degree of regularity, like graphics/image processing

![alt text][SIMD]

[SIMD]:
https://computing.llnl.gov/tutorials/parallel_comp/images/simd.gif "SIMD"

![alt text][SIMD2]

[SIMD2]:
https://computing.llnl.gov/tutorials/parallel_comp/images/simd2.gif "SIMD2"

#### Multiple Instruction Single Data
*	**Parallel**, Each core operates on the same data independently.
*	Not very common, could be used in cryptography algorithms attempting to crack a single coded message.

#### Multiple Instruction Multiple Data

*	**Parallel**, each processor may execute a different instruction stream and data stream independently.
* Execution may be synchronous, asynchronous, deterministic, or non-deterministic.
* Currently the most common type of parallel computer.
* Many MIMD architectures include SIMD execution sub-components.

![alt text][MIMD]

[MIMD]:
https://computing.llnl.gov/tutorials/parallel_comp/images/mimd.gif "MIMD"

![alt text][MIMD2]

[MIMD2]:
https://computing.llnl.gov/tutorials/parallel_comp/images/mimd2.gif "MIMD2"

#### Amdahl's Law
 >Amdahl's law states that potential program speedup is defined by the fraction of code **P** that can be parallelized

![equation](http://www.sciweavers.org/tex2img.php?eq=speedup%20%3D%20%5Cfrac%7B1%7D%7B1%20-%20P%7D&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

If none of the code can be parallelized then the speedup = 1, if all the code can be paralellized the speedup is infinite(divide by 0)

If 50% of the code can be parallelized, the maximum speedup = 2, meaning the code will run twice as fast.

> Introducing more processors performing a parallel fraction of work, the relationship is modeled by the following equation. P = parallel fraction, N = number of processors, S = serial fraction. Serial fractions 

![equation](http://www.sciweavers.org/tex2img.php?eq=speedup%20%3D%20%5Cfrac%7B1%7D%7B%5Cfrac%7BP%7D%7BN%7D%20%2B%20S%7D&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

>A task executed by a system whose resources are improved compared to an initial similiar system can be split in to two parts

* a part that does not benefit from improved resources
* a part that does

>Example: A computer program that processes files from disc.
*	Apart of that program may scan the directory of the disk and create a list of files interally in memory.
*	Another part of the program passes each file to a separate thread for processing. 

The process that scans the directory and creates a list of files internally cannot be sped up using a parallel computer, the part that processes the files can.

> Calculation: Given a program wherin 30% of the execution time may be subject to a 200% speedup what is the overall speedup of the program?

![equation](http://www.sciweavers.org/tex2img.php?eq=S_%7Blatency%7D%20%3D%20%5Cfrac%7B1%7D%7B1%20-%20p%20%2B%20%5Cfrac%7Bp%7D%7Bs%7D%7D%20%3D%20%5Cfrac%7B1%7D%7B1%20-%200.3%20%2B%20%5Cfrac%7B0.3%7D%7B2%7D%7D%20%3D%201.18%20&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)


