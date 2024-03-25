class Json {
  static stringify = (data) => {
    return JSON.stringify(data, null, 2);
  }
}

module.exports = Json;