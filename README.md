<div align='center'>
    <h1><b>Success Journal - Clickup</b></h1>
    <img src='https://raw.githubusercontent.com/Spottel/Diagonal-Service-Connector/master/public/readme/logo.png' width='250' height='250' />
    <p>The Success Journal ClickUp helps you to create a daily success journal. It save the data directly in ClickUp over the API.</p>


![JavaScript](https://badgen.net/badge/JavaScript/ES6/yellow?)
![Node.js](https://badgen.net/badge/Node.js/v18.15.0/green?)
![Docker](https://badgen.net/badge/Docker/23.0.3/cyan?)

![Github](https://badgen.net/github/release/Spottel/Diagonal-Service-Connector)
![Github](https://badgen.net/github/last-commit/Spottel/Diagonal-Service-Connector)


</div>

---

## 💾 **ABOUT**

The Success Journal - ClickUp is an Journal and it save the data on clickup.
You can make everyday an success journal or you can check your old ones.
You can see the data on ClickUp too.

After you run the app you can visit:
localhost:7125/?code=securecode or domain.com/?code=securecode
localhost:7125/showjournal?code=securecode or domain.com/showjournal?code=securecode



<br />

---

## 🗒️ **INSTALLATION**

### local installation:

1. clone the repo

```
git clone https://github.com/spottel/diagonalserviceconnector
```

2. cd into cloned repo

```
cd repo
```

3. install dependencies

```
npm install
```

5. set .env variables

6. run the app

```
npm run start
```


<br />

### run remotely via docker:

1. run the app

```
docker run -d --name=successjournalclickup -p 17400:7125 -v /path/to/docker.sock:/var/run/docker.sock -e SECURE_CODE='securecode' -e CLICK_UP_TOKEN='token' -e CLICK_UP_LIST_ID='list_id' --restart unless-stopped spottel/diagonalservice-connector:latest
```

<br />

---

## 🔎 **SHOWCASE**

Main Page
<br/>
<img src='https://raw.githubusercontent.com/Spottel/Diagonal-Service-Connector/master/public/readme/readme1.png' height='250' />

<br />
View Journal Page
<br/>
<img src='https://raw.githubusercontent.com/Spottel/Diagonal-Service-Connector/master/public/readme/readme2.png' height='250' />

<br />

<br />

---

## 💻 **TECHNOLOGIES**

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


<br />

---

## 📎 **LICENSE**

MIT License

Copyright © 2023 Frank Schünemann

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<br />

---

## 📌 **LINKS**

[<img alt="Instagram" src="https://img.shields.io/badge/frank_schuenemann_-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" />](https://www.instagram.com/frank_schuenemann_/)
[<img alt="Youtube" src="https://img.shields.io/badge/@FrankSchuenemann-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" />](https://www.youtube.com/@FrankSchuenemann)
[<img alt="TikTok" src="https://img.shields.io/badge/@frankschuenemann-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white" />](https://www.tiktok.com/@frankschuenemann)
[<img alt="Gitlab" src="https://img.shields.io/badge/frankschuenemann-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" />](https://gitlab.com/frankschuenemann)
[<img alt="Stack Overflow" src="https://img.shields.io/badge/frank-sch%c3%bcnemann-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />](https://stackoverflow.com/users/18687186/frank-sch%c3%bcnemann)
[<img alt="Github" src="https://img.shields.io/badge/Spottel-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/Spottel)
