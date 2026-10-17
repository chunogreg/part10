import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }
  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}: token`);
    return accessToken ? accessToken : [];
  }

  async setAccessToken(token) {
    // const currentTokens = this.getAccessToken();
    // const newToken = [...currentTokens, tokenId];
    await AsyncStorage.setItem(`${this.namespace}: token`, token);
  }
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}: token`);
  }
}
export default AuthStorage;
