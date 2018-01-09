var playlist = { TheDearHunter : "The Lake South"};

function updatePlaylist(object, artist, song) {
  object[artist] = song
  return object
}

function removeFromPlaylist(thing, artist) {
  delete thing[artist]
  return thing
}