import axios from 'axios';

class MarvelController {

  constructor() {
    this.urlGeral = `https://gateway.marvel.com/v1/public/characters?apikey=8e56e61d9b22af6bf34747ec1bf1f79f&hash=03bd23bebeabf681112f3c0b3929047b&ts=1610916868`;
    this.urlLimpa = `https://gateway.marvel.com/v1/public/characters/`
    this.urlChave = `?apikey=8e56e61d9b22af6bf34747ec1bf1f79f&hash=03bd23bebeabf681112f3c0b3929047b&ts=1610916868`;
    this.registrosPorPagina = 30;

  }

  index = (req, res) => {
    const { pagina } = req.query;

    let offset = 0;

    if (pagina && pagina > 1) {
      offset = ((pagina - 1) * this.registrosPorPagina) + 1;
    }

    const url = this.urlGeral + `&limit=${this.registrosPorPagina}&offset=${offset}`

    axios.get(url)
      .then(response => {
        return res.json(response.data);
      });
  };

  filtrar = (req, res) => {
    const { personagem } = req.query;

    const url = this.urlGeral + `&nameStartsWith=${personagem}`;

    axios.get(url)
      .then(response => {
        return res.json(resoponse);
      });
  }

  detalhar = (req, res) => {
    const { id } = req.params;

    const url = this.urlLimpa + `${id}` + this.urlChave;

    
    axios.get(url)
      .then(response => {
        console.log(response.data);
      });esults

  };
};

export default new MarvelController();
