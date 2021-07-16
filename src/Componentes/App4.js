import React from 'react';

class App4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: undefined, txtNome: '' }
    }
    changeTxtNome = (evento) => {
        this.setState({ txtNome: evento.target.value })
    }
    persistTxtnome = () => {
        this.setState({ nome: this.state.txtNome })
    }
    render() {
        const renderForm = () => {
            return (
                <>
                    nome: <input type='text' onChange={this.changeTxtNome} />
                    <button onClick={this.persistTxtnome}>Salvar</button>
                    
                </>
            )
        };
        const renderText =() =>(<p> Olá {this.state.nome}</p>)
        return !this.state.nome ? renderForm() : renderText();
    }
}

export default App4;
