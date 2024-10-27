export async function onRequest(context) {
  const { request, env } = context;

  // Memanggil Worker menggunakan binding
  const response = await env.worker.fetch(request);

  // Mengembalikan respons dari Worker ke pengguna
  return response;
}
