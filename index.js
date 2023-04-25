// ------------------------------------------
// Requires
// ------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const clickup_api = require("clickup_api");
require('dotenv').config();

// ------------------------------------------
// Basic Web Server
// ------------------------------------------
const app = express();

// ------------------------------------------
//  Helper
// ------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use(cors());
app.use(cookieParser());

// ------------------------------------------
// Variables
// ------------------------------------------
const clickup = new clickup_api(process.env.CLICK_UP_TOKEN);

// Server Port
const port = process.env.SERVER_PORT;


// ------------------------------------------
// Common Routes
// ------------------------------------------

/**
 * Route for an secure access
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 * @returns 
 */
const secured = (req, res, next) => {
  if(req.query.code){
    if(req.query.code == process.env.SECURE_CODE){
      return next();
    }else{
      res.sendStatus(404);
    }
  }else{
    res.sendStatus(404);
  }
};


/** 
 * Route to index
 * 
 */
app.get('/', secured, async (req, res) => {
  res.sendFile(__dirname+"/public/index/index.html");
});

/** 
 * Route to index
 * 
 */
app.get('/showjournal', secured, async (req, res) => {
  res.sendFile(__dirname+"/public/showjournal/index.html");
});




/** 
 * Post route to save the data
 * 
 */
app.post('/savejournal', async (req, res) => {
  if(req.body.sendkey){
    if(req.body.sendkey == "asdn9n34b374b8734vasdv7v73v324"){
      var data = req.body;

      dayjs.extend(utc)
      dayjs.extend(timezone)
      var date = dayjs().tz("Europe/Berlin").format('YYYY-MM-DD');

      var power_string = [];
      data.power1 != "" ? power_string.push("- "+data.power1) : "";
      data.power2 != "" ? power_string.push("- "+data.power2) : "";
      data.power3 != "" ? power_string.push("- "+data.power3) : "";
      power_string = power_string.join("\n");


      var send_data = {
          "name": "Journal "+date,
          "status": "Journal Archive",
          "custom_fields": [


              {
                "id": "0c5ec4ad-94b7-48be-b1a1-d8ea4e7ee8aa",
                //"name": "Was mache ich heute, um diesem Ziel näher zu kommen?",
                "value":power_string
              },
              {
                "id": "0f7cff9c-6c93-4e86-9f3b-8fb9fce1a55f",
                //"name": "Der Tag wird heute wundervoll, weil",
                "value":data.mindset1
              },
              {
                "id": "3cca2cda-1957-4dce-8e2f-af409b1c3020",
                //"name": "Wofür bin ich dankbar?",
                "value":data.mindfulness1
              },
              {
                "id": "3f0045f6-be40-4197-9f5d-a3eb2aa4b6bd",
                //"name": "Was ist heute wichtig?",
                "value":data.focus2
              },
              {
                "id": "48ce6bec-3d80-4ce6-968e-20cd1d2c9487",
                //"name": "Wie fühle ich mich heute?",
                "value":data.rating
              },
              {
                "id": "4f00e00d-4cf1-44ea-82db-a165f22e29c3",
                //"name": "Welche limitierenden Glaubenssätze sind mir aufgefallen?",
                "value":data.reflection3
              },
              {
                "id": "7ccd42c7-ef20-44db-9f98-955f2484c61a",
                //"name": "Durch welche positiven Glaubenssätze will ich diese ersetzen?",
                "value":data.reflection4
              },
              {
                "id": "81140a67-5f72-45b8-af2d-5ccac79d8dff",
                //"name": "Warum will ich dieses Ziel erreichen?",
                "value":data.sense1
              },
              {
                "id": "880a58e5-da98-4854-9899-0554301b10f6",
                //"name": "Erfolge, Erfreuliches & Chancen",
                "value":data.success1
              },
              {
                "id": "91f62dee-34b0-4dcd-b38f-f5ebad0fd67f",
                //"name": "Was kann ich heute für mich tun?",
                "value":data.good1
              },
              {
                "id": "a2a6fdcd-deda-421d-bf22-2e4a287ed3b4",
                //"name": "Was kann ich heute für andere tun?",
                "value":data.good2
              },
              {
                "id": "a7c05583-f799-4930-9ff2-7e5a27ebdf93",
                //"name": "An diesem Ziel arbeite ich heute",
                "value":data.goal
              },
              {
                "id": "c06224a5-ffc0-4e9a-8d58-386acde936e6",
                //"name": "Was hat mir Energie geraubt oder nicht gut getan?",
                "value":data.reflection1
              },
              {
                "id": "dd418c2c-82b6-4fdb-af02-f1b5080d18e0",
                //"name": "Welche meiner Maximen will ich heute bewusst erleben?",
                "value":data.focus1
              },
              {
                "id": "df77c813-a64d-46ca-8951-04fc62865adf",
                //"name": "Wie kann ich das verbessern?",
                "value":data.reflection2
              },
              {
                "id": "e4f21fe8-af21-4490-ae5e-25809b5fd356",
                //"name": "Was macht mich heute erfolgreich?",
                "value":data.innerstrength1
              }



            ]

          };
      var info = await clickup.Tasks.create_task(process.env.CLICK_UP_LIST_ID, send_data);


      if(data.task1 != ""){
        var send_data = {
          "name": data.task1,
          "status": "Open",
        };
        var info = await clickup.Tasks.create_task(process.env.CLICK_UP_LIST_ID, send_data);
      }

      if(data.task2 != ""){
        var send_data = {
          "name": data.task2,
          "status": "Open",
        };
        var info = await clickup.Tasks.create_task(process.env.CLICK_UP_LIST_ID, send_data);
      }

      if(data.task3 != ""){
        var send_data = {
          "name": data.task3,
          "status": "Open",
        };
        var info = await clickup.Tasks.create_task(process.env.CLICK_UP_LIST_ID, send_data);
      }


      res.send(true);
    }else{
      res.send(false);
    }
  }else{
    res.send(false);
  }
});


/** 
 * Post route to save the data
 * 
 */
app.post('/loadjournal', async (req, res) => {
  if(req.body.sendkey){
    if(req.body.sendkey == "asdn9n34b374b8734vasdv7v73v324"){
      var data = req.body;
      var date = data.date;

      dayjs.extend(utc);
      dayjs.extend(timezone);


      axios.get('https://api.clickup.com/api/v2/list/'+process.env.CLICK_UP_LIST_ID+'/task', {
          params: {
            archived: false,
            page:0,
            date_created_gt:dayjs(date+" 00:00:00").unix()*1000,
            date_created_lt:dayjs(date+" 23:59:59").unix()*1000
          },
          headers: {'Authorization': process.env.CLICK_UP_TOKEN, 'Content-Type': 'application/json'},
        })
        .then(function (response) {
          var task = response.data.tasks;

          if(task.length != 0){
            var custom_fields = task[0].custom_fields;
            res.send(custom_fields)
          }else{
            res.send(false);
          }
        })
        .catch(function (error) {
          console.log(error);
        });  
    }else{
      res.send(false);
    }
  }else{
    res.send(false);
  }
});


// ------------------------------------------
// Start Server
// ------------------------------------------
app.listen(
  port,
  () => console.log(`Start server on Port ${port}`)
);