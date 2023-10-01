import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();
    
    const view =  `
        <div class="Characters">
        ${characters.data.map(character => `
        <article class="Character-item">
           <a href="#/${character.id}/">
           <h2>${character.name}</h2>
           </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;