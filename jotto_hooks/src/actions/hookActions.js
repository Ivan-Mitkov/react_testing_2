import axios from "axios";
export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get("https:/somerandom/server");
  setSecretWord(response.data);
};

//default export for mocking
export default {
  getSecretWord,
};
