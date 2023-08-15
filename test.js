// // // // // // // // var SNS = require('sns-mobile'),
// // // // // // // //     EVENTS = SNS.EVENTS;

// // // // // // // // var androidApp = new SNS({
// // // // // // // //   platform: SNS.SUPPORTED_PLATFORMS.ANDROID,
// // // // // // // //   region: 'eu-central-1',
// // // // // // // //   apiVersion: '2012-10-17',
// // // // // // // //   accessKeyId: 'AKIAY7FWCXLFNWWBVCVV',
// // // // // // // //   secretAccessKey: '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',
// // // // // // // //   platformApplicationArn: 'arn:aws:iam::616709667530:role/service-role/GentlEuropeIAMrole',
// // // // // // // //   //sandbox: true (This is required for targetting (iOS) APNS_SANDBOX only)
// // // // // // // // });

// // // // // // // // // Add a user, the endpointArn is their unique id
// // // // // // // // // endpointArn is required to send messages to the device
// // // // // // // // androidApp.addUser('3CCECD31BDC661A7', JSON.stringify({
// // // // // // // //   some: 'extra data'
// // // // // // // // }), function(err, endpointArn) {
// // // // // // // //   if(err) {
// // // // // // // //     throw err;
// // // // // // // //   }

// // // // // // // //   // Send a simple String or data to the client
// // // // // // // //   androidApp.sendMessage(endpointArn, 'Hi There!', function(err, messageId) {
// // // // // // // //     if(err) {
// // // // // // // //       throw err;
// // // // // // // //     }

// // // // // // // //     console.log('Message sent, ID was: ' + messageId);
// // // // // // // //   });
// // // // // // // // });


// // // // // // // // const wiki = require('wikipedia');

// // // // // // // // (async () => {
// // // // // // // // 	try {
// // // // // // // // 		const page = await wiki.summary('london');
// // // // // // // // 		console.log(page);
// // // // // // // // 		//Response of type @Page object
// // // // // // // // 		// const summary = await page.summary();
// // // // // // // // 		//console.log("Summary----------------------------",summary);
// // // // // // // // 		//Response of type @wikiSummary - contains the intro and the main image
// // // // // // // // 	} catch (error) {
// // // // // // // // 		console.log(error);
// // // // // // // // 		//=> Typeof wikiError
// // // // // // // // 	}
// // // // // // // // })();


// // // // // // // const {Client} = require("@googlemaps/google-maps-services-js");

// // // // // // // const client = new Client({});

// // // // // // // // client.placesNearby({
// // // // // // // //     params: {
// // // // // // // //       key: "AIzaSyA8B8XOsBKFP6QK1I5Z3CJDiMP5Yh4G9yM",
// // // // // // // // 	  locations: [{ lat: 28.620764, lng: 77.363930 }],
// // // // // // // // 	  radius: 1000,
// // // // // // // // 	  type:'bar'
// // // // // // // //     },
// // // // // // // // 	timeout: 1000 
// // // // // // // //   })
// // // // // // // client.geocode({
// // // // // // // 	  locations: [{ lat: 28.620764, lng: 77.363930 }],
// // // // // // //   })
// // // // // // //   .then((r) => {
// // // // // // //     console.log(r);
// // // // // // //   })
// // // // // // //   .catch((e) => {
// // // // // // //     console.log(e.response.data.error_message);
// // // // // // //   });

