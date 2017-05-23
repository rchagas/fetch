function navSection() {
    let ativo = document.querySelector('a.active');
    ativo.classList.remove('active');
    ativo = document.getElementById(ativo.dataset.section);
    ativo.classList.remove('active');
    event.target.classList.add('active');
    document.getElementById(event.target.dataset.section).classList.add('active');
}

let nav = document.querySelectorAll('#navbar a');
for (let a of nav) {
    a.addEventListener('click', navSection);
}


let movies = document.querySelector('#movies ul');
let url = 'https://swapi.co/api/films';
const guide = [[4,'I'],[5,'II'],[6,'III'],[1,'IV'],[2,'V'],[3,'VI'],[7,'VII']];
let aux = '';
for(let i=0 ; i<guide.length ; i++){
     aux += '<li data-episode-url='+url+'/'+guide[i][0]+'/>Episode '+guide[i][1]+'</li>';
}
movies.innerHTML = aux;
let episodes = document.querySelectorAll('#movies li');
for(let episode of episodes ){
    episode.addEventListener('click', texto);
}
/*function texto(){
    $.ajax({
    url: this.getAttribute('data-episode-url'),
    success: function(resposta) {
        console.log(resposta);
      document.querySelector('.reading-animation').innerHTML =  
              'Episode '+guide[resposta.episode_id-1][1]+'\n'
              +resposta.title+'\n\n'+resposta.opening_crawl;
    }
  });
} */
function texto(){
    console.log(this.getAttribute('data-episode-url'));
fetch(this.getAttribute('data-episode-url'), { method:'get' }).then(function(resposta) {
    console.log(resposta);
    document.querySelector('.reading-animation').innerHTML =  
              'Episode '+guide[resposta.episode_id-1][1]+'\n'
              +resposta.title+'\n\n'+resposta.opening_crawl;}).catch(function(err) { console.error(err); });
}
