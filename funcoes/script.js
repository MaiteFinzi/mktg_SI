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