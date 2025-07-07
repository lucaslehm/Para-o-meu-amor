const dataInicial = new Date("2024-08-03T00:00:00");

function atualizarTempo() {
  const agora = new Date();
  const diferenca = agora - dataInicial;

  const segundosTotais = Math.floor(diferenca / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);
  const anosTotais = Math.floor(diasTotais / 365);
  const mesesTotais = Math.floor(diasTotais / 30.44); // Aproximação de 30.44 dias por mês

  const anos = anosTotais;
  const meses = mesesTotais % 12;
  const dias = diasTotais % 30.44;
  const horas = horasTotais % 24;
  const minutos = minutosTotais % 60;
  const segundos = segundosTotais % 60;

  document.querySelector(".tempo-em-anos").innerText = anos.toString().padStart(2, "0");
  document.querySelector(".tempo-em-meses").innerText = meses.toString().padStart(2, "0");
  document.querySelector(".tempo-em-dias").innerText = Math.floor(dias).toString().padStart(2, "0");
  document.querySelector(".tempo-em-horas").innerText = horas.toString().padStart(2, "0");
  document.querySelector(".tempo-em-minutos").innerText = minutos.toString().padStart(2, "0");
  document.querySelector(".tempo-em-segundos").innerText = segundos.toString().padStart(2, "0");
}

setInterval(atualizarTempo, 1000);


const audioElement = document.getElementById("audioElement");
const playPauseButton = document.getElementById("playPauseButton");
const icon = document.getElementById("icon");

function toggleAudio() {
    if (audioElement.paused) {
        audioElement.play();
        icon.className = "bx bx-pause";  // Ícone de pausess
    } else {
        audioElement.pause();
        icon.className = "bx bx-play";   // Ícone de play
    }
}