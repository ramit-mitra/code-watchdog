# Code Watchdog
An automated tool to look for changes in your code-base and execute actions on it.  
For a better reading experience [visit the documentation page](https://ramit-mitra.github.io/code-watchdog/) hosted in GitHub.

### What does it do ?
This tool continuously monitors your codebase for file changes and based on the type of file, it can execute actions. Say, you're working on a PHP project and you want to run phpcbf each time you make modifications to a file, this tool helps you achieve just that !

### What language does it support ?
Everything. It can detect any language based on the file extension and can then act accordingly. For a curated list of code analysis tools that you can use with this, take a look at, https://github.com/mre/awesome-static-analysis 

### What comes bundled with this ?
It comes preconfigured to run for PHP, JS and CSS filetypes. You can extend it furthur as per your usecase. For a detailed technical overview, continue reading the Technical Documentation below. 

### Collaboration 
Want to help make this tool even better or add new features ?  
Fork and keep building, when your happy with the changes, raise a PR. I will be happy to look into it.  

## Technical Documentation

### Application components
