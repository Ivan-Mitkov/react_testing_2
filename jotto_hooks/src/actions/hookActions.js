import axios from "axios";
export const getSecretWord = async (setSecretWord) => {
  try {
    const response = await axios.request("https:/somerandom/server");
    setSecretWord(response.data);
  } catch (error) {
    setSecretWord("party");
  }
};

//default export for mocking
export default {
  getSecretWord,
};
