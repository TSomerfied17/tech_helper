# tech_helper

Tech Helper is a tech support Slack app including FAQ solutions to aid internal HQ staff and reduce workload for our Tech & Innovation Team.

## Description

Tech Helper can be called by mentioning the app in a Slack channel publically, or by using a slash command within any Slack for private interactions.

- The user is asked which system they would like support with.
- Once a choice is selected a list of actions is offered in a select menu.
- The user then receives some troubleshooting instructions or the option to submit a support ticket.

This is useful as it encourages the user to resolve their own issue, and if this is not possible they are sent to a form which will ask relevant questions to help our Tech team resolve their issue more easily when they get to it.

### Technologies

- Node.js
- Javascript
- Git Bash
- Heroku
- JSON

#### Future Improvements

I would like to implement the following improvements:
- Interaction message replies in Blocks instead of Attachments to allow more complex formatting of responses
- I would like to include the ability for the user to express satisfaction (Yes/No) with final response. If "No", then a return to an earlier stage to select another option or submit a ticket option.
- I would like to include the submit a ticket form as part of an interactive form message reply instead of an external link.

###### Useful Resources
- See https://code.likeagirl.io/making-an-interactive-slack-app-part-1-d28fac5f996f#5f6b to setup your Slack App environment.
- See *Deploying to Heroku* at https://code.likeagirl.io/making-an-interactive-slack-app-part-3-d550752584bf
