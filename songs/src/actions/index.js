//action creater
export const selectSong = (song)=>{
  //action 
  return {
    type: "SONG_SELECTED",
    payload: song
  }
}


