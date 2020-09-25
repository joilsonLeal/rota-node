class DateHelper {
    static textoParaData(texto) {
        return new Date(...
            texto.split('-')
            .map((item, index) => item - index % 2)
        );
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}