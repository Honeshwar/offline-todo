# offline-todo
Create an offline TODO App for the browser using React JS.

- Hosted link: https://offline-todo.netlify.app/
## Key Features Required:
+ A simple input bar to add Todo(s) on pressing the return key.
+ A list of TODO cards where each todo is appended on creation.
+ Clicking on a TODO card should mark the TODO as complete and move it to the
bottom of the list.
+ The active TODO cards should appear in order of creation (most recent on top), while
the completed todo cards should appear in order of completion (most recent on top).
+ A reset button on the top right corner of the App to clear all Todo(s) and return to the
initial state.
+ Hitting the refresh button (including hard refresh) in the browser should not cause
any change in the state of the app (it should work like a regular offline app).


# My Approach
- I use local storage to store todos.
- Use context API for state management.
- use tailwindcss for styling.


# Technology i used
    ReactJS and TailwindCSS.
## How to setup on local machine

To use this repository your machine should have VsCode ( or any code editor), [node](https://nodejs.org/en/), npm, and git. Now check for this things is install or not :

```bash
  node --version
  npm --version
  git --version
```
Clone repository : open terminal and hit this command in your code editor

```bash
  git clone --branch master https://github.com/Honeshwar/offline-todo.git
```

Install dependencies :

```bash
  npm install
```

Now, run the application using this command :

```bash
  npm start
```   
## Screenshots

![App Screenshot](https://honeshwar.github.io/offline-todo/src/assets/p.png)

![App Screenshot](https://honeshwar.github.io/offline-todo/src/assets/d.png)
