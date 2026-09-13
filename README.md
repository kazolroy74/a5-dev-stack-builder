Project Name: Dev Stack

Technology Used:
i. React.js
ii. Tailwind CSS + DaisyUI
iii. JavaScript (ES6+)
iv. React-Toastify
v. JSON (fetched via API-style fetch call)
vi. Vite


i. What is JSX, and why is it used?
    JSX lets us write HTML-like code in JavaScript. It makes React UI code easier to write and read.
ii.	Difference between props and state?
    Props are data passed from parent to child. State is data managed inside a component.
iii. What does useState do, and where did you use it?
    useState stores and updates data in a component. I used it to store the user's selected technologies.
iv.	What does useEffect do, and why did you need it for JSON data?
    useEffect runs code after rendering. I used it to fetch JSON data when the component loads.
v. Why does .map() need a unique key?
    A unique key helps React identify each item and update the list correctly.
vi. What is conditional rendering? Give an example.
    Conditional rendering means showing UI based on a condition. For example, showing an empty message when the stack is empty.
vii. How does parent-child data flow work?
    The parent sends data to the child using props. The child can send data back using a function passed by the parent.



