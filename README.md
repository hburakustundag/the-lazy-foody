<h1>The Lazy Foody</h1>
<p>A web application where users select ingredients and get dish suggestions containing their chosen ingredients.</p>

https://user-images.githubusercontent.com/89309670/207581831-e92572c6-c08c-4102-8c57-81daf2da4a20.mp4

<h2>Build and Run</h2>

<p>Server can be run with <strong>docker-compose up</strong></p>

<h2>How It's Made:</h2>

<p><strong>Tech used:</strong> HTML, CSS, Bootstrap, JavaScript, TypeScript, React, Node, ExpressJS, PostgreSQL, Redis, Jest</p>

<p>First, I decided to use Postgres as a database and created a simple backend with routers and controllers. Then I wrote unit tests for routes using Jest. I added a logging mechanism that logs HTTP requests with Express's Morgan middleware. To understand caching with Redis, I implemented caching mechanisms to the getDishById and getIngredientById methods of both the dish and the ingredient controllers. Provided simple validations to prevent users from using illogical inputs on some routes. Finally, migrated the project from JavaScript to TypeScript and created a simple front-end with React.</p>

<h2>Optimizations and Improvements:</h2>

<ul>
<li>Integration tests & refactoring</li>
<li>Instead of suggesting just the names, suggesting dishes along with preparation instructions, pictures, ingredient measurments etc.</li>
<li>Updating front end to be more detailed.</li>
<li>Creating account creation and shopping list features for the users.</li>
</ul>

<h2>Lessons Learned:</h2>

<ul>
<li>This app was my first big project. I've learned many crucial lessons such as how cache works, how to write more readable and reusable code, how relational databases work, why should we add validations, why should we write tests, etc.</li>
</ul>
