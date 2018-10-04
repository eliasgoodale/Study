# Design Patterns

## Terms

* Candidate key: A key created as a superset of two or more fields such that the relation does not have two records with the candidate key value, meaning that two or more of the records have the same values for the fields used to create the candidate key.

* Functional dependency (FD): In a relation **R**, a set of attributes **X** in **R** is said to functionally determine another set of attributes **Y** also within **R**, iff each value **X** in **R** is associated with one value in Y. If the values for **X** attributes are known, then the values of **Y** can be determined by looking at any tuple of **R** containing **X**. For example, in a table of cars vin number **V** functionally determines the cars engine capacity **C**, because that unique vehicle may only have one specific engine capacity (**V** -> **C**) and not another. To summarize, a field in a table functionally determines another, whenever that field's unique value corresponds 1 to 1 with another field's value, and those two values are always the same.

* Trivial FD:  Given a set S, {A, B} and FD, {A, B} -> B is a trivial functional dependency because B is a **subset** of {A,B}. When creating a table for Employees the PK is Employee_ID. Given that Employee_Name is a field in the table {Employee_ID, Employee_Name} -> Employee_ID is a **trivial FD**. A -> A is trivial as well.


## Relational Databases

    In this section we will cover design patterns that correspond to well-known, proven logical schemas in relational databases

### Common concerns

>Data Integrity - Relational model deals with data integrity by using **normal forms** and was proposed by Edgar F. Codd as an integral part of his relational model. Normalizing a database, means organizing the tables (relational entities) and columns (attributes) of a database to ensure that their dependencies are met. In the following sections, I will introduce these normal forms. They progress in order, with each subsequent form adding another criterion in addition to maintaining the previous criterion.

#### The First Normal Form
*   Primary Key: In simple cases, a unique id corresponding to a row in a table. In other cases, a specific choice of minimal set attributes that identify a record. A PK may correspond to **Real World** data, and be a result of the computation of that data, in which case it is called a **natural key**. Natural keys refer to the nature of the data in that row, such as a concat of longitude and latitude, or in a sports team management system a unique key generated from their team name, the team they played against, and the date that they played. In contrast, a **surrogate key** is a man-made reference number or id tag that Of the two, surrogate keys have become the dominant meta for design in a relational database schema. Primary keys must be **immutable**, they must be removed with the record, and should be anonymus integer or numeric identifiers.

*   No repeated groups: There is only one value in a column for each row. 


*   Atomic Columns: Every attribute position, in every tuple, in every relation, contains a single value of the appropriate type. In modern systems, this does not mean that the data is indivisible. A string may be broken into parts (fullName = firstName + ' ' + lastName) as well as a date.

#### The Second Normal Form

* No partial functional dependencies: All of the non-key columns are dependent on the table's primary key, and are effective in describing what that entry represents. Tables in the second normal form have a clear, singular purpose in representing the entity they describe. 
  
![alt text][2NF]

[2NF]: https://277dfx2bm2883ohl6u2g3l59-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/SecondNormalFormIssues-294x300.png "2NF"

We can fix the database by creating a SalesStaffInformation table, and Sales Office table and removing the Employee ID from the Customer table, and the Sales Office fields. Within the SSI table, we place the Employee ID and related fields, like their name, and the office they work in as a foreign key creating a relationship to the SO table. Inside of the SO table, we place the name of the office and the office number because these fields describe that key. Finally we create an **intersection table** (a table made entirely of keys) that describes how each employee is related to each customer.

![alt text][_2NF]

[_2NF]: https://277dfx2bm2883ohl6u2g3l59-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/SecondNormalFormDataModel.png "_2NF"

#### The Third Normal Form

*   No transitive functional dependencies: A column is transitively dependent when its value relies on another column's value through a second intermediate column's value. C determines B determines A. in the case of B and A, a person's BMI determines whether or not they are overweight. It would not make sense to have isOverweight as a boolean field within the table since BMI determines that field, and isOverweight is a functional derivative of it. To have a database in the third normal form, it is important that each fields value not be compromised by another fields value. Customers have a city and a postal code. Updating the customers postal code without updating the customers city would cause data to be incorrect and invalidate that entry. Instead we can have a separate table for the Postal code which determines the city they live in, and have that table be a FK in the Customer Table

![alt-text][3NF]

[3NF]:
https://277dfx2bm2883ohl6u2g3l59-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/ThirdNormalFormIssues.png "3NF"


![alt-text][_3NF]

[_3NF]:
https://277dfx2bm2883ohl6u2g3l59-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/ThirdNormalFormDataModel.png "_3NF"



#### The Fourth Normal Form

Every non-trivial, multi-value dependency has a superkey: When considering a list of pizza delivery restaurants we can identify that each restaurant has a delivery area and a list of pizza varieties that it offers. If each one of the restaurants delivers the same type of pizza, the information can be put all in one table. However, if each restaurant does not have the same menu available at each one of its delivery areas, there are two non-trivial relationships {Restaurant} -> {Pizza Variety}, and  {Restaurant} -> {Delivery Area}. Since restaurant is not a superkey and it has two non-trivial relationships we can say that a restaurants menu is independent from its delivery area because that menu changes based on the delivery area and the restaurant itself.


#### The Fifth Normal Form



#### The Sixth Normal Form

### Pattern Structure

    A design problem is a situation where the designer needs to map user requirements or conceptual-level constructs to logical or physical constructs in the database. A design pattern or solution is a response to the problem. The following is a list of attributes for the process of selecting a pattern based on the problem given

#### Motivation
> The motivation discusses the situation that is puzzling for the designer. In this section we contextualize and analyze the problem parameters

#### Alternative Solutions
> The answers to the problem. Design patterns are presented as solutions, each of which should incorporate a definition of the chosen schema, and an illustrative example at the schema and instance level.

#### Developer Interface
> This describes how we can guarantee that our applications have access to our data via our schema. The pattern must include an API-like mechanism that allows our schema to evolve and change over time with as little maintanence as possible and giving us the ability to determine what an application needs to interface with it.

#### Instance Level Behavior
> Each database can have multiple instances that access it. Their behavior is described by the management of insertion, deletion, and updates of tuples in the database and is a dynamic property.

#### Schema Level Behavior
> 



