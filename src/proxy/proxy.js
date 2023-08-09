import fetch from 'node-fetch';

export async function getDataInPokeApi(req, res) {
  const { pokename } = req.body;

  try {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);

    if(!promise) {
      return res.status(404).send("Pokemon não encontrado.");
    }

    const pokedata = await promise.json();

    return res.status(201).send({
      pokedata,
    });

  } catch (error) {
    console.error(error);
    return res.status(500);
  }
}