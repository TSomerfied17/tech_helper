const slackAnswers = require('./resources/slackAnswers.json')
const boxAnswers = require('./resources/boxAnswers.json')
const asanaAnswers = require('./resources/asanaAnswers.json')
const salesforceAnswers = require('./resources/salesforceAnswers.json')
const gsuiteAnswers = require('./resources/gsuiteAnswers.json')
const portalAnswers = require('./resources/portalAnswers.json')
const everbridgeAnswers = require('./resources/everbridgeAnswers.json')
const hardwareAnswers = require('./resources/hardwareAnswers.json')
const successCheck = require('./resources/successCheck.json') //Unused at the moment

module.exports.chooseAnswer = function (text, callbackId, respond, choice) {
    
//Deciphers which choice was given and displays the appropriate response from the .json array

  switch (callbackId) {
    case 'slack_help':
      respond({
        text: text,
        attachments: slackAnswers[choice],
        replace_original: true
      })
      break
    case 'box_help':
      respond({
        text: text,
        attachments: boxAnswers[choice],
        replace_original: true
      })
      break
    case 'asana_help':
      respond({
        text: text,
        attachments: asanaAnswers[choice],
        replace_original: true
      })
      break
    case 'salesforce_help':
      respond({
        text: text,
        attachments: salesforceAnswers[choice],
        replace_original: true
      })
      break
    case 'gsuite_help':
      respond({
        text: text,
        attachments: gsuiteAnswers[choice],
        replace_original: true
      })
      break
    case 'portal_help':
      respond({
        text: text,
        attachments: portalAnswers[choice],
        replace_original: true
      })
      break
    case 'everbridge_help':
        respond({
          text: text,
          attachments: everbridgeAnswers[choice],
          replace_original: true
        })
      break
    case 'hardware_help':
      respond({
        text: text,
        attachments: hardwareAnswers[choice],
        replace_original: true
      })
      break
    }
    return { text: 'Processing...' } // Essentially fallback text if one of the User Journeys threads isn't covered off
  }
