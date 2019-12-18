function run(){
    const musicApp = Application('Music');
    const music    = musicApp.playlists[1];
    const tracks   = music.tracks.properties();
    return JSON.stringify(tracks);
}