// // // // // // // // var jwt = require('jsonwebtoken');
// // // // // // // // var jwkToPem = require('jwk-to-pem');
// // // // // // // // var jwk = require('./common/JWT.json')
// // // // // // // // var pem = jwkToPem(jwk);
// // // // // // // // let token = 'eyJraWQiOiIzR0FubVZUR211ZVQ4V0l2T21TN09QcU5helRzYkdKQkVLT0JZRUc1K2tjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhZTFkM2RkZC04NzE5LTQ4ZTEtYjZhZC1hMTQxMWQ0YjUzNDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV92UzR1UFgzZ0UiLCJjbGllbnRfaWQiOiIxOThhMms1Y2JibG1rMDByb3JnMXNqY2g4cCIsIm9yaWdpbl9qdGkiOiIzNGUxNTVkNy0xOGVlLTRkYWItYTQ2Mi1hNzc5Mzg3OTEyZjMiLCJldmVudF9pZCI6IjNmMWQ1ZjRjLWIwZWYtNDYyMS05NzFhLTM4MTYzZGM2NjZlNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzA5MzQzMTMsImV4cCI6MTY3MTAyMDcxMywiaWF0IjoxNjcwOTM0MzEzLCJqdGkiOiJkMDU0NDM2NS1lY2VhLTQ3YTYtODMxOS1jNTFjMmIxMjkxODIiLCJ1c2VybmFtZSI6ImFlMWQzZGRkLTg3MTktNDhlMS1iNmFkLWExNDExZDRiNTM0OCJ9.TrTqhpgtw2AAwMXcW42tgfbfo4mbScqyKegfgKtCJkLaLOIxl1BbaWmJG7FzprnCD5Zrr1kg73VNkKw5VZwjR1DQAY4AjHSojGKyjbANPoLhhADqBMmUteFxKOKSrzCpYa62dXbYKNE3-YNFJCfYJqNqm2yLtC_KM8Fd3h8eBOPJVVCzhJAAr6R5hd_lOUNQJGp4Ff8WZZnxr0-ytcVyXkhdxUR4UBtH0UMZAYbNnuDc-48EMvLIOhFngdbDT4-Pd3tlqHBTNnPh1-pALMzYa5hRxNIZJEw8ALU5D-CRu1jLUTjC4wsssn50lFpTQkp_x-MDVA86KpwfD_9UWY0lIQ'
// // // // // // // // jwt.verify(token, pem,{ algorithms: ['RS256'] }, function(err, decoded) {
// // // // // // // // 	if(err) console.log(err);
// // // // // // // //   	console.log(decoded)
// // // // // // // // });

// // // // // // // // const express = require("express");
// // // // // // // // const socket = require("socket.io");

// // // // // // // // // App setup
// // // // // // // // const PORT = 5000;
// // // // // // // // const app = express();
// // // // // // // // const server = app.listen(PORT, function () {
// // // // // // // //   console.log(`Listening on port ${PORT}`);
// // // // // // // //   console.log(`http://localhost:${PORT}`);
// // // // // // // // });

// // // // // // // // // Static files
// // // // // // // // app.use(express.static("public"));

// // // // // // // // // Socket setup
// // // // // // // // const io = socket(server);

// // // // // // // // io.on("connection", function (socket) {
// // // // // // // //   console.log("Made socket connection");
// // // // // // // // });
// // // // // // // // const AwsConfig = require('./config/AwsConfig');

// // // // // // // // AwsConfig.getUserPool().signUp('testgoogle@yopmail.com', 'Testing@123', AwsConfig.getCognitoAttributeList(), null, function (err, result) {
// // // // // // // // 	if (err) {
// // // // // // // // 		console.log("err0", err)
// // // // // // // // 	}
// // // // // // // // 	console.log(result);
// // // // // // // // 	let cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({ region: 'ap-south-1'});
// // // // // // // // 	var params = {
// // // // // // // // 		UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
// // // // // // // // 		Username: 'testgoogle@yopmail.com'
// // // // // // // // 	  }
// // // // // // // // 	cognitoidentityserviceprovider.adminConfirmSignUp(params, function(err, data) {
// // // // // // // // 		if (err) console.log(err, err.stack)
// // // // // // // // })
// // // // // // // // })

// // // // // // var express = require('express');
// // // // // // var bodyParser = require('body-parser')
// // // // // // var app = express();
// // // // // // var http = require('http').Server(app);
// // // // // // var io = require('socket.io')(http);

// // // // // // app.use(express.static(__dirname));
// // // // // // app.use(bodyParser.json());
// // // // // // app.use(bodyParser.urlencoded({extended: false}))

