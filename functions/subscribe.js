const fetch = require('axios')

exports.handler = async function (event, context, callback) {
  const parsedBody = JSON.parse(event.body)
  const hubspotApiKey = process.env.HUBSPOT_API_KEY ? process.env.HUBSPOT_API_KEY : null

  // check if contact exists
  if (hubspotApiKey) {
    try {
      const getContactUrl = `https://api.hubapi.com/contacts/v1/contact/email/${parsedBody.emailAddress}/profile?hapikey=${hubspotApiKey}`;
      var contactExists = await fetch({
        url: getContactUrl,
        method: 'GET',
      })
    } catch (err) {
      if (err.response.data.message && err.response.data.message !== 'contact does not exist') {
        console.log("error fetching hubspot contact", err)
      }
      contactExists = false
    }
    if (!contactExists) {
      // create contact if it doesn't exist
      try {
        const createContactUrl = `https://api.hubapi.com/contacts/v1/contact/?hapikey=${hubspotApiKey}`;
        await fetch({
          url: createContactUrl,
          method: 'POST',
          data: {
            properties: [{
              property: "email",
              value: parsedBody.emailAddress
            }]
          },
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          json: true
        })
      } catch (err) {
        // contact does not exist
        console.log("error creating hubspot contact", err)
        return new Promise((resolve, reject) => {
          resolve({ 
            statusCode: 400, 
            body: JSON.stringify({ 
              success: false,
              error: `Error contacting the server.`,
            }),
          });
        });
      }
    }
    // subscribe contact to list
    try {
      await fetch({
        url: `https://api.hubapi.com/email/public/v1/subscriptions/${parsedBody.emailAddress}?hapikey=${hubspotApiKey}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        data: {
          "subscriptionStatuses": [
            {
                "id": parsedBody.subscriptionId,
                "subscribed": true,
                "optState": "OPT_IN",
                "legalBasis": "LEGITIMATE_INTEREST_PQL",
                "legalBasisExplanation": "Manually subscribed from the website."
            }
          ],
          "portalSubscriptionLegalBasis": "LEGITIMATE_INTEREST_PQL",
          "portalSubscriptionLegalBasisExplanation": "Manually subscribed from the website."
        },
      })
      return new Promise((resolve, reject) => {
        resolve({ 
          statusCode: 200, 
          body: JSON.stringify({ 
            success: true,
            error: false,
          }),
        });
      });
    } catch (err) {
      console.log("error subscribing user", err)
      return new Promise((resolve, reject) => {
        resolve({ 
          statusCode: 400, 
          body: JSON.stringify({ 
            success: false,
            error: err.response.data.message ? err.response.data.message : `Error contacting the server.`,
          }),
        });
      });
    }
  } else {
    return new Promise((resolve, reject) => {
      resolve({ 
        statusCode: 400, 
        body: JSON.stringify({ 
          success: false,
          error: `Error contacting the server.`,
        }),
      });
    });
  }
}