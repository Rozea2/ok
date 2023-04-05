<!DOCTYPE html>
<html>
<head>
	<title>Rozszyfrowanie ci�gu Base64</title>
	<script>
		function decodeBase64(encodedString) {
		  const base64Url = encodedString.replace(/-/g, '+').replace(/_/g, '/');
		  const base64 = base64Url.replace(/[^A-Za-z0-9+/]/g, '');
		  const decodedString = atob(base64);
		  return decodedString;
		}

		function deszyfruj() {
		  const encodedString = document.getElementById("ciag-znakow").value;
		  const wynik = decodeBase64(encodedString);
		  document.getElementById("wynik-deszyfrowania").innerHTML = wynik;
		}
	</script>
</head>
<body>
	<header>
		<h1>Rozszyfrowanie ci�gu Base64</h1>
	</header>
	
	<main>
		<label for="ciag-znakow">Ci�g znak�w do odszyfrowania:</label>
		<input type="text" id="ciag-znakow" name="ciag-znakow" /><br /><br />
		<button onclick="deszyfruj()">Rozszyfruj</button><br /><br />
		<p>Wynik deszyfrowania:</p>
		<p id="wynik-deszyfrowania"></p>
	</main>
</body>
</html>