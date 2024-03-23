---
mainImage: ../../../images/part-0.svg
part: 0
letter: a
lang: en
---

<div class="content">

This course is an introduction to modern web development with JavaScript. The main focus is on single-page applications implemented with React and supporting them with RESTful and GraphQL web services implemented with Node.js. The course also has parts on TypeScript, React Native, and Continuous integration.

Other topics include debugging applications, container technology, configuration, managing runtime environments, and databases.

The course is totally free of charge. You can get a certificate and even the University of Helsinki ECTS (European Credit Transfer and Accumulation System) credits for free.

### Prerequisites

Participants are expected to have good programming skills, basic knowledge of web programming and databases, and know the basics of the Git version control system. You are also expected to have perseverance and a capacity for solving problems and seeking information independently.

Previous knowledge of JavaScript or other course topics is not required.

How much programming experience is needed? It is hard to say, but you should be pretty fluent in *your* language. This level of fluency takes usually at least 100-200 hours of practice to develop.

### Course material

The course material is meant to be read one part at a time and in order.

The material contains exercises, which are placed so that the preceding material provides enough information for solving each exercise. You can do the exercises as you encounter them in the material, but it can also be beneficial to read all of the material in the part before starting with the exercises.

In many parts of the course, the exercises build one larger application one small piece at a time. Some of the exercise applications are developed through multiple parts.

The course material is based on incrementally expanding example applications, which change from part to part. It's best to follow the code along while making small modifications independently. The code of the example applications for each step of each part can be found on GitHub.

### Taking the course

The course contains fourteen parts, the first of which is numbered 0 for consistency with past iterations. One part corresponds loosely to one week (averaging 15-20 hours) of studying, but the speed of completing the course is flexible.

Proceeding from part *n* to part *n+1* is not sensible before enough know-how of the topics in part *n* has been achieved. In pedagogic terms, the course uses [Mastery Learning](https://en.wikipedia.org/wiki/Mastery_learning), and you are only intended to proceed to the next part after doing enough of the exercises of the previous part.

In parts 1-4 you are expected to do at least **all** of the exercises that are **not** marked with an asterisk(*). Exercises marked with an asterisk count towards your final grade, but skipping them does not prevent you from doing the compulsory exercises in the next parts. Parts 5-13 do not have asterisk-marked exercises since there is no similar dependency on previous parts.

You will need to complete the course as specified on Canvas and based on those due dates

### Course channel in Discord

You can discuss the course and related topics in our <a target='_blank' href='https://discord.gg/VRUKRxCJ95'>Discord</a>.
Discord will have different channels for both your learning partners as well as course-related conversations.
You will be expected to be active on Discord!

### Parts and completion

Full Stack studies consist of the core course and multiple extensions.

### How to get help in Discord/Telegram

When you ask for help for a problem in the Discord/Telegram group your question
should be as informative and precise as possible.
If your question looks like this

> *Adding a new person does not work, could you help me with that?*

it is quite likely that nobody will respond. The bug can be *anywhere*.

A better question could be

> *In the exercise 2.15 when I try to add a new person to the app,
> server responds to 403, despite the request looking ok to me.*
>
> The code looks like this
>
> ```js
>   // the relevant part of code is pasted here
>   // code should contain several console.log statements for helping the debugging
> ```
>
> The following gets printed to the console
>
> ```bash
>   // data printed to console
> ```
>
> The network tab looks like the following*
>
> [screenshot from the network console]
>
> All the code can be found here (a link to GitHub)

#### Parts 0-5 (core course) - Full Stack Web Development

Part of your grade for the course will be based off the total number of submitted exercises for parts 0-7 (including exercises marked with an asterisk).

 are calculated as follows:

| exercises    | grade for exercise portion    |
| ------------ | :------: |
| 138          | A        |
| 127          | B+        |
| 116          | B        |
| 105          | C        |
| 94           | C-       |
| 83           | D        |
| 72           | F        |

If you wish to pass the course, you must also complete the course exam. The exam does not count towards your final grade, but you must pass it. More info about the exam will be discussed via canvas and discord.

You can only take the exam after submitting a sufficient number of exercises. It is not wise in practice to take the exam immediately after submitting the critical number of exercises. The exam is the same and does not count towards your grade (you just need to pass it).

For the other modules, here's the number of exercises that you should submit.

| Module Number | total minimum exercises needed |
| --- | --- |
| 6 | 127 |
| 7 | 138 |

| Additional Modules | Module name | Minimum Exercises to submit | work needed |
| --- | --- | --- | --- |
| 8  | GraphQL | 22 | 1 |
| 9  | TypeScript | 24 | 1 |
| 10 | React Native | 25 | 2 |
| 11 | CI/CD | all | 1 |
| 12 | Containers | all | 1 |
| 13 | Relational Databases | all | 1 |

### Studying the course in a nutshell

How to study the course – instructions in a nutshell:

- Do the exercises. The exercises are submitted through GitHub and marking them as done on Canvas.

### Submitting exercises

If you are submitting exercises from different parts to the same repository, use an appropriate system for naming your directories. You can of course create a new repository for each part.  Make sure you use GitHub classroom for your portion.

Exercises are submitted **one part at a time**. You will mark the number of exercises you have completed from that module. Once you have submitted exercises for a part, you can no longer submit any more exercises for that part.

A system for detecting plagiarism is used to check exercises submitted to GitHub. If code is found from model answers or multiple students hand in the same code, the situation is handled according to the policy on plagiarism as outlined in the syllabus.

Many of the exercises build a larger application bit by bit. You will be expected to commit often, so that you show your work as you move through the course.  You will need to practice committing early and often.  It is the equivalent of showing your work in class.

### Full stack project

For the project, an application is implemented in React and/or Node, though implementing a mobile application in React Native is also possible.

You will be expected to work on the project either as a pair or as a group.

See [more information on the project](https://github.com/comp227/comp227/misc/blob/source/project.md).

### Before you start

Using the [Chrome browser](https://www.google.com/chrome/) is recommended for this course because it provides the best tools for web development. Another alternative is the [Developer Edition of Firefox](https://www.mozilla.org/en-US/firefox/developer/), which provides the same range of features.

The course exercises are submitted to GitHub, so Git must be installed and you should know how to use it. For instructions, see [Git and GitHub tutorial for beginners](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners).

Install a sensible text editor that supports web development. [Visual Studio Code](https://code.visualstudio.com/) is highly recommended.

Don't code with nano, Notepad or Gedit. NetBeans isn't very good for web development either. It is also rather heavy in comparison to [Visual Studio Code](https://code.visualstudio.com/).

Also, install [Node.js](https://nodejs.org/en/). The material has been done with version 18.13.0, so don't install any version older than that. See [Node.js installation instructions](https://nodejs.org/en/download/package-manager/).

Node package manager [npm](https://www.npmjs.com/get-npm) will be automatically installed with Node.js. We will be actively using npm throughout the course. Node also comes with [npx](https://www.npmjs.com/package/npx), which we'll need a few times.

### Typos in the material

If you find a typo in the material, or something has been expressed unclearly, or is simply bad grammar, submit a <i>pull request</i> to the course material in the [repository](https://github.com/comp227/comp227). For example, the markdown source code of this page can be found in the repository at <https://github.com/comp227/comp227/edit/source/src/content/0/en/part0a.md>

At the bottom of each part of the material is a link to <em>propose changes to the material</em>. You can edit the source code of the page by clicking on the link.

There are also lots of links in the material for many kinds of background material. If you notice that a link is broken (that happens too often...), propose a change or ping us in Discord if you do not find a replacement for the broken link.

</div>
