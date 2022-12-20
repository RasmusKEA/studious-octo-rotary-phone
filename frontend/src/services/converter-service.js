import axios from "axios";
const API_URL = "https://blockchain.info/ticker";

class ConverterService {
  async getBtcRate() {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  }
}

export default new ConverterService();
