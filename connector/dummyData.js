var getList = function (request, response) {
  return new Promise(
    function (resolve, reject) {

      var aMessage = [];

      //const memory = request.body.conversation.memory;
      aMessage.push({
        type: 'text',
        content: 'Contact your workshop trainers',
      });

      aMessage.push({
        type: "list",
        content: {
          elements: [
            {
              title: "Daniel Koelsch",
              imageUrl: "https://media.licdn.com/dms/image/C5103AQH-eLAKxuNwDQ/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=FveqXeMHUfp129bhXRFS6WLbJCwXhnUj1IZMKmVMrYE",
              subtitle: "Senior Solution Architect SAP ",
              buttons: [
                {
                  value: "mailto:daniel.koelsch@sap.com",
                  title: "Email",
                  type: "postback"
                }
              ]
            },
            {
              title: "Jennifer Niederlaender",
              imageUrl: "https://media.licdn.com/dms/image/C4D03AQHHTXHMUPHZDg/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=MJMZblS8mF1Yy8zDl7p1-f4WtZpajHeSvb_D3YemWgA",
              subtitle: "SAP CAI Consultant",
              buttons: [
                {
                  value: "mailto:jennifer.niederlaender@sap.com",
                  title: "Email",
                  type: "postback"
                }
              ]
            },
            {
              title: "Sean Kask, PhD",
              imageUrl: "https://media.licdn.com/dms/image/C4E03AQE221SEif180Q/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=rCUOHFtFCsbRXL8v9AkRFLR6fDLMIeFOKO-Z2QZd5UE",
              subtitle: "Machine Learning Expert",
              buttons: [
                {
                  value: "mailto:sean.kask@sap.com",
                  title: "Email",
                  type: "postback"
                }
              ]
            },
            {
              title: "Tomasz Janasz, PhD",
              imageUrl: "https://media.licdn.com/dms/image/C5603AQHlGW2yaaImXw/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=QVO8fEMvyHVG0ZpnIeBRYjoi8BluhR_Krn-krgfthWw",
              subtitle: "Innovation Advisor",
              buttons: [
                {
                  value: "mailto:t.janasz@sap.com",
                  title: "Email",
                  type: "web_url"
                }
              ]
            },
            {
              title: "Xin Xin Chen",
              imageUrl: "https://media.licdn.com/dms/image/C5103AQFZDMk5otmQBw/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=Kqana_uD3yFKUg7DdwV_dpEU3lAzPmpyoSjGgXkRgxE",
              subtitle: "SAP CAI and SAP Cloud Platform Consultant",
              buttons: [
                {
                  value: "mailto:xin.xin.chen@sap.com",
                  title: "Email",
                  type: "web_url"
                }
              ]
            }
          ]
        }
      });

      return resolve(aMessage);

    });

}


module.exports = {
  getList
}
