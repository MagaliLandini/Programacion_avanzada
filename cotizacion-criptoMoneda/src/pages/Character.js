import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const id = getHash();
    const resp = await getData(id);
    const character = resp[0];
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
             
                <h2>${character.symbol}</h2>
            </article>

            <article class="Characters-card">
                <h3>Nombre:<span>${character.name}</span></ </h3>
                <h3>Nombre ID: <span>${character.nameid}</span></</h3>
                <h3>Rango: <span>${character.rank}</span></</h3>
                <h3>Porcentaje de cambio en 24 hs: <span>${character.percent_change_24h}%</span></</h3>
                <h3>Porcentaje de cambio en 1 hs: <span>${character.percent_change_1h}%</span></</h3>
                <h3>Precio en BTC: $<span>${character.price_btc}</span></</h3>
                <h3>Capitalizacion de mercado USD: $<span>${character.market_cap_usd}</span></</h3>
                <h3>Volumen 24: $<span>${character.volume24}</span></</h3>
                <h3>Volumen 24 a: $<span>${character.volume24a}</span></</h3>
                <h3>CSupply: <span>${character.csupply}</span></</h3>
                <h3>TSupply: <span>${character.tsupply}</span></</h3>
                <h3>MSupply: <span>${character.msupply}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Character;