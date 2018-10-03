# Design Patterns

## Terms

* Candidate key: A key created as a superset of two or more fields such that the relation does not have two records with the candidate key value, meaning that two or more of the records have the same values for the fields used to create the candidate key.

* Functional dependency: In a relation **R**, a set of attributes **X** in **R** is said to functionally determine another set of attributes **Y** also within **R**, iff each value **X** in **R** is associated with one value in Y. If the values for **X** attributes are known, then the values of **Y** can be determined by looking at any tuple of **R** containing **X**. For example, in a table of cars vin number **V** functionally determines the cars engine capacity **C**, because that make, model, type, and code of vehicle (summarized by its VIN number) may only have one engine capacity (**V** -> **C**). To summarize, a field in a table functionally determines another, whenever that field's unique value corresponds 1 to 1 with another field's value, and those two values are always the same.


## Relational Databases

    In this section we will cover design patterns that correspond to well-known, proven logical schemas in relational databases

### Common concerns

>Data Integrity - Relational model deals with data integrity by using **normal forms** and was proposed by Edgar F. Codd as an integral part of his relational model. Normalizing a database, means organizing the tables (relational entities) and columns (attributes) of a database to ensure that their dependencies are met. In the following sections, I will introduce these normal forms. They progress in order, with each subsequent form adding another criterion in addition to maintaining the previous criterion.

#### The First Normal Form
*   Primary Key: In simple cases, a unique id corresponding to a row in a table. In other cases, a specific choice of minimal set attributes that identify a record. A PK may correspond to **Real World** data, and be a result of the computation of that data, in which case it is called a **natural key**. Natural keys refer to the nature of the data in that row, such as a concat of longitude and latitude, or in a sports team management system a unique key generated from their team name, the team they played against, and the date that they played. In contrast, a **surrogate key** is a man-made reference number or id tag that Of the two, surrogate keys have become the dominant meta for design in a relational database schema. Primary keys must be **immutable**, they must be removed with the record, and should be anonymus integer or numeric identifiers.

*   No repeated groups: There is only one value in a column for each row. 


*   Atomic Columns: Every attribute position, in every tuple, in every relation, contains a single value of the appropriate type. In modern systems, this does not mean that the data is indivisible. A string may be broken into parts (fullName = firstName + ' ' + lastName) as well as a date.

#### The Second Normal Form

* No partial functional dependencies:  