// // // // // // // var Message = mongoose.model('Message',{
// // // // // // //   name : String,
// // // // // // //   message : String
// // // // // // // })
// // // // // // io.emit()
// // // // // // // var dbUrl = 'mongodb://username:password@ds257981.mlab.com:57981/simple-chat'

// // // // // // app.get('/', (req, res) => {
// // // // // //   io.emit('message', "req.body");
// // // // // //     res.send("messages");

// // // // // // })

// // // // // // // app.get('/messages', (req, res) => {
// // // // // // //   Message.find({},(err, messages)=> {
// // // // // // //     res.send(messages);
// // // // // // //   })
// // // // // // // })

// // // // // // // app.post('/messages', (req, res) => {
// // // // // // //   var message = new Message(req.body);
// // // // // // //   message.save((err) =>{
// // // // // // //     if(err)
// // // // // // //       sendStatus(500);
// // // // // // //     io.emit('message', req.body);
// // // // // // //     res.sendStatus(200);
// // // // // // //   })
// // // // // // // })

// // // // // // io.on('connection', () =>{
// // // // // //   console.log('a user is connected')
// // // // // // })


// // // // // // // mongoose.connect(dbUrl ,{useMongoClient : true} ,(err) => {
// // // // // // //   console.log('mongodb connected',err);
// // // // // // // })

// // // // // // var server = http.listen(3001, () => {
// // // // // //   console.log('server is running on port', server.address().port);
// // // // // // });

// // // // // // index.js

// // // // // // const path = require('path');
// // // // // // const http = require('http');
// // // // // // const express = require('express');
// // // // // // const socketio = require('socket.io');

// // // // // // const app = express();
// // // // // // const server = http.createServer(app);
// // // // // // const io = socketio(server);


// // // // // // io.on('connection', socket => {
// // // // // //   socket.on('joinRoom', ({ username, room }) => {
// // // // // //     const user = newUser(socket.id, username, room);

// // // // // //     socket.join(user.room);

// // // // // //     // General welcome
// // // // // //     socket.emit('message',  'Messages are limited to this room! ');

// // // // // //     // Broadcast everytime users connects

// // // // // //     // Current active users and room name
// // // // // //   });

// // // // // //   // Listen for client message
// // // // // //   socket.on('chatMessage', msg => {

// // // // // //     io.emit('message');
// // // // // //   });

// // // // // //   // Runs when client disconnects
// // // // // //   socket.on('disconnect', () => {
// // // // // //     const user = exitRoom(socket.id);

// // // // // //     if (user) {
// // // // // //       io.to(user.room).emit(
// // // // // //         'message',
// // // // // //         formatMessage("WebCage", `${user.username} has left the room`)
// // // // // //       );

// // // // // //       // Current active users and room name
// // // // // //       io.to(user.room).emit('roomUsers', {
// // // // // //         room: user.room,
// // // // // //         users: getIndividualRoomUsers(user.room)
// // // // // //       });
// // // // // //     }
// // // // // //   });
// // // // // // });

// // // // // // const PORT = process.env.PORT || 3000;

// // // // // // server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// // // // // // const {google} = require('googleapis');
// // // // // // //const sheets = google.sheets('v4');
// // // // // // const file = require('./keys.json')
// // // // // // const auth = new google.auth.GoogleAuth({
// // // // // //   keyFile: './keys.json', //the key file
// // // // // //   //url to spreadsheets API
// // // // // //   scopes: "https://www.googleapis.com/auth/spreadsheets", 
// // // // // // });

// // // // // // const Google_place_ID_of_the_delivery_address = 'ChIJN1t_tDeuEmsRUsoyG83frY4';

