import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "3:33" },
    { title: "All Star", duration: "4:08" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
