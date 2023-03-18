<script>
  const token = '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';
  const repoName = 'repo';
  const fileName = 'dane.txt';

  function createFile(content) {
    const url = `https://api.github.com/repos/${repoName}/contents/${fileName}`;
    const data = {
      message: 'Dodano nowy plik',
      content: btoa(content),
    };
    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    return fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const n3 = document.getElementById('n3').value;
    const content = `${n1}, ${n2}, ${n3}`;

    createFile(content).then(() => {
      alert('Dane zapisano do pliku na Githubie!');
      document.getElementById('form').reset();
    });
  }

  document.getElementById('form').addEventListener('submit', handleSubmit);
</script>
