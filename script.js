function uploadFiles() {
  const files = document.getElementById('fileInput').files;
  if (files.length === 0) {
    document.getElementById('status').innerText = '❗ Selecione arquivos';
    return;
  }

  document.getElementById('status').innerText = '⏳ Upload em andamento...';
  // Aqui futuramente entra a chamada para sua API do Apps Script.
  setTimeout(() => {
    document.getElementById('status').innerText = '✅ Upload simulado concluído!';
  }, 1500);
}
