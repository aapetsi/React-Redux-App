import axios from "axios";

const FETCH_CHARACTERS = "FETCH_CHARACTERS";

const fetchCharacters = () => ({
  type: FETCH_CHARACTERS
});
