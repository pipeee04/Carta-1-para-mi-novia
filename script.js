function abrirSobre() {
  const sobre = document.getElementById('sobre');
  const mensaje = document.getElementById('mensaje');
  const presioname = document.querySelector('.presioname');
  const decoracion = document.getElementById('decoracion');

  // Mostrar el sobre y abrirlo con animación
  sobre.style.display = 'block';
  sobre.classList.add('abierto');

  // Mostrar el mensaje después de un retraso para sincronizar con la animación
  setTimeout(() => {
      mensaje.style.display = 'block';
  }, 1800); // 1.8 segundos para que el sobre se abra completamente

  // Crear flores 🌸 que flotan suavemente
  for (let i = 0; i < 12; i++) {
      const flor = document.createElement('div');
      flor.className = 'flor';
      flor.textContent = '🌸';
      flor.style.top = Math.random() * 100 + '%';
      flor.style.left = Math.random() * 100 + '%';
      flor.style.animationDelay = `${Math.random() * 6}s`;
      decoracion.appendChild(flor);
  }

  // Crear mariposas 🦋 que vuelan suavemente
  for (let i = 0; i < 8; i++) {
      const mariposa = document.createElement('div');
      mariposa.className = 'mariposa';
      mariposa.textContent = '🦋';
      mariposa.style.top = Math.random() * 100 + '%';
      mariposa.style.left = Math.random() * 100 + '%';
      mariposa.style.animationDelay = `${Math.random() * 10}s`;
      decoracion.appendChild(mariposa);
  }

  // Eliminar el texto "Presióname"
  presioname.style.display = 'none';
}