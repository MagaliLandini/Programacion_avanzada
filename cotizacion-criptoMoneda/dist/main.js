(()=>{"use strict";const n=async n=>{const a=n?`https://api.coinlore.net/api/ticker/?id=${n}`:"https://api.coinlore.net/api/tickers/";try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error..!!",n)}},a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=()=>'\n        <div class="Error404">\n            <h2> Error 404 </>\n         </div>   \n         \n    ',s={"/":async()=>`\n        <div class="Characters">\n        ${(await n()).data.map((n=>`\n        <article class="Character-item">\n           <a href="#/${n.id}/">\n           <h2>${n.name}</h2>\n           </a>\n        </article>\n                `)).join("")}\n        </div  \n            `,"/:id":async()=>{const e=a(),s=(await n(e))[0];return`\n        <div class="Characters-inner">\n            <article class="Character-card">\n             \n                <h2>${s.symbol}</h2>\n            </article>\n\n            <article class="Characters-card">\n                <h3>Nombre:<span>${s.name}</span></ </h3>\n                <h3>Nombre ID: <span>${s.nameid}</span></</h3>\n                <h3>Rango: <span>${s.rank}</span></</h3>\n                <h3>Porcentaje de cambio en 24 hs: <span>${s.percent_change_24h}%</span></</h3>\n                <h3>Porcentaje de cambio en 1 hs: <span>${s.percent_change_1h}%</span></</h3>\n                <h3>Precio en BTC: $<span>${s.price_btc}</span></</h3>\n                <h3>Capitalizacion de mercado USD: $<span>${s.market_cap_usd}</span></</h3>\n                <h3>Volumen 24: $<span>${s.volume24}</span></</h3>\n                <h3>Volumen 24 a: $<span>${s.volume24a}</span></</h3>\n                <h3>CSupply: <span>${s.csupply}</span></</h3>\n                <h3>TSupply: <span>${s.tsupply}</span></</h3>\n                <h3>MSupply: <span>${s.msupply}</span></</h3>\n            </article>\n        </div> \n    `},"/contact":"Contact"},t=async()=>{const n=document.getElementById("header"),t=document.getElementById("content");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1 />\n                    <a href="/">\n                    Criptomoneda\n                    </a>  \n                </h1>\n            </div>\n\n            <div class="Header-nav">\n                <a href="#/about">\n                    About\n                </a>\n\n            </div>\n        </div>\n    ';let c=a(),r=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),i=s[r]?s[r]:e;t.innerHTML=await i()};window.addEventListener("load",t),window.addEventListener("hashchange",t)})();