// Методы объекта

const playlist = {
  name: "Мой плейлист",
  raiting: 5,
  track: ["track-1", "track-2", "track-3"],

  changeName(newName) {
    console.log("this внутри changeName", this);
    this.name = newName;
  },
  addTrack(track) {
    this.track.push(track);
  },
  updateRating(newRating) {
    this.raiting = newRating;
  },
  getTrackCount() {
    return this.track.length;
  },
};

playlist.changeName("Новое имя");

console.log(playlist.getTrackCount());

playlist.addTrack("Новий трек");
console.log(playlist.getTrackCount());

playlist.addTrack("Новий трек-2");
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);
