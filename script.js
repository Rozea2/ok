function submitForm() {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  const n3 = document.getElementById("n3").value;

  const data = {
    n1: n1,
    n2: n2,
    n3: n3
  };

  const token = "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;
  const repoName = "repo";
  const path = "dane.txt";
  const url = `https://api.github.com/repos/${repoName}/contents/${path}`;

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `token ${token}`
    },
    body: JSON.stringify({
      message: "Dodano nowe dane",
      content: btoa(JSON.stringify(data)),
      sha: getSha(token, repoName, path)
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Dane zostały zapisane w pliku!");
  })
  .catch(error => {
    console.error(error);
  });
}

function getSha(token, repoName, path) {
  const url = `https://api.github.com/repos/${repoName}/contents/${path}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `token ${token}`
    }
  })
  .then(response => response.json())
  .then(data => {
    return data.sha;
  })
  .catch(error => {
    console.error(error);
  });
}
