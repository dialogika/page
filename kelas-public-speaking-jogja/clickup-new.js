
document.getElementById('uploadForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  let whatsapp = document.getElementById('whatsapp').value;
  const name = document.getElementById('names').value.trim();
  const note = document.getElementById('messages').value.trim();
  const program = document.getElementById('programs').value;
  const address = document.getElementById('locations').value;

  const apiToken = 'pk_3640079_B56O8X0HW6FAEIZJFFJAQW99IAHQMF8N';
  const listId = '14355106';
  const whatsappUrl = `https://wa.me/62${whatsapp}`;

  try {
    const createTaskResponse = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
      method: 'POST',
      headers: {
        'Authorization': apiToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        custom_fields: [
          {
            id: '856f5a4e-fe7b-4ca3-8f2a-82ba0a1816b2',
            value: note
          },
          {
            id: '1ea48bee-9f93-421e-a9e9-b140b8144891',
            value: [program]
          },
          {
            id: 'cebb3fac-770a-4d4d-9056-1cab027bf9e1',
            value: address
          },
          {
            id: '76680f29-6988-4d55-ab67-508f051c2ed9',
            value: whatsappUrl
          }
        ]
      })
    });

    if (!createTaskResponse.ok) {
      const error = await createTaskResponse.json();
      throw new Error('Kesalahan saat membuat tugas: ' + (error.err || 'Kesalahan tidak diketahui'));
    }

    alert('Anda Akan Segera Terhubung Ke Whatsapp!');
  } catch (error) {
    console.error('Kesalahan:', error);
    alert('Terjadi kesalahan. Silakan coba lagi.');
  }
});