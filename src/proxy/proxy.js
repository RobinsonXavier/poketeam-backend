export async function getDataInPokeApi(req, res) {
  const {pokename} = req.body;

  try {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);

    if(!promise) {
      return res.status(404).send("Pokemon não encontrado.");
    }

    return res.status(201).send({
      data: await promise.json(),
    });

  } catch (error) {
    console.error(error);
    return res.status(500);
  }
}