
const content = null || document.getElementById('content');

const url = 'https://github-repos.p.rapidapi.com/search?user=Randys04';
const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '53c1fb7a66mshdbcbec7299bf206p1589dfjsn790f967bc100',
    'X-RapidAPI-Host': 'github-repos.p.rapidapi.com'
    }
};

async function getRepos(){
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
        
    } catch (error) {

    }
}

(async ()=>{
    try {
        const repos = await getRepos();
        let view = `
        ${repos.repositories.map(repo =>`
        <div class="group relative">
            <div style="display: flex; 
                        justify-content: center;
                        text-align: center;
                        padding: 5px;"
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <h3>${repo.name.replace(/[-_]/g, ' ')}</h3>
            </div>
            <div class="mt-4 flex justify-between" style="display: flex; justify-content: center;">
                <a href="${repo.url}" target="_blank">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        Click to see it on github
                    </h3>
                </a>
            </div>
        </div>
        `)}
        `;
        
        view = view.replace(/,/g,'');
        content.innerHTML = view;
    } catch (error) {
        
    }
})();


