function capitalize(string) {
  if (string) {
    const str = string.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
  }
  throw new Error('An error occurred.');
}

module.exports = { capitalize };