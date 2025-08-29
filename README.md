1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getElementById it select single id in one time.it retuns null if id element not found.
getElementsByClassName it select multiple class in one time it return Returns a live HTMLCollection of elements
querySelector select first element  that matches a specified CSS selector it Returns a single Element object or null
querySelectorAll Selects all elements that match a specified CSS selector it return satic nodlist of elements

2.How do you create and insert a new element into the DOM?

//creat a new elemnt by using js.
 creat a variable where to set
  and  now set the new element using appendChild
  ex:
=> const newDiv = document.createElement('div') 
 const old = document.body
 old.appendChild(newDiv)
3.What is Event Bubbling and how does it work?
=> Event bubbling is the default way JavaScript event listeners are triggered in a DOM.
 an event on a nested element first triggers its own handler, then "bubbles up" to its parent, grandparent, and so on, until it reaches the root of the document
 
 4.What is Event Delegation in JavaScript? Why is it useful?
 => Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements
    Improved Performance and Efficiency,Handling Dynamic Content,Cleaner and More Maintainable Code

5.What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault() deals with the default action of an event, while stopPropagation() deals with the flow or propagation of an event through the DOM
