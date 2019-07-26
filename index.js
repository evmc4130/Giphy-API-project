var giphyApiKey = "rjgzVsxdrntWAWocnTOtSiop08w8AkTK";

function sendApiRequest(){
  var input = document.getElementById("input").value;
  console.log(input);

  // var newNode = document.createElement("div");
  // newNode.innerText = input;
  // document.body.appendChild(newNode);

  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyApiKey}`;
  console.log(giphyApiUrl);

  fetch(giphyApiUrl)
  .then(function(response){
    return response.json();

  })
  .then(function(json){
    var img = document.createElement("img");
    img.src =  json["data"][0]["images"]["fixed_height"]["url"]
    document.body.appendChild(img)
  })
}
