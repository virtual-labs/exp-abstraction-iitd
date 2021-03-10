### Interface in Java

An interface in Java is a blueprint of a **class**. It has static constants and abstract methods.The interface in Java is a mechanism to achieve abstraction. There can be only abstract methods in the Java interface, not method body. It is used to achieve **abstraction and multiple inheritance in Java**.

### Why use Java interface?

There are mainly three reasons to use interface. They are given below.
-	It is used to achieve abstraction.
-	By interface, we can support the functionality of multiple inheritance.
-	It can be used to achieve loose coupling.
-	
### Syntax

```sh
	interface <interface_name>
	{ 
	    // declare constant fields  
	    // declare methods that abstract   
	    // by default.  
	}
	
```

### Java Interface Example


```sh
	interface Bank{  
	float rateOfInterest();  
	}  
	class SBI implements Bank
	{  
	public float rateOfInterest()
	{return 9.15f;}  
	}  
	class PNB implements Bank
	{  
	public float rateOfInterest()
	{return 9.7f;} 
	}  
class TestInterface2
{  
public static void main(String[] args)
{  
Bank b=new SBI();  
System.out.println("ROI: "+b.rateOfInterest());  
}
}

```
