# Code Watchdog
An automated tool to look for changes in your code-base and execute SCA tools on it.  
For a better reading experience [visit the documentation page](https://ramit-mitra.github.io/code-watchdog/) hosted in GitHub.

### What does it do ?
This tool continuously monitors your codebase for file changes and based on the type of file, it can execute actions.  
Say, you're working on a PHP project and you want to run phpcbf each time you make modifications to a file, this tool helps you achieve that, and much more !

### What language does it support ?
Everything!  
It can detect any language based on the file extension and can then act accordingly. For a curated list of code analysis tools that you can use with this, take a look at, https://github.com/mre/awesome-static-analysis 

### Pre-requisites  
* NodeJS and NPM are required to run this tool
* Core dependencies like PHP or JAVA are required to be installed and available in system path
* Tested using NodeJS v8.11.2

### What comes bundled with this ?
It comes preconfigured to run for PHP, JS and CSS filetypes. You can extend it furthur as per your usecase. For a detailed technical overview, continue reading the Technical Documentation below. 

### Collaboration 
Want to help make this tool even better ?  
Fork and keep building, when your happy with the changes, raise a PR. I will be happy to look into it. 

## Application components

### *config :*   
*Provides tool configuration settings*   
`dir` : Directory to watch for code changes, configure this to point to the root of your project directory.

### *hook :*   
*Directs the tool to execute set of commands as per the changed filetype*   
`name` : Name of the tool to execute.  
`command` : The command to execute on the file. The file is available as variable file.

### *module :*   
*Reusable components that help customise the output of the tool in CLI*   
Define/customise the messages that you want to be displayed

### *validator :*   
*Validates and provides fallback insights to handle missing dependencies/artifacts*   
Define your custom validators to handle exceptions from missing dependencies. By default, config.js is required as this is the validator to the directory configuration    
`dependency` : This directory holds the dependency validators. Create/modify configuration for each tool dependency that you'll be using with this tool. These configurations also support fallback clauses to try and install missing dependency.   

## Technical Documentation
*Getting started using this tool is easy. I've developed it as an extensible framework that binds tools you want to run, to the filetype on which it needs to be executed, on change. This decoupled approach brings modularity to the project and provides an exceptional level of customization. At its core is the `index.js` that binds the appication components to the application logic. You can hook custom events and extend the use furthur as per your requirement.*   
*All configurations are simple JSON arrays that is easy to understand and easy to configure and re-use. This tool is very lightweight and hence can be used without much overhead.*   
   
   
   
#### I'm presently looking for suggestions on how to make this tool better. Feature updates and enhancements are being worked on. To collaborate, please FORK this repository and build your enhancement. Raise a PR to contribute, and I will be happy to look into it.
