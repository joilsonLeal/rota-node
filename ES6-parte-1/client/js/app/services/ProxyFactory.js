class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, reciever) {
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, reciever);
            },

            set(target, prop, value, reciever) {
                if(props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, reciever);
            }
        });
    }

    static _ehFuncao(func) {
        return typeof(func) == typeof(Function);
    }
}