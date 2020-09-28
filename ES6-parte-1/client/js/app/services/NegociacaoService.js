class NegociacaoService {

    constructor() {
        this._httpService = new HttpService();
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) =>
            this._httpService.get('negociacoes/semana')
            .then(negociacoes => {
                resolve(negociacoes.map(negociacao => 
                    new Negociacao(
                        new Date(negociacao.data), 
                        negociacao.quantidade, 
                        negociacao.valor
                    )                  
                ))
            })
            .catch(erro => 
                reject('Ocorreu um erro ao importar negociações da semana.'))
        );
    }

    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) =>
            this._httpService.get('negociacoes/anterior')
            .then(negociacoes => {
                resolve(negociacoes.map(negociacao => 
                    new Negociacao(
                        new Date(negociacao.data), 
                        negociacao.quantidade, 
                        negociacao.valor
                    )                  
                ))
            })
            .catch(erro => 
                reject('Ocorreu um erro ao importar negociações da semana anterior.'))
        );
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) =>
        this._httpService.get('negociacoes/retrasada')
        .then(negociacoes => {
            resolve(negociacoes.map(negociacao => 
                new Negociacao(
                    new Date(negociacao.data), 
                    negociacao.quantidade, 
                    negociacao.valor
                )                  
            ))
        })
        .catch(erro => 
            reject('Ocorreu um erro ao importar negociações da semana retrasada.'))
    );
    }
}