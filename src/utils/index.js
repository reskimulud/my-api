const imageUrlGenerator = (endpoint, filename) => {
  const host = process.env.HOST;
  const port = process.env.PORT;
  if (port == 443) {
    return `https://${host}/${endpoint}/image/${filename}`;
  } else {
    return `http://${host}:${port}/${endpoint}/image/${filename}`;
  }
};

module.exports = { imageUrlGenerator };
