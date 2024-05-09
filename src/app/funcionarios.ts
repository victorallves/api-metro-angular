export interface Funcionarios {
    id: number;
    nome: string;
    cargo: string;
    salario: number;
    linha: {
        idLinha: number;
        nome: string;
        tipoTransporte: string;
        estacaoInicio: string;
        estacaoFim: string;
    };
    veiculo: {
        idVeiculo: number;
        tipo: string;
        modelo: string;
        numeroIdentificacao: string;
    };
}

