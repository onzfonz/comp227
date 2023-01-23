---
mainImage: ../../../images/part-5.svg
part: 5
letter: c
lang: en
---

<div class="content">

There are many different ways of testing React applications.
Let's take a look at them next.

Tests will be implemented with the same [Jest](http://jestjs.io/) testing library developed by Facebook that was used in the previous part.
Jest is configured by default to applications created with create-react-app.

In addition to Jest, we also need another testing library that will help us render components for testing purposes.
The current best option for this is [react-testing-library](https://github.com/testing-library/react-testing-library) which has seen rapid growth in popularity in recent times.

Let's install the library with the command:

```js
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

We also installed [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) which provides some nice Jest-related helper methods.

Let's first write tests for the component that is responsible for rendering a task:

```js
const Task = ({ task, toggleImportance }) => {
  const label = task.important
    ? 'make not important'
    : 'make important'

  return (
    <li className='task'> // highlight-line
      {task.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
```

Notice that the `li` element has the [CSS](https://reactjs.org/docs/dom-elements.html#classname) classname `task`,
that could be used to access the component in our tests.

### Rendering the component for tests

We will write our test in the *src/components/Task.test.js* file, which is in the same directory as the component itself.

The first test verifies that the component renders the contents of the task:

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Task from './Task'

test('renders content', () => {
  const task = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  render(<Task task={task} />)

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})
```

After the initial configuration, the test renders the component with the [render](https://testing-library.com/docs/react-testing-library/api#render) function provided by the react-testing-library:

```js
render(<Task task={task} />)
```

Normally React components are rendered to the ***DOM***.
The `render` method we used renders the components in a format that is suitable for tests without rendering them to the DOM.

We can use the object [screen](https://testing-library.com/docs/queries/about#screen) to access the rendered component.
We use screen's method [getByText](https://testing-library.com/docs/queries/bytext)
to search for an element that has the task content and ensure that it exists:

```js
  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
```

### Running tests

Create-react-app configures tests to be run in watch mode by default, which means that the `npm test` command will not exit once the tests have finished,
and will instead wait for changes to be made to the code.
Once new changes to the code are saved, the tests are executed automatically after which Jest goes back to waiting for new changes to be made.

If you want to run tests "normally", you can do so with the command:

```js
CI=true npm test
```

For Windows (PowerShell) users

```js
$env:CI=$true; npm test
```

**NB:** the console may issue a warning if you have not installed Watchman.
Watchman is an application developed by Facebook that watches for changes that are made to files.
The program speeds up the execution of tests and at least starting from macOS Sierra,
running tests in watch mode issues some warnings to the console, that can be removed by installing Watchman.

Instructions for installing Watchman on different operating systems can be found on the official Watchman website: <https://facebook.github.io/watchman/>

### Test file location

In React there are (at least)
[two different conventions](https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850)
for the test file's location.
We created our test files according to the current standard by placing them in the same directory as the component being tested.

The other convention is to store the test files "normally" in a separate *test* directory.
Whichever convention we choose, it is almost guaranteed to be wrong according to someone's opinion.

I do not like this way of storing tests and application code in the same directory.
The reason we choose to follow this convention is that it is configured by default in applications created by create-react-app.

### Searching for content in a component

The react-testing-library package offers many different ways of investigating the content of the component being tested.
In reality, the `expect` in our test is not needed at all

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Task from './Task'

test('renders content', () => {
  const task = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  render(<Task task={task} />)

  const element = screen.getByText('Component testing is done with react-testing-library')

  expect(element).toBeDefined() // highlight-line
})
```

The test fails if `getByText` does not find the element it is looking for.

We could also use [CSS-selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
to find rendered elements by using the method [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
of the object [container](https://testing-library.com/docs/react-testing-library/api/#container-1) that is one of the fields returned by the render:

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Task from './Task'

test('renders content', () => {
  const task = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const { container } = render(<Task task={task} />) // highlight-line

// highlight-start
  const div = container.querySelector('.task')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
  // highlight-end
})
```

There are also other methods, e.g. [getByTestId](https://testing-library.com/docs/queries/bytestid/),
that look for elements based on id-attributes that are inserted into the code specifically for testing purposes.

### Debugging tests

We typically run into many different kinds of problems when writing our tests.

Object `screen` has method [debug](https://testing-library.com/docs/queries/about/#screendebug) that can be used to print the HTML of a component to the terminal.
If we change the test as follows:

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Task from './Task'

test('renders content', () => {
  const task = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  render(<Task task={task} />)

  screen.debug() // highlight-line

  // ...

})
```

the HTML gets printed to the console:

```js
console.log
  <body>
    <div>
      <li
        class="task"
      >
        Component testing is done with react-testing-library
        <button>
          make not important
        </button>
      </li>
    </div>
  </body>
```

It is also possible to use the same method to print a wanted element to console:

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Task from './Task'

test('renders content', () => {
  const task = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  render(<Task task={task} />)

  const element = screen.getByText('Component testing is done with react-testing-library')

  screen.debug(element)  // highlight-line

  expect(element).toBeDefined()
})
```

Now the HTML of the wanted element gets printed:

```js
  <li
    class="task"
  >
    Component testing is done with react-testing-library
    <button>
      make not important
    </button>
  </li>
```

### Clicking buttons in tests

In addition to displaying content, the `Task` component also makes sure that when the button associated with the task is pressed,
the `toggleImportance` event handler function gets called.

Let us install a library [user-event](https://testing-library.com/docs/user-event/intro) that makes simulating user input a bit easier:

```bash
npm install @testing-library/user-event --save-dev
```

Testing this functionality can be accomplished like this:

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' // highlight-line
import Task from './Task'

// ...

test('clicking the button calls event handler once', async () => {
  const task = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  render(
    <Task task={task} toggleImportance={mockHandler} />
  )

  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})
```

There are a few interesting things related to this test.
The event handler is a [mock](https://facebook.github.io/jest/docs/en/mock-functions.html) function defined with Jest:

```js
const mockHandler = jest.fn()
```

A [session](https://testing-library.com/docs/user-event/setup/) is started to interact with the rendered component:

```js
const user = userEvent.setup()
```

The test finds the button *based on the text* from the rendered component and clicks the element:

```js
const button = screen.getByText('make not important')
await user.click(button)
```

Clicking happens with the method [click](https://testing-library.com/docs/user-event/convenience/#click) of the userEvent-library.

The expectation of the test verifies that the **mock function** has been called exactly once.

```js
expect(mockHandler.mock.calls).toHaveLength(1)
```

[Mock objects and functions](https://en.wikipedia.org/wiki/Mock_object)
are commonly used stub components in testing that are used for replacing dependencies of the components being tested.
Mocks make it possible to return hardcoded responses, and to verify the number of times the mock functions are called and with what parameters.

In our example, the mock function is a perfect choice since it can be easily used for verifying that the method gets called exactly once.

### Tests for the `Togglable` component

Let's write a few tests for the `Togglable` component.
Let's add the `togglableContent` CSS classname to the div that returns the child components.

```js
const Togglable = forwardRef((props, ref) => {
  // ...

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>
          {props.buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible} className="togglableContent"> // highlight-line
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})
```

The tests are shown below:

```js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Togglable from './Togglable'

describe('<Togglable />', () => {
  let container

  beforeEach(() => {
    container = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv" >
          togglable content
        </div>
      </Togglable>
    ).container
  })

  test('renders its children', async () => {
    await screen.findAllByText('togglable content')
  })

  test('at start the children are not displayed', () => {
    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })

  test('after clicking the button, children are displayed', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('show...')
    await user.click(button)

    const div = container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })
})
```

The `beforeEach` function gets called before each test, which then renders the `Togglable` component and saves the field `container` of the return value.

The first test verifies that the `Togglable` component renders its child component

```html
<div className="testDiv">
  togglable content
</div>
```

The remaining tests use the [toHaveStyle](https://www.npmjs.com/package/@testing-library/jest-dom#tohavestyle)
method to verify that the child component of the `Togglable` component is not visible initially,
by checking that the style of the `div` element contains `{ display: 'none' }`.
Another test verifies that when the button is pressed the component is visible,
meaning that the style for hiding the component **is no longer** assigned to the component.

Let's also add a test that can be used to verify that the visible content can be hidden by clicking the second button of the component:

```js
describe('<Togglable />', () => {

  // ...

  test('toggled content can be closed', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('show...')
    await user.click(button)

    const closeButton = screen.getByText('cancel')
    await user.click(closeButton)

    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })
})
```

### Testing the forms

We already used the `click` function of the [user-event](https://testing-library.com/docs/user-event/intro) in our previous tests to click buttons.

```js
const user = userEvent.setup()
const button = screen.getByText('show...')
await user.click(button)
```

We can also simulate text input with `userEvent`.

Let's make a test for the `TaskForm` component.
The code of the component is as follows.

```js
import { useState } from 'react'

const TaskForm = ({ createTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()
    createTask({
      content: newTask,
      important: Math.random() > 0.5,
    })

    setNewTask('')
  }

  return (
    <div className="formDiv">
      <h2>Create a new task</h2>

      <form onSubmit={addTask}>
        <input
          value={newTask}
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default TaskForm
```

The form works by calling the `createTask` function it received as props with the details of the new task.

The test is as follows:

```js
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskForm from './TaskForm'
import userEvent from '@testing-library/user-event'

test('<TaskForm /> updates parent state and calls onSubmit', async () => {
  const createTask = jest.fn()
  const user = userEvent.setup()

  render(<TaskForm createTask={createTask} />)

  const input = screen.getByRole('textbox')
  const sendButton = screen.getByText('save')

  await user.type(input, 'testing a form...')
  await user.click(sendButton)

  expect(createTask.mock.calls).toHaveLength(1)
  expect(createTask.mock.calls[0][0].content).toBe('testing a form...')
})
```

Tests get access to the input field using the function [getByRole](https://testing-library.com/docs/queries/byrole).

The method [type](https://testing-library.com/docs/user-event/utility#type) of the userEvent is used to write text to the input field.

The first test expectation ensures, that submitting the form calls the `createTask` method.
The second expectation checks, that the event handler is called with the right parameters - that a task with the correct content is created when the form is filled.

### About finding the elements

Let us assume that the form has two input fields

```js
const TaskForm = ({ createTask }) => {
  // ...

  return (
    <div>
      <h2>Create a new task</h2>

      <form onSubmit={addTask}>
        <input
          value={newTask}
          onChange={handleChange}
        />
        // highlight-start
        <input
          value={...}
          onChange={...}
        />
        // highlight-end
        <button type="submit">save</button>
      </form>
    </div>
  )
}
```

Now the approach that our test uses to find the input field

```js
const input = screen.getByRole('textbox')
```

would cause an error:

![node error that shows two elements with textbox since we use getByRole](../../images/5/40.png)

The error message suggests using `getAllByRole`.
The test could be fixed as follows:

```js
const inputs = screen.getAllByRole('textbox')

await user.type(inputs[0], 'testing a form...')
```

Method `getAllByRole` now returns an array and the right input field is the first element of the array.
However, this approach is a bit suspicious since it relies on the order of the input fields.

Quite often input fields have **placeholder** text that hints user what kind of input is expected.
Let us add a placeholder to our form:

```js
const TaskForm = ({ createTask }) => {
  // ...

  return (
    <div>
      <h2>Create a new task</h2>

      <form onSubmit={addTask}>
        <input
          value={newTask}
          onChange={handleChange}
          placeholder='write task content here' // highlight-line 
        />
        <input
          value={...}
          onChange={...}
        />    
        <button type="submit">save</button>
      </form>
    </div>
  )
}
```

Now finding the right input field is easy with the method [getByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext):

```js
test('<TaskForm /> updates parent state and calls onSubmit', () => {
  const createTask = jest.fn()

  render(<TaskForm createTask={createTask} />) 

  const input = screen.getByPlaceholderText('write here task content') // highlight-line 
  const sendButton = screen.getByText('save')

  userEvent.type(input, 'testing a form...')
  userEvent.click(sendButton)

  expect(createTask.mock.calls).toHaveLength(1)
  expect(createTask.mock.calls[0][0].content).toBe('testing a form...')
})
```

The most flexible way of finding elements in tests is the method `querySelector` of the `container` object, which is returned by `render`,
as was mentioned [earlier in this part](/part5/testing_react_apps#searching-for-content-in-a-component).
Any CSS selector can be used with this method for searching elements in tests.

Consider e.g. that we would define a unique `id` to the input field:

```js
const TaskForm = ({ createTask }) => {
  // ...

  return (
    <div>
      <h2>Create a new task</h2>

      <form onSubmit={addTask}>
        <input
          value={newTask}
          onChange={handleChange}
          id='task-input' // highlight-line 
        />
        <input
          value={...}
          onChange={...}
        />    
        <button type="submit">save</button>
      </form>
    </div>
  )
}
```

The input element could now be found in the test as follows:

```js
const { container } = render(<TaskForm createTask={createTask} />)

const input = container.querySelector('#task-input')
```

However, we shall stick to the approach of using `getByPlaceholderText` in the test.

Let us look at a couple of details before moving on.
Let us assume that a component would render text to an HTML element as follows:

```js
const Task = ({ task, toggleImportance }) => {
  const label = task.important
    ? 'make not important' : 'make important'

  return (
    <li className='task'>
      Your awesome task: {task.content} // highlight-line
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Task
```

the `getByText` command that the test uses does **not** find the element

```js
test('renders content', () => {
  const task = {
    content: 'Does not work anymore :(',
    important: true
  }

  render(<Task task={task} />)

  const element = screen.getByText('Does not work anymore :(')

  expect(element).toBeDefined()
})
```

Command `getByText` looks for an element that has the **same text** that it has as a parameter, and nothing more.
If we want to look for an element that ***contains*** the text, we could use an extra option:

```js
const element = screen.getByText(
  'Does not work anymore :(', { exact: false }
)
```

or we could use the command `findByText`:

```js
const element = await screen.findByText('Does not work anymore :(')
```

It is important to notice that, unlike the other `ByText` commands, `findByText` returns a promise!

There are situations where yet another form of the command `queryByText` is useful.
The command returns the element but *it does not cause an exception* if the element is not found.

We could use the command to ensure that something **is not rendered** to the component:

```js
test('does not render this', () => {
  const task = {
    content: 'This is a reminder',
    important: true
  }

  render(<Task task={task} />)

  const element = screen.queryByText('do not want this thing to be rendered')
  expect(element).toBeNull()
})
```

### Test coverage

We can easily find out the [coverage](https://github.com/facebookincubator/create-react-app/blob/ed5c48c81b2139b4414810e1efe917e04c96ee8d/packages/react-scripts/template/README.md#coverage-reporting)
of our tests by running them with the command.

```js
CI=true npm test -- --coverage
```

![terminal output of test coverage](../../images/5/18ea.png)

A quite primitive HTML report will be generated to the *coverage/lcov-report* directory.
The report will tell us the lines of untested code in each component:

![HTML report of the test coverage](../../images/5/19ea.png)

You can find the code for our current application in its entirety in the *part5-8* branch of
[this GitHub repository](https://github.com/comp227/part2-tasks/tree/part5-8).
</div>

<div class="tasks">

### Exercises 5.13.-5.16

#### 5.13: Blog list tests, step1

Make a test, which checks that the component displaying a blog renders the blog's title and author, but does not render its URL or number of likes by default.

Add CSS classes to the component to help the testing as necessary.

#### 5.14: Blog list tests, step2

Make a test, which checks that the blog's URL and number of likes are shown when the button controlling the shown details has been clicked.

#### 5.15: Blog list tests, step3

Make a test, which ensures that if the ***like*** button is clicked twice, the event handler the component received as props is called twice.

#### 5.16: Blog list tests, step4

Make a test for the new blog form.
The test should check, that the form calls the event handler it received as props with the right details when a new blog is created.

</div>

<div class="content">

### Frontend integration tests

In the previous part of the course material, we wrote integration tests for the backend that tested its logic and connected the database through the API provided by the backend.
When writing these tests, we made the conscious decision not to write unit tests, as the code for that backend is fairly simple,
and it is likely that bugs in our application occur in more complicated scenarios than unit tests are well suited for.

So far all of our tests for the frontend have been unit tests that have validated the correct functioning of individual components.
Unit testing is useful at times, but even a comprehensive suite of unit tests is not enough to validate that the application works as a whole.

We could also make integration tests for the frontend.
Integration testing tests the collaboration of multiple components.
It is considerably more difficult than unit testing, as we would have to for example mock data from the server.
We chose to concentrate on making end-to-end tests to test the whole application.
We will work on the end-to-end tests in the last chapter of this part.

### Snapshot testing

Jest offers a completely different alternative to "traditional" testing called [snapshot](https://facebook.github.io/jest/docs/en/snapshot-testing.html) testing.
The interesting feature of snapshot testing is that developers do not need to define any tests themselves, it is simple enough to adopt snapshot testing.

The fundamental principle is to compare the HTML code defined by the component after it has changed to the HTML code that existed before it was changed.

If the snapshot notices some change in the HTML defined by the component, then either it is new functionality or a "bug" caused by accident.
Snapshot tests notify the developer if the HTML code of the component changes.
The developer has to tell Jest if the change was desired or undesired.
If the change to the HTML code is unexpected, it strongly implies a bug,
and the developer can become aware of these potential issues easily thanks to snapshot testing.

</div>
