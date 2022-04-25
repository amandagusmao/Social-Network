import { atualizarPerfil } from '../firebase/funcoesFirestore.js';
import { validarSessaoStorage } from './validacoes.js';
import { subirFileStorage } from '../firebase/funcoesStorage.js';

// Renderizar sessão editar perfil
export const conteudoEditarPerfil = () => {
    const editarSecao = document.createElement('section');
    editarSecao.classList.add('corpoEditarPerfil');
    const userData = validarSessaoStorage();
    editarSecao.innerHTML = `
          <nav class= "barraNavegacaoInferior">
              <ul>
                  <li class="list">
                      <a class="abrirExibicao">
                          <span class="icon">
                              <img src="imagens/users-three.png">
                          </span>
                      </a>
                  </li>
                  <li class="list">
                      <a href="#/timeline">
                          <span class="icon">
                              <img src="imagens/house-fill.png">
                          </span>
                      </a>
                  </li>
                  <li class="list">
                      <a href="#/meuperfil">
                          <span class="icon">
                              <img src="${userData.imgUsuario}">
                          </span>
                      </a>
                  </li>
              </ul>
          </nav>

          <div class= "fundoExibicao" id="fundoExibicao">
          <div class="exibicao-perfil-container" id="exibicaoPerfilCont">
              <p class="close" id="close"></p>
              <div class="exibicaoContent exibicaoClose" id="exibicao">
                  <div class="container-superior-perfil">
                      <div class="fundoImagemSecaoPerfil">
                          <img id="imgDeCapaUsuario"src="${userData.imgCapa}">
                      </div>
                      <div class="imgAtualDoUser" id="imgAtualDoUser">
                          <div class="imgPerfilUsuario">
                              <img id="imgUsuario" src="${userData.imgUsuario}">
                          </div>

                          <div class="conteudoTextoPerfil">
                              <h2 id="nomeDoUsuario">${userData.username}</h2>
                              <p id="descricaoDoPerfil">${userData.pronomes}</p>
                              <p id="localDoPerfil">${userData.local}</p>
                          </div>
                      </div>
                  </div>