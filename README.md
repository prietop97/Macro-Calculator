# API Documentation (Coming soon) (Not finished)

## Backend framework
- C#
- EntityFramework
- PostgreSQL
- MediatR

## Getting started 
To get the server running locally:
- **git clone** the repo
- **Open** MacroCalculator.sln
- **cd** API/
- **dotnet run**

## Design Architecture
- There are 4 total projects that are working together to run the API.
- At the very center is the Domain, this project contains all Models and does not have any dependencies.
- One layer above is the Application layer. This is where all the business logic will be, it will only depend on Domain Models.
- Above the Application layer is where we are receiving the HTTP requests, the API project is responsible for receiving and dispatching client request where needed.
- The Persistence project is called is connected depends on the Application layer and models; this makes it easy to change database driver if needed.

![Bob Design Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

Issue/Bug Request
If you are having an issue with the existing project code, please submit a bug report under the following guidelines:

Check first to see if your issue has already been reported.
Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
Create a live example of the problem.
Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.
Feature Requests
We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

Pull Request Guidelines
Ensure any install or build dependencies are removed before the end of the layer when doing a build.
Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
Ensure that your code conforms to our existing code conventions and test coverage.
Include the relevant issue number, if applicable.
You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
Attribution
These contribution guidelines have been adapted from this good-Contributing.md-template.
