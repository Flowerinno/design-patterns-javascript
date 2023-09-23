# SOLID Principles

### Single Responsibility Principle (SRP):

Principle: A class should have only one reason to change, meaning it should have only one responsibility or job.
Explanation: This principle encourages you to design classes that have a clear and specific purpose. When a class has a single responsibility, it's easier to understand, maintain, and extend without affecting other parts of the system.

### Open/Closed Principle (OCP):

Principle: Software entities (classes, modules, functions) should be open for extension but closed for modification.
Explanation: This principle promotes the idea that you should be able to extend the behavior of a module without modifying its source code. You achieve this through techniques like inheritance, interfaces, and polymorphism.

### Liskov Substitution Principle (LSP):

Principle: Subtypes must be substitutable for their base types without altering the correctness of the program.
Explanation: This principle emphasizes that derived classes (subtypes) should be able to replace their base classes (super-types) without causing unexpected behavior. In other words, if a class extends another class, it should adhere to the same contract and behaviors as the base class.

### Interface Segregation Principle (ISP):

Principle: Clients should not be forced to depend on interfaces they do not use. In other words, a class should not be forced to implement methods it doesn't need.
Explanation: This principle advises you to keep interfaces small and specific, tailored to the needs of the classes that implement them. It helps avoid bloated interfaces that require classes to implement unnecessary methods.

### Dependency Inversion Principle (DIP):

Principle: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
Explanation: This principle encourages you to decouple classes and modules by introducing interfaces or abstractions. High-level modules (e.g., business logic) should depend on abstractions (e.g., interfaces) rather than specific implementations. This reduces coupling and makes the system more flexible and easier to maintain.