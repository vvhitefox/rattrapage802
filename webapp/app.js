const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios');

const allowedOrigins = ['localhost',
                      'www.example2.com']
app.use(cors());


app.get("/poid/:poid",async function (req,res){
	var demande = req.params.poid;
	res.send ("prix: "+(await axios.get('http://localhost:5001/prixliv/'+demande+"", {
    headers: {
        'Content-Type': 'application/json'
	}
	}
 )).data+" euros");
	
})

app.get("/prod/",async function (req,res){
	
	var rerre = await axios.get('http://localhost:5000', {
    headers: {
        'Content-Type': 'application/json'
	}
	}
 )
	console.dir(rerre)
	res.send ("produits:"+JSON.stringify(rerre.data));
	
})


app.get('/', function (req, res) {
  res.send(`

  
	<div>
		liste des Produits :
		<div id = "listProd">
		
		</div>
		<div>
			<input id="inputage" placeholder="poid" onChange="demanderPoid()"/>
		</div>
		<div id="resultat">
		
		</div>
	</div>
	
		<script>
		var xhr = new XMLHttpRequest();
			xhr.open("GET", "http://localhost:3000/prod", true);
			xhr.send();

			xhr.onreadystatechange = function() {
				if (xhr.readyState == XMLHttpRequest.DONE) {
					var jsonResponse = xhr.responseText;//JSON.parse(xhr.responseText)
					document.querySelector("#listProd").innerHTML = jsonResponse;
				}
			}
	
		const selectElement = document.querySelector('#inputage');

		selectElement.addEventListener('change', (event) => {
		  var demande = document.querySelector('#inputage').value
		  if(!demande.includes("."))
			  demande += ".0"
					var xhr = new XMLHttpRequest();
			xhr.open("get", "http://localhost:3000/poid/"+demande, true);
			xhr.send();

			xhr.onreadystatechange = function() {
				if (xhr.readyState == XMLHttpRequest.DONE) {
					document.querySelector("#resultat").innerHTML = xhr.responseText;
				}
			}
		});
	</script>
  `)
})
app.listen(3000)