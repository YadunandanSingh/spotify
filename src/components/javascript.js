export function searchbtn() {
    
    var visblebtn = document.getElementById("search-btn")
    var visblesearchbtn = document.getElementById("searchbtn")

    visblebtn.style.visibility='visible'
    visblesearchbtn.style.visibility='visible'
}

export async function fetchTopTracks() {
    var songcard = document.getElementById("song")
    var usersec = document.getElementById("search-btn").value
    const response = await fetch(`https://saavn.dev/api/search/songs?query=${usersec}`);
    const data = await response.json();
    var songimg = data.data.results[0].image[2].url
    var songurl = data.data.results[0].downloadUrl[4].url
    var songname = data.data.results[0].album.name
    var artistsname = data.data.results[0].artists.all[0].name

    console.log(data.data.results[0].image[1])
    // return data.tracks.track;
    
    songcard.innerHTML = `
    <img src="${songimg}" alt="${songname} class="songimg" style="width: 100%; height: 200px;" >
            <div class="track-info" style="color:white">
                <h2>${songname}</h2>
                <p>Artist: ${artistsname}</p>
                
            </div>
            <audio controls>
            <source src="${songurl}">
            </audio>
            
    `


}