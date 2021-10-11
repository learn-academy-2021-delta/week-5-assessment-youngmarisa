# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most ruby methods are accessors, meaning they do not change the original array whereas mutators will completely modify the input variable. However, the bang operator can be used with a method to make it a mutator method.  

  Researched answer: Ruby accessor methods return the orginal variables' values. Ruby's accessor methods consist of attr_reader, attr_writer, and attr_accessor. Using these accessor methods, references the behavior of the instance variable only once; therefore, it is no longer referenced directly throughout the program. Attr_reader allows you to get the value of the instance variable, attr_writer allows you to set the value, and attr_accessor allows you to do both. Attr_accessor is a shortcut to set up getter and setter methods in Ruby. It is a way to set and get values from outside the class. 



2. What is a block in Ruby?

  Your answer: Ruby blocks are anonymous functions that use the keywords do/end or use curly braces {} to indicate a code block. The code within the do/end or {} block are executed when passed through a Ruby method. 

  Researched answer: Blocks are assigned a name and consist of chunks of code. The code is enclosed with either a do/end or {}. Do/end is primarily used for code that is multiple lines long whereas the curly brakets are used for single line code. Blocks can have multiple paramaters such as values, indexes, and arrays. Blocks are passed into a method. 



3. What is a gem?

  Your answer: A gem is a package manager for the Ruby language.  This package manager allows code in Ruby to be easily shared. 

  Researched answer: A gem is a library of code functionality. Gems can be used in Ruby applications to extend or modify functionality. They are most commonly used between developers to distribute reusable functionality for Ruby applications. Each gem has a name, version and platform. They are organized by lib, test (sepc), Rakefile, README, and gemspecs. The code for the gem lies in the lib directory. The testing aspect is stored in the test directory. Rakefile automates the tests and generates the code. The documentation for the code is in the README file. Lastly, the gemspec or gem specification holds the information about the gem's author, the purpose for the gem, and the creation time. 



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database that uses rows and columns in a table to sort data. Databases can consist of multiple tables of data that relate to one another. Non-relational databases don't follow a table based way to store data. 

  Researched answer: Relational database represent data in tables where each row holds a primary key and the columns of the table how the data information. Relational databases provide access to data that are related to one another and it makes the relationship between each data point clear. Non-relational databases is a storage model that is more optimized for the data type it is storing. Non-relational databases are more selective in the type of data they support as well as how the data can be queried. There are four tipes of NoSQL databases: document oriented databases, key-value stores, wide-column stores, and graph stores. 



5. What are primary keys? Why are they important?

  Your answer: Primary keys in databases give each data row a unique ID. This is important because rows may have similar or even the same data information but the primary key given to each row seperates them from being mixed up or confused with each other. 

  Researched answer: A primary key is used in relational databases to uniquely identify each table row. This allows the data within the table to be quickly identified since a table canot have more than one primary key. These keys cannot contain null values. 



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Representational State Transfer (REST) routing is a standard for creating resuable and efficient routes by asserting thw routes that complete common actions have names that accuretly depict the action it is performing. It is a route that provides mapping from HTTP to controller CRUD actions. 

2. JSON: JSON or JavaScript Object notation is a text-based format that is used to represent structured data. It is primarily used for data transmission in web applications. 

3. ERB: Embedded Ruby or ERB is a file structure that allows developers to code HTML with Ruby code embedded in the view file. 

4. Params: Params also known as URL parameters or query strings. They are used to dynamically modify the view or to query the database by passing in additional information into a controller method. 

5. API: Application Programming Interface is a software that allows two seperate applications or two seperate computers to communicate with each other. 
