function mostrarInfo(nombre) {
  const info = document.getElementById("info");
  info.style.display = "block";
  info.innerHTML = `Información de la materia: <strong>${nombre}</strong><br>
  - Carga horaria: 64 hs<br>
  - Correlativas: ninguna<br>
  - Estado: En curso`;
}
