# Patterns  in android : Introduction

Okay, I have had enough of this! Since last 2 years of Android dev life , I have been hearing stuff like "this repo uses MVVM architecture, observer pattern, MVP ,MVC, CLEAN, architecture pattern, repository pattern, pattern,pattern...." and it goes on and on. I have to work on this someday coz people consider an app's code without these "Patterns" as bad, coupled and non expandable. And they are right i considering that, These patterns are important if we wanna right professional softwares. So let's get started.  

I am going to follow straight wikipedia for learning about these patterns in general, and then relating them with how much is used in android. I was hoping to write a single all in one article for everything about patterns, but looks like there are a lot of them , so i already changed this article's title to "Patterns  in android : Introduction" (indicating a possible sequel) from "All about Patterns"("indicating an overview").  
For each "pattern", i don't know what am going to write, but i would possiby try to add summarized information regarding how could it be addded in an app, possible advantages/disadvantages and use cases. I am also thiking of dedicating seperate articles for adavnce usages,best practises, optimisations and more examples for each pattern, but let's see how long it goes.  

---  
## Introduction  

[wiki.](https://en.wikipedia.org/wiki/Software_design_pattern)  
In software engineering, a **Software design pattern** or simply a **Pattern** is a **general,reusable solution** to a common problem.Note that by defination, design patterns are not direct code but just a description/template , a set of best practises on how to solve a problem that can be used in many different situations.  

[wiki](https://en.wikipedia.org/wiki/Architectural_pattern)  
**Architectural patterns** are similar to software design patterns but have a broader scope. The architectural patterns address various issues in software engineering, such as computer hardware performance limitations, high availability and minimization of a business risk. Some architectural patterns have been implemented within software frameworks. 

[github link with lots of books](https://github.com/dieforfree/edsebooks)
Patterns were first defined by Christopher Alexander in 1977-78. These Design patterns were originally grouped into the categories:  
-  **creational** patterns,  
-  **structural** patterns, and  
-  **behavioral** patterns, and described using the concepts of delegation, aggregation, and consultation.  


### Creational Design Patterns  

|Name | Description																																																																								|  
|---- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Abstract factory Pattern 						| Provide an interface for creating  families of related or dependent objects without specifying their concrete classes.                                                 																						|  
| Builder Pattern          						| Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.                       																						|  
| Dependency Injection     						| A class accepts the objects it requires from an injector instead of creating(and handling??) the objects directly.                                                     																						|  
| Factory method           						| Define an interface for creating a  single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses 																						|  
| Lazy initialization							| Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. This pattern appears in the GoF catalog as "virtual proxy", an implementation strategy for the Proxy pattern.	|    
| Multiton										| Ensure a class has only named instances, and provide a global point of access to them																																											|    
| Object pool									| Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of connection pool and thread pool patterns. 																			|    
| Prototype										| Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.													|    
| Resource acquisition is initialization (RAII) | Ensure that resources are properly released by tying them to the lifespan of suitable objects.																																								|    
| Singleton										| Ensure a class has only one instance, and provide a global point of access to it																																												|      


### Structural patterns  

|Name 								| Description																																																																											|  
|---------------------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Adapter, Wrapper, or Translator	| Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator 																			|    
| Bridge 							| Decouple an abstraction from its implementation allowing the two to vary independently. 																																																								|    
| Composite 						| Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. 																																						|    
| Decorator 						| Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality. 																																		|    
| Extension Object 					| Adding functionality to a hierarchy without changing the hierarchy. 																																																													|    
| Facade 							| Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use. 																																									|    
| Flyweight 						| Use sharing to support large numbers of similar objects efficiently 																																																													|    
| Front Controller 					| The pattern relates to the design of Web applications. It provides a centralized entry point for handling requests. 																																																	|    
| Marker 							| Empty interface to associate metadata with a class. 																																																																	|      
| Module 							| Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity 																																																	|    
| Proxy 							| Provide a surrogate or placeholder for another object to control access to it. 																																																										|    
| Twin 								| Twin allows modeling of multiple inheritance in programming languages that do not support this feature. 																																																				|    


### Behavioral Patterns

|Name 										| Description																																																																								|    
|------------------------------------------ |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Blackboard/Blackboard System 				| Artificial intelligence pattern for combining disparate sources of data (see blackboard system) 																																																			|    
| Chain of responsibility			 	   	| Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it. 																						|    
| Command 					   				| Encapsulate a request as an object, thereby allowing for the parameterization of clients with different requests, and the queuing or logging of requests. It also allows for the support of undoable operations. 																							|    
| Interpreter 								| Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language. 																																					|    
| Iterator 									| Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation 																																													|    
| Mediator 									| 	Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it allows their interaction to vary independently. 																					|    
| Memento 									| Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later. 																																								|  
| Null Object 								| Avoid null references by providing a default object. 																																																														|  
| Observer or Publisher-Subscriber pattern	| Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically 																																				|  
| Servant/Utility class Pattern 			| Define common functionality for a group of classes. The servant pattern is also frequently called helper class or utility class implementation for a given set of classes. The helper classes generally have no objects hence they have all static methods that act upon different kinds of class objects	|  
| Specification								| Recombinable business logic in a Boolean fashion. 																																																														|  
| State										| Allow an object to alter its behavior when its internal state changes. The object will appear to change its class. 																																														|  
| Strategy									| Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it 																																				|  
| Template method							| 	Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure 																								|    
| Visitor 									| Represent an operation to be performed on the elements of an object structure. Visitor lets a new operation be defined without changing the classes of the elements on which it operates 																													|    

### Concurrency Patterns  


|Name							| Description	|  
|------------------------------	|--------	|  
| Active Object					| 	Decouples method execution from method invocation that reside in their own thread of control. The goal is to introduce concurrency, by using asynchronous method invocation and a scheduler for handling requests |  
| Balking						| Only execute an action on an object when the object is in a particular state. |  
| Binding Properties			| Combining multiple observers to force properties in different objects to be synchronized or coordinated in some way. |  
| Compute kernel				| The same calculation many times in parallel, differing by integer parameters used with non-branching pointer math into shared arrays, such as GPU-optimized Matrix multiplication or Convolutional neural network.|  
| Double-checked locking		|	Reduce the overhead of acquiring a lock by first testing the locking criterion (the 'lock hint') in an unsafe manner; only if that succeeds does the actual locking logic proceed. Can be unsafe when implemented in some language/hardware combinations. It can therefore sometimes be considered an anti-pattern. |  
| Event-based Asynchronous 		| Addresses problems with the asynchronous pattern that occur in multithreaded programs |  
| Guarded Suspension 			| Manages operations that require both a lock to be acquired and a precondition to be satisfied before the operation can be executed |  
| Join 							| Join-pattern provides a way to write concurrent, parallel and distributed programs by message passing. Compared to the use of threads and locks, this is a high-level programming model. |  
| Lock 							| One thread puts a "lock" on a resource, preventing other threads from accessing or modifying it |  
| Messaging design Pattern(MDP) | Allows the interchange of information (i.e. messages) between components and applications. |  
| Monitor Object 				| An object whose methods are subject to mutual exclusion, thus preventing multiple objects from erroneously trying to use it at the same time. |  
| Reactor 						| 	A reactor object provides an asynchronous interface to resources that must be handled synchronously. |  
| Read-Write Lock				| Allows concurrent read access to an object, but requires exclusive access for write operations. |  
| Scheduler 					| Explicitly control when threads may execute single-threaded code. |  
| Thread Pool					| A number of threads are created to perform a number of tasks, which are usually organized in a queue. Typically, there are many more tasks than threads. Can be considered a special case of the object pool pattern. |  
| Thread speciefic storage 		| Static or "global" memory local to a thread. |  

Other than these design pattern, there are architeture patterns, which, as we said earlier cover a broader scope than a design pattern. They are meant to be best practises for whole product or module, So they often encapsulates multiple design patterns.  
Their are many architecture patterns out there based onthe domains  it is being used, [wiki covers them in great detail](https://en.wikipedia.org/wiki/Architectural_pattern).  

Personally I would rather have a new entry being added to this table in Domain named "Application Design and Development" with Architecture patterns like:  
- MV* Family(MVP/MVC/MVVM/MVI/CLEAN)
- JetPack's Navigation Architecture And lifecycle classes
- Kotlin's coroutie pattern
- The Repository pattern
- [Reactive, offline first app pattern](https://adityaladwa.wordpress.com/2016/10/25/offline-first-reactive-android-apps-repository-pattern-mvp-dagger-2-rxjava-contentprovider/)  

The same book documents patterns based on following nomenclature:  

- **Pattern Name and Classification**: A descriptive and unique name that helps in identifying and referring to the pattern.  
- **Intent**: A description of the goal behind the pattern and the reason for using it.  
- **Also Known As**: Other names for the pattern.  
- **Motivation (Forces)** : A scenario consisting of a problem and a context in which this pattern can be used.  
- **Applicability**: Situations in which this pattern is usable; the context for the pattern.  
- **Structure**: A graphical representation of the pattern. Class diagrams and Interaction diagrams may be used for this purpose.  
- **Participants**: A listing of the classes and objects used in the pattern and their roles in the design.  
- **Collaboration**: A description of how classes and objects used in the pattern interact with each other.  
- **Consequences**: A description of the results, side effects, and trade offs caused by using the pattern.  
- **Implementation**: A description of an implementation of the pattern; the solution part of the pattern.  
- **Sample Code**: An illustration of how the pattern can be used in a programming language.  
- **Known Uses**: Examples of real usages of the pattern.  
- **Related Patterns**: Other patterns that have some relationship with the pattern; discussion of the differences between the pattern and similar patterns.  

i will be covering them in this manner only.  

Ciao  
