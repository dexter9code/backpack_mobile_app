export const changeUri = (url) => {
  const updatedUri = url.replace(/localhost:8080/gi, `192.168.1.38:8080`);
  return updatedUri;
};
