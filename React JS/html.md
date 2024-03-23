What is the purpose of the <!DOCTYPE html> declaration?

Answer: The <!DOCTYPE html> declaration specifies the HTML version being used and helps browsers render web pages correctly in standards mode.

Explain the difference between <div> and <span> elements.

Answer: <div> and <span> are both container elements used for styling purposes. The <div> element is a block-level container, typically used for grouping larger sections of content, while the <span> element is an inline container, used for styling smaller sections of content.

How do you create a hyperlink in HTML?

Answer: Hyperlinks in HTML are created using the <a> (anchor) element with the href attribute specifying the URL.
html
Copy code
<a href="https://example.com">Click here</a>

What is the <meta> tag used for in HTML?

Answer: The <meta> tag is used to provide metadata about the HTML document, such as character encoding, viewport settings, author information, etc.

What is the difference between inline and block-level elements in HTML?

Answer:
Inline elements flow within the text and do not start on a new line. Examples include <span>, <a>, <img>.
Block-level elements start on a new line and occupy the full width available. Examples include <div>, <p>, <h1>.

How do you include external CSS and JavaScript files in an HTML document?

Answer: External CSS files are included using the <link> tag within the <head> section, while external JavaScript files are included using the <script> tag either in the <head> or <body> section.
html
Copy code
<!-- External CSS -->
<link rel="stylesheet" href="styles.css">

<!-- External JavaScript -->
<script src="script.js"></script>

What does the alt attribute in the <img> tag do?

Answer: The alt attribute provides alternative text for an image, which is displayed if the image fails to load or for accessibility purposes.

Explain the difference between the <ol> and <ul> tags.

Answer:
<ol> (Ordered List) creates a numbered list.
<ul> (Unordered List) creates a bulleted list.

How can you create a new line in HTML without using the <br> tag?

Answer: You can create a new line using the <p> (paragraph) or <div> (division) elements, which are block-level elements and start on a new line by default.

What is the purpose of the <header>, <nav>, and <footer> tags in HTML5?

Answer:
<header>: Represents introductory content typically at the beginning of a page or section.
<nav>: Represents a section of navigation links.
<footer>: Represents footer content typically at the end of a page or section.

How do you create a table in HTML?

Answer: Tables in HTML are created using the <table> element, with additional elements like <tr> (table row), <th> (table header), and <td> (table data) for rows and cells.
html
Copy code
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>30</td>
    </tr>
</table>

Explain the purpose of semantic HTML elements.

Answer: Semantic HTML elements provide meaning to the content they enclose, making it easier for search engines, screen readers, and developers to understand the structure of a web page. Examples include <header>, <nav>, <main>, <footer>, etc.

What is the title attribute used for in HTML?

Answer: The title attribute provides additional information about an element, typically displayed as a tooltip when hovering over the element.

What is an HTML form, and how do you create one?

Answer: An HTML form is used to collect user input. It is created using the <form> element, with various input elements like <input>, <textarea>, <select>, etc., for gathering data.
html
Copy code
<form action="/submit" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <button type="submit">Submit</button>
</form>

How do you comment out code in HTML?

Answer: HTML comments are written between <!-- and -->.
html
Copy code
<!-- This is an HTML comment -->

What is the purpose of the <script> tag in HTML?

Answer: The <script> tag is used to embed or reference JavaScript code within an HTML document.
What is the difference between <strong> and <b> tags?

Answer: Both <strong> and <b> tags are used to make text bold,