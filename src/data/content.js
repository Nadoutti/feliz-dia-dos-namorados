// ============================================================
//  ✏️  EDITE AQUI — todas as palavras da página em um só lugar.
//      Use <em>…</em> para destacar trechos em cor de destaque.
// ============================================================

export const hero = {
  kicker: "12 de junho",
  title: "Feliz Dia<br>dos <em>Namorados</em>",
  subtitle: "Mesmo longe, queria fazer nosso primeiro dia dos namorados especial.",
};

// Cada item = uma tela que aparece conforme ela rola.
// align: "left" | "right" (no mobile fica sempre centralizado)
//
// 📷 Para por foto: salve o arquivo em  public/photos/  e descomente a
//    linha photo/caption abaixo. Ex: photo: "/photos/primeiro-encontro.jpg"
//    Sem foto = só o texto, centralizado.
export const verses = [
  {
    num: "i.",
    title: "No dia em que <em>te conheci</em>",
    body: "Fiquei congelado por você, conversamos por muitas horas, parecia que o assunto não acabava nunca (nunca acabou na verdade kkkkkkk).",
    align: "left",
    photo: "/photos/p3.jpeg",
    caption: "Uma das fotos mais antigas que tenho",
  },
  {
    num: "ii.",
    title: "Senti uma <em>conexão</em> com você",
    body: "Que nunca senti com mais ninguém, naquele dia já sabia que estava completamente apaixonado",
    align: "right",
    photo: "/photos/p4.jpeg",
    caption: "Logo antes do seu intercâmbio",
  },
  {
    num: "iii.",
    title: "Desde então, soube que te queria <em>na minha vida</em>",
    body: "Você se tornou tão especial pra mim e eu sempre soube que queria construir algo muito bonito ao seu lado.",
    align: "left",
    photo: "/photos/p2.jpeg",
    caption: "Gosto muito dessa foto",
  },
  {
    num: "iv.",
    title: "Hoje, você é meu <em>lugar favorito</em>",
    body: "Onde eu mais quero estar, ao seu lado, te amando e crescendo com você, te amando, respeitando e podendo ser seu e você podendo ser minha.",
    align: "right",
    ornament: true,
    photo: "/photos/p1.jpeg",
    caption: "A gente hoje",
  },
];

export const declaration = {
  title: "E eu queria te dizer<br>uma <em>coisa</em>",
  body: "Eu te amo, sempre te amei, e no fim, sempre fui seu minha gatinha, sou extremamente grato por poder te fazer feliz e quero construir uma vida incrivel com voce.",
};

export const signoff = {
  small: "com amor,",
  name: "seu Pedro",
  date: "12 · 06 · 2026",
};
