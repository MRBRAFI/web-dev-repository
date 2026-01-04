#### 1) What is the difference between var, let, and const?
---> Var and let are the variables which takes any variable(!reserved word) and can be reinserted or changed the values inside those variables but Var has hoisting problem which makes the variable global sometimes which can make conflict which let doesn't have because of TDZ. On the other hand, const is also a way of calling variables but it doesn't let us to change the value inside it because it
takes variables as constant values.

#### 2) What is the difference between map(), forEach(), and filter()? 
---> 1-->.map() method is usually used to change the values/elements or update the values/elements inside an array or array like object

---> 2-->.forEach() method is used to get any value/element inside an array or array like object but it does not return anything that's why forEach() method is only to iterate any array or equvalent.

---> 3-->.filter() mehtod is usually used to get or remove specific values/elements inside an array. This method filters out values/elements if the given condition is matched or only shows the filtered values/elements if the conditions is matched.

***So the difference between map(),forEach() and filter() methods is mainly their workprocess and their outputs

#### 3) What are arrow functions in ES6?
---> The arrow function in ES6 is mainly a shortened version of normal function(any) and also with less functionalities and it's own traits.
  # Arrow function is best for one liner executions in functions.
  # It has implicit return function so there is no need to return anything, it returns itself but not if the function operations are in{curly braces}.
  # It reduces the amount of syntax which are used in normal function.

  but it has some downgrades too because it does not return any (this), and it can not construct elements with new keyord.

#### 4) How does destructuring assignment work in ES6?
---> Destructuring assignment in ES6 is a special syntax that allows us to unpack values from arrays or properties from objects into other variables. Instead of manually accessing values one by one using indexes destructuring lets us extract them in a short, clean, and readable way which we can access in new variables where we have inserted the destructured value.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
---> Template literals are a revolution kind of thing in ES6 because it removes the burden of typing inside quotations, Template literals can be called by backticks (``) and it allows 1-->string interpolation (${anything}), 2-->Multi-Line-String (can be as many lines needed inside backticks(``)) 3-->And isinde String-interpolation we can evaluate any expression (${9sept at 11:59pm = 🥶}) which we can never do so easily with string concatination.
