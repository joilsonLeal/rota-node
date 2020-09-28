class NegociacaoService {
    async obterNegociacoesDaSemana(cb) {
        await fetch('negociacoes/semana')
            .then(response => response.json())
            .then(result => {
                cb(null, result.map(negociacao => 
                    new Negociacao(
                        new Date(negociacao.data), 
                        negociacao.quantidade, 
                        negociacao.valor
                    )                  
                ))
            })
            .catch(err => {
                cb('Ocorreu um erro ao importar as negociações.', null);
        });
    }
}