export async function GET() {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es-ES&page=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las películas populares");
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
