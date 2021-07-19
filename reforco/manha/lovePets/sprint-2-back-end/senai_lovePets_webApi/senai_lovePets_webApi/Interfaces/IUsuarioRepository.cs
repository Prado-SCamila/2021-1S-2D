using senai_lovePets_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_lovePets_webApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Busca um usuário existente através do seu e-mail e sua senha
        /// </summary>
        /// <param name="email">O valor do e-mail digitado pelo usuário</param>
        /// <param name="senha">O valor da senha digitada pelo usuário</param>
        /// <returns>Um usuário encontrado</returns>
        Usuario BuscarPorEmailSenha(string email, string senha);
    }
}
