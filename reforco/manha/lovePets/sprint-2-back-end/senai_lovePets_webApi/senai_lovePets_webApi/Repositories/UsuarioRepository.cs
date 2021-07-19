using senai_lovePets_webApi.Contexts;
using senai_lovePets_webApi.Domains;
using senai_lovePets_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_lovePets_webApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        lovePetsContext ctx = new lovePetsContext();

        /// <summary>
        /// Busca um usuário existente através do seu e-mail e sua senha
        /// </summary>
        /// <param name="email">O valor do e-mail digitado pelo usuário</param>
        /// <param name="senha">O valor da senha digitada pelo usuário</param>
        /// <returns>Um usuário encontrado</returns>
        public Usuario BuscarPorEmailSenha(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
