# Running COMP 227 on your environment

1. Fork the repository
2. Clone your fork
3. Verify that you are running Node version 10 ([NVM](https://github.com/nvm-sh/nvm) reccomended for managing node versions)
4. Install gatsby globally `npm install -g gatsby-cli`
5. Install dependencies with `npm install`
6. Start the application with `npm start`

## Some rules to follow

This repository uses markdown lint to enforce a few rules that are based on the repository.  Those rules are:

```json
"markdownlint.config": {
            "default": true,
            "MD003": {
              "style": "atx" //atx is the current style used in the document
            },
            "MD004": {
              "style": "dash" //I use dashes as that is what github defaults to with unordered lists
            },
            "MD007": {
              "indent": 4 //again, completely subjective to use 4 spaces as indentation for unordered sublists
            },
            "MD013": false, //turns off max number of characters on a line and can be configured more
            "MD033": false, //turns off the use of inline HTML
            "MD035": {
                "style": "---" //style to use for horizontal rules
            },
            "MD041": false, //turns off rule about first line in file needing to be a top-level header
            "MD049": { //only followed for controversial branch
                "style":"asterisk"
            },
            "MD050": { //only followed for controversial branch
                "style":"asterisk"
            }
    },
```

### Find and replace commands

Also, if you need to replace html tags with their corresponding markdown, you can use the regular expression portion in vscode to replace tags with other elements.

For example, here is one such regular expression that you can use

```text
<i>([A-Za-z0-9 .,'":;!?=>|&/\-\\_\(\)\+\{\}\[\]]+)</i>

and then replace it with

`$1`
```

You can do the same with `<em>`.
or use `\*` for stars instead here

### Other useful find/replace commands

#### For splitting up lines that are very long

Feel free to change the numbers for the number of characters.

```text
(.{75,}), (.{70,})
```

and then replace with

```text
$1,
$2
```

OR

```text
(.{75,}) and (.{70,})
```

replace with

```text
$1
and $2
```

You can also use other words like with, or, etc.

#### For general sentence breakup

```text
. ([A-Z])
? ([A-Z])
! ([A-Z])
```

Do a fairly good job

For transferring from part 9 to 8

search

```text
9.
/9/
part9
```

should give you 95% of the stuff to transfer over

Searching for long links?

Search like this to find long links that start with something and have a long link to break that part out.

```text
(^[^\\!]{50,}) \[(.{68,})\)
```

and replace with

```text
$1
[$2)
```

Similarly for the other side go with:

```text
[^\\!]\[(.{68,})\) (.{60,})
```

and replace with

```text
 [$1)
$2
```

### For the transfering over

Remember to checkout particular files instead of doing the whole branch

## Setting up the PR

1. Prettyfy your code with `npm run format`
2. Create a new branch for your changes
3. Create the PR from that branch to the master branch
