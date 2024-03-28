# Devops
this document contains good devops practice to manage a project using git

## Branching
A git repository is composed of branches that can be merged and rebased to each other
using different commands.

when working on a new feature you should create a new branch off of the main branch,
you should never commit to the main branch directly and instead merge those feature branch into the it

## Error handling

When an error is found or a different implementation is discovered for a feature a ticket should be created in the issue section of the repository

## Testing 

Before implementing something you should test the implementation with predefined test to snuff out potential edge case (keep those test after the implementation is finished so you can add to it or reuse them if you need to rewrite this part)

## Contributor

If your project is public some people will send pull requests to it, those are really useful and and can help you fix problems with your project

If you are opening your project to pull request you can create a file to provide a syntax standard for your project so that it will be readable to everyone