// // // // // // async function getClosestShop() {
// // // // // //   const authClientObject = await auth.getClient();
// // // // // //   const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });
// // // // // //   const response = await googleSheetsInstance.spreadsheets.values.get({
// // // // // //     auth: auth,
// // // // // //     spreadsheetId: '12sKiuzF8gB-MQuj0_YI-7i4QuzyRpL1W0gaE6R_e5Gc',
// // // // // //     range: 'A:B',
// // // // // //   });
// // // // // //   const values = response.data.values;
// // // // // //   console.log(values);
// // // // // //   let closestShopName = '';
// // // // // //   let closestShopGooglePlaceId = '';
// // // // // //   let minDistance = Infinity;
// // // // // //   for (const value of values) {
// // // // // //     const shopName = value[0];
// // // // // //     const shopGooglePlaceId = value[1];
// // // // // //     const distanceResponse = await google.maps.distanceMatrix({
// // // // // //       auth: auth,
// // // // // //       origins: [Google_place_ID_of_the_delivery_address],
// // // // // //       destinations: [shopGooglePlaceId],
// // // // // //       mode: 'driving',
// // // // // //       units: 'metric',
// // // // // //     });
// // // // // //     const distance = distanceResponse.data.rows[0].elements[0].distance.value;
// // // // // //     if (distance < minDistance) {
// // // // // //       minDistance = distance;
// // // // // //       closestShopName = shopName;
// // // // // //       closestShopGooglePlaceId = shopGooglePlaceId;
// // // // // //     }
// // // // // //   }
// // // // // //   return {
// // // // // //     closestShopName,
// // // // // //     closestShopGooglePlaceId,
// // // // // //   };
// // // // // // }

// // // // // // async function getDistanceOfClosestShop() {
// // // // // //   const {closestShopGooglePlaceId} = await getClosestShop();
// // // // // //   const distanceResponse = await google.maps.distanceMatrix({
// // // // // //     origins: [Google_place_ID_of_the_delivery_address],
// // // // // //     destinations: [closestShopGooglePlaceId],
// // // // // //     mode: 'driving',
// // // // // //     units: 'metric',
// // // // // //   });
// // // // // //   const distance = distanceResponse.data.rows[0].elements[0].distance.value;
// // // // // //   return distance / 1000; // Convert meters to kilometers
// // // // // // }

// // // // // // async function getDeliveryFees() {
// // // // // //   const distanceOfClosestShopInKm = await getDistanceOfClosestShop();
// // // // // //   let deliveryFees;
// // // // // //   if (distanceOfClosestShopInKm < 10) {
// // // // // //     deliveryFees = 5;
// // // // // //   } else if (distanceOfClosestShopInKm >= 10 && distanceOfClosestShopInKm <= 150) {
// // // // // //     deliveryFees = 30;
// // // // // //   } else if (distanceOfClosestShopInKm > 150) {
// // // // // //     deliveryFees = 50;
// // // // // //   }
// // // // // //   if (fixed_delivery_price_is_true_or_false === true) {
// // // // // //     deliveryFees = 20;
// // // // // //   }
// // // // // //   return deliveryFees;
// // // // // // }

// // // // // // async function getDeliveryFeesInUSD() {
// // // // // //   const deliveryFees = await getDeliveryFees();
// // // // // //   return deliveryFees;
// // // // // // }

// // // // // // // async function getDeliveryFeesInLocalCurrency(userCurrency) {
// // // // // // //   // Convert delivery fees from USD to the specified local currency using the currency exchange rates API
// // // // // // //   const exchangeRateResponse = await fetch
// // // // // // // }

// // // // // // getClosestShop()


// // // // // // var distance = require('google-distance-matrix');
// // // // // // distance.matrix()


// const stripe = require("stripe")('sk_test_51M9EWFGLSgW1nOiMNYH30Uvr42Jir5ELyI8sRdnLADfkECvYAkUbexVZVkqu9kOw9zl6LdshiKfFYZDiEh6SHc4b00tlfoFQWZ')

// async function main(){
//     const date = new Date()
//     var oneWeekAgo = new Date();
//    oneWeekAgo.setDate(oneWeekAgo.getDate() - 2);
//     const payouts = await stripe.payouts.list({
//         created: {gte: oneWeekAgo, lte: date}
//       });     
//   //const amountTotal = payouts.data.reduce((a, b) => ({ amount: a.amount + b.amount })).amount;
//   //console.log(amountTotal/100)
// }


// main()




