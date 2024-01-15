export const fetchHero = async (name) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/${
        import.meta.env.VITE_SECRET_KEY
      }/search/${name}`,
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
