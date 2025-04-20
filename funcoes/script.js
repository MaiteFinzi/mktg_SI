// Função para abrir/fechar o menu lateral
document.getElementById("menu-icon").addEventListener("click", function() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("open"); // Adiciona ou remove a classe 'open'
});

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;

    // Verifica se a página atual é "aplicativos.html"
    if (currentPage.includes("aplicativos.html")) {
        // Inicia o carrossel
        let currentIndex = 0;
        const images = document.querySelectorAll(".carousel-images img");
        const totalImages = images.length;

        // Função para mostrar a imagem com o índice atual
        function showImage(index) {
            const newTransformValue = `translateX(-${index * 100}%)`;
            document.querySelector(".carousel-images").style.transform = newTransformValue;
        }

        // Função para ir para a próxima imagem
        function nextImage() {
            currentIndex++;
            if (currentIndex >= totalImages) {
                currentIndex = 0; // Vai para a primeira imagem
            }
            showImage(currentIndex);
        }

        // Função para ir para a imagem anterior
        function prevImage() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalImages - 1; // Vai para a última imagem
            }
            showImage(currentIndex);
        }

        // Eventos de clique nos botões de navegação
        document.getElementById("next").addEventListener("click", nextImage);
        document.getElementById("prev").addEventListener("click", prevImage);

        // Carrossel automático (troca de imagem a cada 3 segundos)
        setInterval(nextImage, 8000);
    }
});

// Adiciona evento de clique para as sections
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        // Remove a classe active de todas as sections
        sections.forEach(s => s.classList.remove('active'));

        // Adiciona a classe active na section clicada
        section.classList.add('active');
    });
}); 

//funcionamento da camera
const abrirCameraBtn = document.getElementById('abrirCameraBtn');
const fecharCameraBtn = document.getElementById('fecharCameraBtn');
const capturarBtn = document.getElementById('capturarBtn');
const cameraContainer = document.getElementById('cameraContainer');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
let stream;

abrirCameraBtn.addEventListener('click', async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    cameraContainer.classList.remove('hidden'); // agora remove da div correta
  } catch (error) {
    alert('Erro ao acessar a câmera: ' + error);
  }
});

fecharCameraBtn.addEventListener('click', () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
  cameraContainer.classList.add('hidden');
});

capturarBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.classList.remove('hidden');
});

// Modal de produtos
const produtoModal = document.getElementById('produtoModal');
const fecharModal = document.getElementById('fecharModal');
const listaProdutos = document.getElementById('listaProdutos');

const produtos = [
  {
    nome: 'Gel de Limpeza Facial Antioxidante Vitamina C Botik 50g',
    descricao: 'Com a <b>Vitamina C</b> no combate ao envelhecimento precoce, este sabonete facial <b> Botik </b> traz uma limpeza profunda e concentrada que auxilia no combate ao excesso de oleosidade na firmeza da pele, dando-lhe uma aparência mais jovial e com menos linhas de expressão características do envelhecimento precoce.<br>A ação antioxidante da<b> Vitamina C </b>também ajuda no combate aos radicais livres e na uniformização do tom da pele, proporcionando uma pele mais firme e radiante.<br><b>Vegano</b>, este<b> Gel de Limpeza Facial</b> com 50g é a quantidade ideal para carregar na bolsa, na mochila ou no nécessaire, trazendo praticidade ao seu skincare aonde quer que você vá.  ',
    imagem: '/imagens/limpeza-facial.png'
  },
  {
    nome: 'Creme Nutritivo Firmador Botik Resveratrol E Silício 40g',
    descricao: 'Ideal para usar na <b>etapa de hidratação</b> da rotina de skincare, este<b> creme nutritivo firmador</b> conta com ativos que proporcionam <b>hidratação profunda</b> para a pele, melhorando o ressecamento e fortalecendo a barreira cutânea. Sua fórmula <b>potencializa</b> o colágeno e promove uma recarga de nutrientes que aumenta a densidade, melhora a firmeza e reduz linhas finas<br>Este creme firmador traz uma combinação poderosa de ativos: <b>Resveratrol</b>, que <b>previne</b> o aparecimento de rugas e linhas de expressão . Com <b>ação antioxidante</b>, <b>reduz os radicais livres</b> e recupera a luminosidade natural da pele. <b>+ Silício</b>, que possui ação reestruturante na pele, conferindo mais firmeza e aumentando os níveis de hidratação na pele.',
    imagem: '/imagens/creme.png'
  },
  {
    nome: 'Sérum Facial de Alta Potência Botik Retinol Puro 30ml',
    descricao: 'O <b>sérum noturno</b> é indicado para pele com flacidez, rugas profundas e acostumadas a utilizar <b>Retinol Puro</b>. Confira os benefícios:<br>Formulado com <b>0,3% de Retinol Puro</b>, a máxima concentração de ativos permitido em cosméticos;<br> Potencializa a produção de colágeno;<br> <b>Restaura a elasticidade</b> e aumenta a firmeza da pele em até 2 semanas;<br><b>Reduz rugas profundas visíveis</b> em até 4 semanas.<br>Além disso, ele conta com uma textura sérum não oleosa que absorve rapidamente na pele e tem toque seco.',
    imagem: '/imagens/retinol.png'
  },
  {
    nome: 'Sérum de Alta Potência Ácido Mandélico + Tranexâmico 5% Botik 30ml',
    descricao: 'O <b>Sérum de Alta Potência Ácido Mandélico + Tranexâmico 5% Botik</b> é o produto diário que irá revolucionar o seu skincare. Indicado para todos os tipos de pele, inclusive oleosa e acnéica.<br>Sua fórmula é capaz de reduzir a diferença de tonalidades na pele, devolvendo seu tom natural e uniforme com resultados visíveis e comprovados a partir de 4 semanas de uso.<br>O <b>Sérum Uniformizador Botik com Ácido Tranexâmico</b> atua em todas as etapas do processo de pigmentação, prevenindo marcas causadas pela acne e pela exposição solar, <b>uniformizando a pele de forma gradual e efetiva</b>, deixando-a mais uniforme em 4 semanas.',
    imagem: '/imagens/acido-mandelico.png'
  }
];


canvas.addEventListener('click', () => {
  listaProdutos.innerHTML = '';
  produtos.forEach(produto => {
    const li = document.createElement('li');
    li.classList.add('produto-item');
    li.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="info-produto">
        <strong>${produto.nome}</strong>
        <p>${produto.descricao}</p>
      </div>
    `;
    listaProdutos.appendChild(li);
  });
  
  produtoModal.classList.remove('hidden');
});

fecharModal.addEventListener('click', () => {
  produtoModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === produtoModal) {
    produtoModal.classList.add('hidden');
  }
});