// // // // // // async function main(){
// // // // // //   const paymentIntent = await stripe.paymentIntents.confirm(
// // // // // //     'pi_3MM8pgGLSgW1nOiM1y8wywk8',
// // // // // //     {payment_method: paymentMethod.id,receipt_email: 'testgentl@yopmail.com'}
// // // // // //   );
// // // // // // console.log(paymentIntent)
// // // // // // }

// // // // // // main()

// // // // // // const axios = require('axios');

// // // // // // async function storeData(email, city, gender) {
// // // // // //   const apiKey = '3f3dfeb83840e0a145c41536f8e1df6e-us10';
// // // // // //   const listId = '9e5ae446bc';

// // // // // //   try {
// // // // // //     // Use the Mailchimp API's 'lists/{list_id}/members' endpoint to add a new subscriber
// // // // // //     const response = await axios.post(
// // // // // //       `https://us3.api.mailchimp.com/3.0/lists/${listId}/members`,
// // // // // //       {
// // // // // //         // Set the email address, city, and gender of the subscriber
// // // // // //         email_address: email,
// // // // // //         merge_fields: {
// // // // // //           CITY: city,
// // // // // //           GENDER: gender
// // // // // //         },
// // // // // //         // Set the status of the subscriber to 'subscribed'
// // // // // //         status: 'subscribed'
// // // // // //       },
// // // // // //       {
// // // // // //         auth: {
// // // // // //           // Pass the API key as a basic auth username
// // // // // //           username: 'apikey',
// // // // // //           password: apiKey
// // // // // //         }
// // // // // //       }
// // // // // //     );

// // // // // //     console.log(response.status);
// // // // // //     console.log(response.data);
// // // // // //   } catch (error) {
// // // // // //     console.log(error);
// // // // // //   }
// // // // // // }

// // // // // // // Example usage
// // // // // // storeData('john@example.com', 'New York', 'Male');
// const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp.setConfig({
//   apiKey: "3f3dfeb83840e0a145c41536f8e1df6e-us10",
//   server: "us10",
// });

// const listId = "9e5ae446bc";
// // // // // // const subscribingUser = {
// // // // // //   city: "London",
// // // // // //   gender: "Male",
// // // // // //   email: "rohitj2@chetu.com"
// // // // // // };

// async function run() {
//   const response = await mailchimp.lists.updateListMember(listId, 'test702@chetu.com', {merge_fields: {PROMEMAIL: 'yes'}});
//   console.log(response);
// }

// run()

// // const run = async () => {
// //   const response = await mailchimp.lists.addListMergeField(listId, {
// //     name: "Google Place Id",
// //     tag:"GOOGLEPLACEID",
// //     type: "text",
// //   });
// //   console.log(response);
// // };

// // const run = async () => {
// //   const response = await mailchimp.lists.getListMergeFields(listId);
// //   console.log(response);
// // };

// // // // // // const run = async () => {
// // // // // //   const response = await mailchimp.lists.getListMember(
// // // // // //     listId,
// // // // // //     "49f7405b7b014655b0397b001a1dd175"
// // // // // //   );
// // // // // //   console.log(response);
// // // // // // };

// run();
// // // // // const CryptoJS = require("crypto-js");
// // // // // require('dotenv').config()

// // // // // const paymentSecret = CryptoJS.AES.encrypt(JSON.stringify("finalPrice"), process.env.MY_SECRATE_KEY).toString();
// // // // //  const bytes = CryptoJS.AES.decrypt('2FsdGVkX1/jtA/tA9sTtSdGWvntBMwCKCD7dU+84ao=', process.env.MY_SECRATE_KEY);
// // // // //  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// // // // // // console.log(paymentSecret)
// // // // // // console.log(bytes)
// // // // // console.log(decryptedData)

// // // const { google } = require('googleapis');
// // // const GOOGLE_CLIENT_ID = '733781723058-3a5mpk8ahqf38nadcalfg25knhl2jd38.apps.googleusercontent.com';
// // // const EMAIL_ADDRESS = 'gentlapptech@gmail.com';
// // // const fetch = require('axios').default
// // // const fs = require('fs');
// // // const axios = require('axios');

