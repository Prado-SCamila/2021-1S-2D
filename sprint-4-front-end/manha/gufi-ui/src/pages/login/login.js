import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMensagem : '',
            isLoading : false
        }
    }

    // Função que faz a chamada para a API para realizar o login
    efetuaLogin = (event) => {
        // Ignora o comportamento padrão do navegador ( recarregar a página, por exemplo )
        event.preventDefault();

        // Remove a frase de erro do state erroMensagem e define que a requisição está em andamento
        this.setState({ erroMensagem : '', isLoading : true })

        // Define a URL e o corpo da requisição
        axios.post('http://localhost:5000/api/login', {
            email : this.state.email,
            senha : this.state.senha
        })

        // Verifica o retorno da requisição
        .then(resposta => {
            // Caso o status code seja 200,
            if (resposta.status === 200) {
                // salva o token no localStorage,
                localStorage.setItem('usuario-login', resposta.data.token);
                // exibe o token no console do navegador
                console.log('Meu token é: ' + resposta.data.token)
                // e define que a requisição terminou
                this.setState({ isLoading : false })
            }
        })

        // Caso haja um erro,
        .catch(() => {
            // define o valor do state erroMensagem com uma mensagem personalizada e que a requisição terminou
            this.setState({ erroMensagem : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false })
            
        })
    }

    // Função genérica que atualiza o state de acordo com o input 
    // pode ser reutilizada em vários inputs diferentes
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <p>Bem vindo(a)! <br/> Faça login para acessar a sua conta.</p>

                        {/* Faz a chamada para a função de login quando o botão é pressionado */}
                        <form onSubmit={this.efetuaLogin}>
                            <input 
                                // E-mail
                                type="text"
                                name="email"
                                // Define que o input email recebe o valor do state email
                                value={this.state.email}
                                // Faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                onChange={this.atualizaStateCampo}
                                placeholder="username"
                            />

                            <input 
                                // Senha
                                type="password"
                                name="senha"
                                // Define que o input senha recebe o valor do state senha
                                value={this.state.senha}
                                // Faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                onChange={this.atualizaStateCampo}
                                placeholder="password"
                            />

                            {/* Exibe a mensagem de erro ao tentar logar com credenciais inválidas */}
                            <p style={{ color : 'red' }} >{this.state.erroMensagem}</p>

                            {/* 
                                Verifica se a requisição está em andamento.
                                Se estiver, desabilita o click do botão
                            */}

                            {
                                // Caso seja true, renderiza o botão desabilitado com o texto 'Loading...'
                                this.state.isLoading === true &&
                                <button type="submit" disabled>Loading...</button>
                            }

                            {
                                // Caso seja false, renderiza o botão habilitado com o texto 'Login'
                                this.state.isLoading === false &&
                                <button
                                    type="submit"
                                    disabled={ this.state.email === '' || this.state.senha === '' ? 'none' : '' }
                                >
                                    Login
                                </button>
                            }

                            {/* <button type="submit">
                                Login
                            </button> */}
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

export default Login;