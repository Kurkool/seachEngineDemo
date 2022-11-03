function callSearch() {

	var textinput = document.getElementById("search").value;

	fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + textinput, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "948407dd54msh0a0cd0b03e08f10p1d8a62jsn38c1511b9d74",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then(responsedata => 
		appendResult(responsedata)
	

	)
	.catch(err => {
		console.error(err);
	});

	
}

function appendResult(responsedata) {



	
	var table = document.getElementById("list");

	if(table!=""){
		$("#table_of_items tbody tr").remove(); //clear the old search history first before perform a new list
	}
	
		var colnum = 7;
		for (var i = 0; i < responsedata.data.length; i++) {
			var this_tr = document.createElement("tr");

			var result_num = document.createElement("td");
			result_num.innerHTML = i+1
			this_tr.appendChild(result_num);

			var song_id = document.createElement("td");
			song_id.innerHTML = JSON.stringify(responsedata.data[i].id)
			this_tr.appendChild(song_id);
			
	
			var song_img = document.createElement("td");
			song_img.innerHTML = "<img src='"+ responsedata.data[i].album.cover +" '>"
			this_tr.appendChild(song_img);
	
			var song_title = document.createElement("td");
			song_title.innerHTML = JSON.stringify(responsedata.data[i].title)
			this_tr.appendChild(song_title);
	
			var song_album_title = document.createElement("td");
			song_album_title.innerHTML = JSON.stringify(responsedata.data[i].album.title)
			this_tr.appendChild(song_album_title);
	
			var song_artist_name = document.createElement("td");
			song_artist_name.innerHTML = JSON.stringify(responsedata.data[i].artist.name)
			this_tr.appendChild(song_artist_name);
	
			var song_duration = document.createElement("td");
			song_duration.innerHTML = JSON.stringify(responsedata.data[i].duration) + " (sec.)"
			this_tr.appendChild(song_duration);
	
			var song_preview = document.createElement("td");
			song_preview.innerHTML = 
			`<audio controls>
				<source src='${responsedata.data[i].preview}' />
				Your browser does not support the audio element.
			</audio>`
			this_tr.appendChild(song_preview);
	
	
			var song_fullsong = document.createElement("td");
			song_fullsong.innerHTML = 	`<a href="${responsedata.data[i].link}">Listen</a>`
	
	
			this_tr.appendChild(song_fullsong);
	
	
			table.appendChild(this_tr);
		}
		

	
	


}

