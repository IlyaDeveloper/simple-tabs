# Simple Tabs

> Below, I described the entire presentation on the project environment, project structure, configuration files and description, etc.

## Getting started

- **Before check in your system node.js, if in your system not have nodeJS please download package with [nodejs.org](https://nodejs.org/en/) and install node**

- **Install all packages and dependencies** :

```
   $ npm install
```

- **Launch project in dev mode**:

```
   $ npm run start
```

- **Project build**:

```
   $ npm run build
```

- **Others commands**:

```
   $ npm run precompile       // This command is simply a combination of the cleaning and copying
                                 files in the output directory

   $ npm run build-map        // Build project used create source map file
   $ npm run deploy           // Deploy the project using ssh, so you need to enter the correct accesses options
                                 deploy[_server, _password, _path, _port] in the `.npmrc` file, if you have ssh keys installed,
                                 then the password field 'pass' can be left unchanged

   $ npm run clean-dist       // Complete cleaning of the directory
```

## How to edit in localhost

- First to do this, you need start localhost server, just simple i your terminal run next command:
  $ npm run start
- Then open in you browser [localhost](http://localhost:1234/)

## Importing templates

## Global and meta variables
