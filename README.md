# Crypto Tracker App

<img src="./public/assets/demo.gif">

---

This project has created as the end project for  [React module](https://github.com/HackYourFuture/React) of [Hack Your Future](https://www.hackyourfuture.net/) program.

### link to the Demo:
[Demo](https://react-express-cryptotracker.netlify.app/)

---

## Features

    - Show table of top 100 assets in Crypto market plus their info and price charts.
    
    - Show all pairs listed on Binance crypto exchange and their Technical charts with all useful options.
    
    - Show other market meta data include most trusted exchanges, most trend assets and other global data. 
    
    - Show top5 assets live price using Websockets. 

---

## 🛠️ Used tools and languages

![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26)
![](https://img.shields.io/badge/Style-CSS3-informational?style=flat&logo=CSS3&color=1572B6)
![](https://img.shields.io/badge/style-SASS-informational?style=flat&logo=SASS&color=E34F26)
![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&color=F05032)
![](https://img.shields.io/badge/Tools-Netlify-informational?style=flat&logo=netlify&color=00C7B7)
![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717)
![](https://img.shields.io/badge/Tools-VSCode-informational?style=flat&logo=visualstudiocode&color=1572B6)
![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=React&color=F7DF1E)
![](https://img.shields.io/badge/Code-Node.js-informational?style=flat&logo=Node.js&color=E34F26)
![](https://img.shields.io/badge/Tools-express-informational?style=flat&logo=express&color=1572B6)
![](https://img.shields.io/badge/Tools-heroku-informational?style=flat&logo=heroku&color=E34F26)

---
## Development

To run this project locally you will need to enter the command `npm run dev` at the root folder in order to run server and client at same time locally.
Server is running on `localhost:5000` and React client is running on `localhost:3000` by default.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

## Structure

Let's run through the folders:

```
public
src
└── hooks
|    └── useFetch.js
|    └── useWs.js
└── components
|    └── Homepage.js
|    └── CategoryPage.js
|    └── CategoryInfo.js
|    └── ExchangesTable.js
|    └── GlobalTable.js
|    └── LightChart.js
|    └── LivePriceElement.js
|    └── LivePriceList.js
|    └── MarketDataPage.js
|    └── NavBar.js
|    └── PairsList.js
|    └── TechnicalChart.js
|    └── TechnicalPage.js
|    └── TechnicalWidget.js
|            ...
|     
└── app.js
└── index.js
└── ThemContext.js
└── WatchListContext.js
└── TopCoinsContext.js


- `public` this contains our `index.html` file
- `src` this contains all of our source code like hooks, routes and components.


