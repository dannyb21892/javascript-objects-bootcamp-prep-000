var playlist = { TheDearHunter : "The Lake South"};

function updatePlaylist(object, artist, song) {
  object[artist] = song
  return object
}

function removeFromPlaylist(object, artist) {
  delete object.artist
  return object
}

console.log(playlist)
removeFromPlaylist(playlist, "TheDearHunter")
delete playlist.TheDearHunter
console.log(playlist)