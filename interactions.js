const { createMessageAdapter } = require('@slack/interactive-messages')
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackInteractions = createMessageAdapter(slackSigningSecret)
const frequentlyAskedQuestions = require('./elements/frequentlyAskedQuestions.json') /* Saving the .json formatted second select menu in a variable for later use */
const respondToFaqs = require('./respondToFaqs') /* Saving the final response functionality in a variable so it can be triggered in the if statements below */

module.exports.listenForInteractions = function (app) {
  app.use('/interactions', slackInteractions.requestListener())
}

slackInteractions.action({ type: 'select' }, (payload, respond) => {
  return respondToSelectDropdown(payload, respond);
})

/*
Below we handle the select menu choices and assign variable to link with 
the correct responses in the corresponding .json files at the top of this page
*/

function respondToSelectDropdown(payload, respond) {
  const selectedOption = payload.actions[0].selected_options[0].value

  // THE FIRST SELECT MENU
  if (payload.callback_id == 'subjects') {
    switch (selectedOption) {
      case 'Slack':
        text = 'You selected Slack.'
        callbackId = 'slack_help'
        choice = 0
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'Box':
        text = 'You selected Box'
        callbackId = 'box_help'
        choice = 1
        respondWithFaq(text, callbackId, respond, choice)
        break      
      case 'Asana':
        text = 'You selected Asana'
        callbackId = 'asana_help'
        choice = 2
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'Salesforce':
        text = 'You selected Salesforce.'
        callbackId = 'salesforce_help'
        choice = 3
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'GSuite':
        text = 'You selected GSuite'
        callbackId = 'gsuite_help'
        choice = 4
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'Portal':
        text = 'You selected Portal'
        callbackId = 'portal_help'
        choice = 5
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'Everbridge':
        text = 'You selected Everbridge'
        callbackId = 'everbridge_help'
        choice = 6
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'Hardware':
        text = 'You selected hardware'
        callbackId = 'hardware_help'
        choice = 7
        respondWithFaq(text, callbackId, respond, choice)
        break
      case 'Submit a support ticket':
        text = 'You selected Submit a support ticket.'
        
        choice = 8
        respondWithFaq(text, callbackId, respond, choice)
        break
    }
  }

/* THE SECOND TIER OF SELECT MENUS
>>> Which menu appears depends on the callback_id assigned in the previous select menu above.
*/

  if (payload.callback_id == 'slack_help') {
    switch (selectedOption) {
      case 'addToChannel':
        text = 'You selected add somebody to a channel'
        
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'oldMessageThread':
        text = 'You selected find an old message'
       
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break      
      case 'cameraBroken':
        text = 'You selected fix my camera.'
        
        choice = 2
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'audioBroken':
        text = 'You selected fix my audio.'
        
        choice = 3
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'addWorkspace':
        text = 'You selected add a new workspace.'
        
        choice = 4
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
        
        choice = 5
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'box_help') {
    switch (selectedOption) {
      case 'boxTools':
        text = 'You selected fix Box Tools/Edit.'
       
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'microsoftOnline':
        text = 'You selected trying to open a file from Box.'
        
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break      
      case 'findFile':
        text = 'You selected find a file or folder.'
        
        choice = 2
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'editFile':
        text = 'You selected edit a file that has been shared with me.'
        
        choice = 3
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'accountMerge':
        text = 'You selected merge my Box accounts.'
        
        choice = 4
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
       
        choice = 5
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'asana_help') {
    switch (selectedOption) {
      case 'findTask':
        text = 'You selected find a project or task.'
        
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'myTasks':
        text = 'You selected find my assigned tasks.'
        
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break      
      case 'findAssigner':
        text = 'You selected find out who assigned me a task.'
        
        choice = 2
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'createMilestone':
        text = 'You selected create a milestone.'
        
        choice = 3
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'createProject':
        text = 'You selected create a new project.'
        
        choice = 4
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'appAsana':
        text = 'You selected get alerted in Slack about Asana activity.'
       
        choice = 5
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
        
        choice = 6
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'salesforce_help') {
    switch (selectedOption) {
      case 'createReport':
        text = 'You selected create a report.'
        
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'createListView':
        text = 'You selected create a list view.'
        
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break      
      case 'editBulk':
        text = 'You selected edit data in bulk.'
       
        choice = 2
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'findContact':
        text = 'You selected find a contact.'
        
        choice = 3
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'logIn':
        text = `You selected I can't log in.`
        
        choice = 4
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'exportReport':
        text = 'You selected export data from a report.'
        
        choice = 5
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
        
        choice = 6
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'gsuite_help') {
    switch (selectedOption) {
      case 'lockedAccount':
        text = 'You selected unlock my account.'
        
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'groupNotifications':
        text = 'You selected change Google group notification settings.'
       
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break      
      case 'groupInbox':
        text = 'You selected find a Google group inbox.'
        
        choice = 2
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'emailSignature':
        text = 'You selected setup my email signature.'
        
        choice = 3
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
       
        choice = 4
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'portal_help') {
    switch (selectedOption) {
      case 'loginAccount':
        text = 'You selected log into my account.'
        
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'onlineCourse':
        text = 'You selected fix error completing online course.'
        
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
        
        choice = 2
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'everbridge_help') {
    switch (selectedOption) {
      case 'includeContact':
        text = 'You selected include a specific contact in filter.'
       
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
        
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  if (payload.callback_id == 'hardware_help') {
    switch (selectedOption) {
      case 'brokenLostStolen':
        text = 'You selected report broken, lost or stolen hardware.'
        
        choice = 0
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)        
        break
      case 'submitTicket':
        text = 'You selected submit a support ticket.'
        
        choice = 1
        respondToFaqs.chooseAnswer(text, callbackId, respond, choice)
        break
    }
  }

  // Return a replacement message
  return { text: 'Processing...' }
}
// The function triggered by the first select menu choices
// This displays the next select menu
function respondWithFaq(text, callbackId, respond, choice) {
  frequentlyAskedQuestions.callback_id = callbackId
  frequentlyAskedQuestions.text = 'What are you trying to do?'
  respond({
    text: text,
    attachments: [frequentlyAskedQuestions[choice]], //All different choices are saved in a .json array and then saved at the top in a variable called frequentlyAskedQuestions
    replace_original: true
  })
}
