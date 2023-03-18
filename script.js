{\rtf1\ansi\deff0{\fonttbl{\f0\fnil\fcharset0 Calibri;}{\f1\fnil\fcharset238 Calibri;}}
{\colortbl ;\red0\green0\blue255;}
{\*\generator Msftedit 5.41.21.2510;}\viewkind4\uc1\pard\sa200\sl276\slmult1\lang1033\f0\fs22 $(document).ready(function()\{\par
\tab $('#myform').submit(function(e)\{\par
\tab\tab e.preventDefault();\par
\par
\tab\tab var n1 = $('#n1').val();\par
\tab\tab var n2 = $('#n2').val();\par
\tab\tab var n3 = $('#n3').val();\par
\par
\tab\tab var data = n1 + ',' + n2 + ',' + n3;\par
\par
\tab\tab var access_token = 'YOUR_PERSONAL_ACCESS_TOKEN';\par
\tab\tab var repo_name = 'YOUR_REPOSITORY_NAME';\par
\tab\tab var file_name = 'dane.txt';\par
\par
\tab\tab $.ajax(\{\par
\tab\tab\tab url: '{\field{\*\fldinst{HYPERLINK "https://api.github.com/repos/"}}{\fldrslt{\ul\cf1 https://api.github.com/repos/}}}\f0\fs22 ' + repo_name + '/contents/' + file_name,\par
\tab\tab\tab type: 'GET',\par
\tab\tab\tab dataType: 'json',\par
\tab\tab\tab headers: \{\par
\tab\tab\tab\tab 'Authorization': 'token ' + access_token\par
\tab\tab\tab\},\par
\tab\tab\tab success: function(data)\{\par
\tab\tab\tab\tab var sha = data.sha;\par
\tab\tab\tab\tab saveData(data.content, sha, access_token, repo_name, file_name);\par
\tab\tab\tab\},\par
\tab\tab\tab error: function()\{\par
\tab\tab\tab\tab saveData('', null, access_token, repo_name, file_name);\par
\tab\tab\tab\}\par
\tab\tab\});\par
\par
\tab\tab function saveData(content, sha, access_token, repo_name, file_name)\{\par
\tab\tab\tab var dataUrl = 'data:text/plain;base64,' + btoa(content + data);\par
\par
\tab\tab\tab $.ajax(\{\par
\tab\tab\tab\tab url: '{\field{\*\fldinst{HYPERLINK "https://api.github.com/repos/"}}{\fldrslt{\ul\cf1 https://api.github.com/repos/}}}\f0\fs22 ' + repo_name + '/contents/' + file_name,\par
\tab\tab\tab\tab type: 'PUT',\par
\tab\tab\tab\tab dataType: 'json',\par
\tab\tab\tab\tab headers: \{\par
\tab\tab\tab\tab\tab 'Authorization': 'token ' + access_token\par
\tab\tab\tab\tab\},\par
\tab\tab\tab\tab data: JSON.stringify(\{\par
\tab\tab\tab\tab\tab message: 'Dodano dane do pliku',\par
\tab\tab\tab\tab\tab content: btoa(dataUrl),\par
\tab\tab\tab\tab\tab sha: sha\par
\tab\tab\tab\tab\}),\par
\tab\tab\tab\tab success: function()\{\par
\tab\tab\tab\tab\tab $('#status').html('Dane zosta\lang1045\f1\'b3y zapisane w pliku!');\par
\tab\tab\tab\tab\tab $('#n1').val('');\par
\tab\tab\tab\tab\tab $('#n2').val('');\par
\tab\tab\tab\tab\tab $('#n3').val('');\par
\tab\tab\tab\tab\},\par
\tab\tab\tab\tab error: function()\{\par
\tab\tab\tab\tab\tab $('#status').html('Wyst\'b9pi\'b3 b\'b3\'b9d podczas zapisywania danych');\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\});\par
\tab\tab\}\par
\tab\});\par
\});\lang1033\f0\par
}
 