export default function handler(req, res) {
  const { tutor, cao } = req.query;

  if (!tutor || !cao) {
    return res.status(400).send('Parâmetros ausentes.');
  }

  const mensagem = `Cheguei! Sou ${tutor}, tutor(a) do(a) ${cao}.`;
  const numeroWhatsApp = '5531997049481'; // Substitua pelo número real

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  res.writeHead(302, { Location: url });
  res.end();
}
