const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const formData = new FormData(this);

	const data = {};
	formData.forEach(function(value, key) {
		data[key] = value;
	});

	const token = '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';
	const repo = 'repo';
	const path = 'dane.txt';
	const url = `https://api.github.com/repos/${repo}/contents/${path}`;

	const message = {
		message: 'Dodano dane do pliku',
	};

	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `token ${token}`,
			'Content-Type': 'application/json',
		},
	})
	.then(response => response.json())
	.then(response => {
		const content = response.content;
		const decoded = atob(content);
		const dataArr = decoded.split('\n');
		dataArr.pop();
		dataArr.push(JSON.stringify(data));
		const newData = dataArr.join('\n') + '\n';
		const contentEncoded = btoa(newData);
		const sha = response.sha;

		fetch(url, {
			method: 'PUT',
			headers: {
				Authorization: `token ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				message: message.message,
				content: contentEncoded,
				sha: sha,
			}),
		})
		.then(response => response.json())
		.then(response => {
			console.log(response);
			alert(message.message);
			form.reset();
		})
		.catch(error => {
			console.error(error);
			alert('Wystąpił błąd podczas dodawania danych do pliku');
		});
	})
	.catch(error => {
		console.error(error);
		alert('Wystąpił błąd podczas dodawania danych do pliku');
	});
});