// // // // //  auth.getAccessToken().then((data) =>{
// // // // //     console.log(data);
// // // // //   });

// // // // // const sendEmail = async () => {
// // // // //     try {
// // // // //     //   const { type, accessToken } = await google.({
// // // // //     //     clientId: GOOGLE_CLIENT_ID,
// // // // //     //     scopes: ['email', 'profile', 'https://www.googleapis.com/auth/gmail.send'],
// // // // //     //   });
// // // // //       const auth = new google.auth.GoogleAuth({
// // // // //         keyFile: './common/keys.json', //the key file
// // // // //         scopes: "https://www.googleapis.com/auth/gmail.send",
// // // // //       });
// // // // //       const token  = await auth.getAccessToken()
// // // // //       console.log("tokennnnnnnnnnnnnnnnnnnnnnnn", token);
// // // // //       if (token) {
// // // // //         const email = {
// // // // //           to: 'gentlapptech@gmail.com',
// // // // //           subject: 'Test email',
// // // // //           body: 'This is a test email',
// // // // //         };
// // // // //         let request = [
// // // // //             "to: ", email.to, "\n",
// // // // //             "from: ", email.to, "\n",
// // // // //             "subject: ", email.subject, "\n\n",
// // // // //             email.body,
// // // // //         ].join('');
// // // // //         let option = {
// // // // //             method: 'POST',
// // // // //             headers: {
// // // // //                 'Authorization': `Bearer ${token}`,
// // // // //                 'Content-Type': 'message/rfc822',
// // // // //             },
// // // // //             body: request,
// // // // //         };
// // // // //         const response = await fetch(`https://www.googleapis.com/upload/gmail/v1/users/me/messages/send?access_token=${token}`, option);
// // // // //         console.log(response);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //     }
// // // // // };
// // // // // sendEmail()
// // // async function makeBody(to, from, subject, message) {
// // //     var str = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
// // //         "MIME-Version: 1.0\n",
// // //         "Content-Transfer-Encoding: 7bit\n",
// // //         "to: ", to, "\n",
// // //         "from: ", from, "\n",
// // //         "subject: ", subject, "\n\n",
// // //         message
// // //     ].join('');
// // //     var encodedMail = new Buffer.from(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
// // //     return encodedMail;
// // // }
// // // const gmail = google.gmail({version: 'v1'});
// // // async function sendMessage() {
// // //     const auth = new google.auth.GoogleAuth({
// // //         keyFile: './keys.json', 
// // //         scopes: [
// // //             'https://mail.google.com/',
// // //             'https://www.googleapis.com/auth/gmail.compose',
// // //             'https://www.googleapis.com/auth/gmail.metadata',
// // //             'https://www.googleapis.com/auth/gmail.modify',
// // //             'https://www.googleapis.com/auth/gmail.readonly',
// // //           ],
// // //       });
     
// // //     const authClient = await auth.getClient();
   
// // //     //var raw = await makeBody('jubaidh@chetu.com', EMAIL_ADDRESS, 'test subject', 'test message');
// // //     //  const raw = btoa(
// // //     //     "From: gentlapptech@gmail.com\r\n" +
// // //     //     "To: gentlapptech@gmail.com\r\n" +
// // //     //     "Subject: Subject Text\r\n\r\n" +
      
// // //     //     "The message text goes here"
// // //     //   ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
// // //     // console.log(raw)
// // //     // gmail.users.messages.send({
// // //     //     auth: authClient,
// // //     //     userId: 'me',
// // //     //     requestBody: {
// // //     //         raw: raw
// // //     // }},(err,data) => {
// // //     //     if(err) console.log('errrrrrrrrrrrrrr==========',err)
// // //     //     console.log(data);
// // //     // });
// // //     google.options({auth: authClient});
// // //     const res = await gmail.users.getProfile({
// // //         // The user's email address. The special value `me` can be used to indicate the authenticated user.
// // //         userId: 'me',
// // //         auth: authC
// // //       });
// // //       console.log(res.data);
    
