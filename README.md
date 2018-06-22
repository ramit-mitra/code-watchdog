# Code Watchdog
An automated tool to look for changes in your code-base and execute SCA tools on it.  
For a better reading experience [visit the documentation page](https://ramit-mitra.github.io/code-watchdog/) hosted in GitHub.

### What does it do ?
This tool continuously monitors your codebase for file changes and based on the type of file, it can execute actions.  
Say, you're working on a PHP project and you want to run phpcbf each time you make modifications to a file, this tool helps you achieve that, and much more !

### What language does it support ?
Everything!  
It can detect any language based on the file extension and can then act accordingly. For a curated list of code analysis tools that you can use with this, take a look at, https://github.com/mre/awesome-static-analysis 

### What comes bundled with this ?
It comes preconfigured to run for PHP, JS and CSS filetypes. You can extend it furthur as per your usecase. For a detailed technical overview, continue reading the Technical Documentation below. 

### Collaboration 
Want to help make this tool even better ?  
Fork and keep building, when your happy with the changes, raise a PR. I will be happy to look into it. 

## Technical Documentation

## Application components

### *config :*   
*Provides tool configuration settings*   
`dir` : Directory to watch for code changes, configure this to point to the root of your project directory

### *hook :*   
*Directs the tool to execute set of commands as per the changed filetype*   
`name` : Name of the tool to execute  
`command` : The command to execute on the file. The file is available as variable file

### *module :*   
*Reusable components that help customise the output of the tool in CLI*   
Define/Customise the messages that you want to be displayed

### *validator :*   
*Validates and provides fallback insights to handle missing dependencies/artifacts*   
Define your custom validators to handle exceptions from missing dependencies. By default, config.js is required as this is the validator to the directory configuration
