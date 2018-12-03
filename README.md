# Chatbot
## Purpose of this chatbot
The purpose of this repository is to provide an example chatbot with a SAPUI5 frontend and a connector based on Node.js. 

## Introduction to SAP Cloud Platform Cloud Foundry Environment

[Cloud Foundry](https://www.cloudfoundry.org/) is an open source Platform-as-a-Service (PaaS) technology with broad industry support. [SAP Cloud Platform Cloud Foundry environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/ab512c3fbda248ab82c1c545bde19c78.html#9c7092c7b7ae4d49bc8ae35fdd0e0b18.html) provides the benefits of the open source Cloud Foundry technology along with several, differentiating enterprise-grade features and functionalities.

A key design principle of Cloud Foundry is to build applications as scalable, stateless microservices that utilise various backing services for persistence, messaging, etc.

Microservices can be developed in practically any programming language as long as there is a corresponding Cloud Foundry buildpack. SAP Cloud Platform provides in-built support for certain buildpacks such as Java and NodeJS and allows use of any other community buildpacks.

SAP Cloud Platform includes several backing services including the flagship SAP HANA as well as other popular open source services such as PostgreSQL, RabbitMQ and Redis.

In addition, the Cloud Foundry environment of SAP Cloud Platform includes various other technical services such as Connectivity, AutoScaling, Security and Job Scheduler.

[Top](#top)

## Conversational AI

Conversational AI helps enterprises and developers to understand user inputs better.

-   **NLP API**: a unique API for text processing, and augmented training.
-   **Bot Building Tools**: all you need to create smart bots powered by Recast.AI's NLP API. Design even the most complex conversation flow, use all rich messaging formats and connect to external APIs and services.
-   **Bot Connector API**: standardizes the messaging format across all channels, letting you connect your bots to any channel in minutes.

Recast.AI is a **community platform**: just like on GitHub, you can fork any bot or intent to speed up your bot development. Discuss with other bot makers in the community [on our Slack](https://slack.recast.ai/) to learn all the tips and tricks.

The bot builder gives you access to: 

-   A **visual interface** to design the flow, build the conversation logic and set up replies.

-   **Webhook features** to connect your bot to your own API or other services to fetch external data.

### TUTORIALS
* [Your first bot [NodeJS]](https://blog.recast.ai/build-your-first-bot-with-recast-ai/) - Build your first bot with Bot Builder
* [Build a movie bot with Recast.AI [NodeJS]](https://recast.ai/blog/nodejs-chatbot-movie-bot/) - Overview of how to get started building your bot's server and calling third party APIs.
* [Build a cryptocurrency chatbot with Recast.AI [Python]](https://recast.ai/blog/python-cryptobot/) - Build a bot able to fetch cryptocurrencies price.

### RESOURCES
* [Bot Builder Guide](https://recast.ai/docs): Best practices and tips to use the Recast.AI platform 
* [API Documentation](https://man.recast.ai/) - API documentation


## Runtimes / services

Following runtimes are needed for this chatbot:

- NodeJS
- HTML5

For the current hands-on, various backing and technical services are used including:

- SAP Conversational AI
- Connectivity
- Destination
- Authorisation & Trust Management (xsuaa)


[Top](#top)

## Tools

For application development and deployment the web-based tooling - [SAP Web IDE Full-Stack](https://cloudplatform.sap.com/capabilities/technical-asset-info.SAP-Web-IDE-Full-Stack.52fdf566-8709-41ef-bfa4-2aabcd33a865.html) is used.

In particular, this chatbot uses the following capabilities of the SAP Web IDE Full-Stack:

- [Developing Multi-Target Applications](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/a71bf8281254489ea8be6e323199b304.html) which enables holistic life cycle management of application modules aimed at disparate runtimes, and various underlying services
- [Connect to Cloud Foundry services](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/39a1e84313ec44248aa5536142633636.html) and consume them from the applications

[Top](#top)