// // // }
// // // sendMessage()
// // // // // const auth = new google.auth.GoogleAuth({
// // // // //     keyFile: './common/keys.json', //the key file
// // // // //     scopes: "https://www.googleapis.com/auth/gmail.send",
// // // // // });


// // // // // function makeBody(to, from, subject, message) {
// // // // //     let str = [
// // // // //         "to: ", to, "\n",
// // // // //         "from: ", from, "\n",
// // // // //         "subject: ", subject, "\n\n",
// // // // //         message,
// // // // //     ].join('');
// // // // //     var encodedMail = new Buffer.from(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
// // // // //     return encodedMail;
// // // // // }

// // // // // let raw = makeBody("dinesh.kumar@gmail.com", "dinesh.kumar@gmail.com", "Test mail", "Everything is fine");
// // // // // const userId = 'me'; // Please modify this for your situation.


// // // // // async function makecall() {
// // // // //     const token  = await auth.getAccessToken()
// // // // //     let option = {
// // // // //         url: "https://www.googleapis.com/upload/gmail/v1/users/" + userId + "/messages/send",
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //             'Authorization': `Bearer ${token}`,
// // // // //             'Content-Type': 'text/plain; encoding=utf-8',
// // // // //         },
// // // // //         body: raw,
// // // // //     };
// // // // //     const data  = await axios(option)
// // // // //     console.log(data);
// // // // // }

// // // // // makecall()



// // // const { google } = require('googleapis');
// // // const path = require('path');
// // // const EMAIL_ADDRESS = 'gentlapptech@gmail.com';

// // // async function getData() {
// // //     const auth = new google.auth.GoogleAuth({
// // //         keyFile: './common/keys.json',
// // //         scopes: "https://www.googleapis.com/auth/gmail.readonly",
// // //       });
// // //     const authClientObject = await auth.getAccessToken();
// // //     console.log(authClientObject);
// // //     // const gmail = google.gmail({version: 'v1', auth: auth});
// // //     // const response = await gmail.users.messages.list({
// // //     //     userId:'me',
// // //     //     auth: auth
// // //     // })
// // //    // console.log(auth)
// // // }

// // // getData()



// // const AWS = require('aws-sdk');

// // AWS.config.update({
// //     accessKeyId: 'AKIAY7FWCXLFKQZZ2ZOO',
// //     secretAccessKey: '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',
// //     region: 'eu-central-1'
// // });

// // const sns = new AWS.SNS();

// // let payloadData = {
// //     TargetArn: 'arn:aws:sns:eu-central-1:616709667530:endpoint/GCM/Gentl-FCM/cce40160-9205-387f-a4e9-aeabf86d86f0',
// //     Message: "this is push notification message .",
// //     Subject: "Subject of the motification message."
// // }
// // var payload = {
// //     default: 'Hello World',
// //     APNS: {
// //       aps: {
// //         alert: 'Hello World',
// //         sound: 'default',
// //         badge: 1
// //       }
// //     }
// //   };

// //   // first have to stringify the inner APNS object...
// //   payload.APNS = JSON.stringify(payload.APNS);
// //   // then have to stringify the entire message payload
// //   payload = JSON.stringify(payload);

// // sns.publish({
// //     Message: payload,      // Required
// //     MessageStructure: 'json',
// //     TargetArn: 'arn:aws:sns:eu-central-1:616709667530:endpoint/GCM/Gentl-FCM/cce40160-9205-387f-a4e9-aeabf86d86f0'
// // },
// //     function (err, data) {
// //         if (err) {
// //             console.log("errrrrrr", err.message)
// //         }
// //         else {
// //         console.log("result",data)
// //         }
// // });

// // const translate = require('google-translate-api');
 
// // translate('Ik spreek Engels', {to: 'en'}).then(res => {
// //     console.log(res.text);
// //     //=> I speak English
// //     console.log(res.from.language.iso);
// //     //=> nl
// // }).catch(err => {
// //     console.error("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",err);
// // });
