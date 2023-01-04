# Running COMP 227 on your environment

1. Fork the repository
2. Clone your fork
3. Verify that you are running Node version 10 ([NVM](https://github.com/nvm-sh/nvm) reccomended for managing node versions)
5. Install gatsby globally `npm install -g gatsby-cli`
4. Install dependencies with `npm install`
5. Start the application with `npm start`

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

Also, if you need to replace html tags with their corresponding markdown, you can use the regular expression portion in vscode to replace tags with other elements.

For example, here is one such regular expression that you can use

```text
<i>([A-Za-z0-9 .,'":;!?=>|&/\-\\_\(\)\+\{\}\[\]]+)</i>

and then replace it with

`$1`
```

You can also use `\*` for stars instead there

## Setting up the PR

1. Prettyfy your code with `npm run format`
2. Create a new branch for your changes
3. Create the PR from that branch to the master branch
