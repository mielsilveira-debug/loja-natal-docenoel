// Catálogo da Doce Noel Confeitaria: 50 produtos (10 por categoria)
const produtos = [
  // Panetones e chocotones
  { id: 1, nome: "Panetone Trufado", categoria: "panetones", preco: 89.9, imagem: "img/produtos/panetones.jpg", descricao: "Massa de fermentação natural recheada com trufa de chocolate belga.", destaque: true },
  { id: 2, nome: "Panetone Clássico de Frutas", categoria: "panetones", preco: 59.9, imagem: "img/produtos/panetones.jpg", descricao: "A receita da vovó, com frutas cristalizadas e uvas-passas.", destaque: false },
  { id: 3, nome: "Chocotone Gotas Duplas", categoria: "panetones", preco: 64.9, imagem: "img/produtos/panetones.jpg", descricao: "Gotas de chocolate ao leite e meio amargo em cada pedaço.", destaque: true },
  { id: 4, nome: "Panetone de Doce de Leite", categoria: "panetones", preco: 79.9, imagem: "img/produtos/panetones.jpg", descricao: "Recheio cremoso de doce de leite mineiro artesanal.", destaque: false },
  { id: 5, nome: "Panetone Pistache", categoria: "panetones", preco: 119.9, imagem: "img/produtos/panetones.jpg", descricao: "Creme de pistache siciliano e cobertura crocante.", destaque: false },
  { id: 6, nome: "Mini Chocotone", categoria: "panetones", preco: 19.9, imagem: "img/produtos/panetones.jpg", descricao: "Versão de 100 g, perfeita para lembrancinhas.", destaque: false },
  { id: 7, nome: "Panetone Limão Siciliano", categoria: "panetones", preco: 74.9, imagem: "img/produtos/panetones.jpg", descricao: "Raspas de limão e recheio de lemon curd.", destaque: false },
  { id: 8, nome: "Panetone Frutas Vermelhas", categoria: "panetones", preco: 84.9, imagem: "img/produtos/panetones.jpg", descricao: "Geleia de morango, framboesa e amora.", destaque: false },
  { id: 9, nome: "Panetone Zero Açúcar", categoria: "panetones", preco: 69.9, imagem: "img/produtos/panetones.jpg", descricao: "Adoçado com xilitol, sem abrir mão do sabor.", destaque: false },
  { id: 10, nome: "Chocotone Branco", categoria: "panetones", preco: 66.9, imagem: "img/produtos/panetones.jpg", descricao: "Gotas e cobertura de chocolate branco.", destaque: false },

  // Biscoitos
  { id: 11, nome: "Biscoito de Gengibre Boneco", categoria: "biscoitos", preco: 6.9, imagem: "img/produtos/biscoitos.jpg", descricao: "O famoso gingerbread man decorado à mão.", destaque: true },
  { id: 12, nome: "Lata de Biscoitos Amanteigados", categoria: "biscoitos", preco: 49.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Lata decorada com 400 g de biscoitos de manteiga.", destaque: false },
  { id: 13, nome: "Estrelas de Canela", categoria: "biscoitos", preco: 24.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Pacote com 12 estrelas perfumadas de canela.", destaque: false },
  { id: 14, nome: "Floco de Neve Glaceado", categoria: "biscoitos", preco: 7.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Biscoito em formato de floco com glacê real.", destaque: false },
  { id: 15, nome: "Árvore de Natal de Biscoito", categoria: "biscoitos", preco: 39.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Torre de biscoitos empilhados em formato de pinheiro.", destaque: false },
  { id: 16, nome: "Casinha de Gengibre", categoria: "biscoitos", preco: 129.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Casa montada e decorada, pronta para enfeitar a mesa.", destaque: true },
  { id: 17, nome: "Biscoito Boneco de Neve", categoria: "biscoitos", preco: 7.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Com cachecol e cartola de glacê colorido.", destaque: false },
  { id: 18, nome: "Kit Decore em Casa", categoria: "biscoitos", preco: 59.9, imagem: "img/produtos/biscoitos.jpg", descricao: "12 biscoitos lisos, glacês e confeitos para a família decorar.", destaque: false },
  { id: 19, nome: "Speculoos Natalino", categoria: "biscoitos", preco: 22.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Biscoito belga caramelizado com especiarias.", destaque: false },
  { id: 20, nome: "Bengalinhas de Açúcar", categoria: "biscoitos", preco: 14.9, imagem: "img/produtos/biscoitos.jpg", descricao: "Pacote com 10 bengalas listradas de menta.", destaque: false },

  // Bolos e tortas
  { id: 21, nome: "Bolo Neve de Frutas Vermelhas", categoria: "bolos", preco: 149.9, imagem: "img/produtos/bolos.jpg", descricao: "Massa de baunilha, creme e cobertura de cranberries.", destaque: true },
  { id: 22, nome: "Tronco de Natal (Bûche)", categoria: "bolos", preco: 119.9, imagem: "img/produtos/bolos.jpg", descricao: "Rocambole de chocolate em formato de tronco.", destaque: false },
  { id: 23, nome: "Torta de Nozes", categoria: "bolos", preco: 99.9, imagem: "img/produtos/bolos.jpg", descricao: "Massa amanteigada com recheio caramelizado de nozes.", destaque: false },
  { id: 24, nome: "Bolo Inglês de Frutas", categoria: "bolos", preco: 69.9, imagem: "img/produtos/bolos.jpg", descricao: "Tradicional fruitcake curado com especiarias.", destaque: false },
  { id: 25, nome: "Cheesecake de Cereja", categoria: "bolos", preco: 109.9, imagem: "img/produtos/bolos.jpg", descricao: "Cremoso, com calda de cerejas frescas.", destaque: false },
  { id: 26, nome: "Pavê Natalino", categoria: "bolos", preco: 79.9, imagem: "img/produtos/bolos.jpg", descricao: "Camadas de biscoito, creme e chocolate. É pavê ou pa comê?", destaque: false },
  { id: 27, nome: "Torta Holandesa", categoria: "bolos", preco: 94.9, imagem: "img/produtos/bolos.jpg", descricao: "Creme leve, base de biscoito e ganache.", destaque: false },
  { id: 28, nome: "Bolo de Especiarias", categoria: "bolos", preco: 64.9, imagem: "img/produtos/bolos.jpg", descricao: "Canela, cravo, noz-moscada e gengibre.", destaque: false },
  { id: 29, nome: "Red Velvet Natalino", categoria: "bolos", preco: 139.9, imagem: "img/produtos/bolos.jpg", descricao: "Massa aveludada com cream cheese e flocos de neve de açúcar.", destaque: false },
  { id: 30, nome: "Mini Bolos Enfeitados (6 un.)", categoria: "bolos", preco: 54.9, imagem: "img/produtos/bolos.jpg", descricao: "Seis bolinhos decorados com temas natalinos.", destaque: false },

  // Cestas e kits
  { id: 31, nome: "Cesta Noite Feliz", categoria: "cestas", preco: 249.9, imagem: "img/produtos/cestas.jpg", descricao: "Panetone, biscoitos, geleia, chocolates e suco de uva.", destaque: true },
  { id: 32, nome: "Cesta Família Reunida", categoria: "cestas", preco: 389.9, imagem: "img/produtos/cestas.jpg", descricao: "Cesta grande com 15 itens para a ceia toda.", destaque: false },
  { id: 33, nome: "Kit Café com Natal", categoria: "cestas", preco: 129.9, imagem: "img/produtos/cestas.jpg", descricao: "Café especial, caneca e biscoitos de canela.", destaque: false },
  { id: 34, nome: "Kit Amigo Secreto", categoria: "cestas", preco: 49.9, imagem: "img/produtos/cestas.jpg", descricao: "Mini chocotone, 4 bombons e cartão personalizado.", destaque: false },
  { id: 35, nome: "Caixa Empresarial", categoria: "cestas", preco: 179.9, imagem: "img/produtos/cestas.jpg", descricao: "Ideal para presentear clientes e colaboradores.", destaque: false },
  { id: 36, nome: "Cesta Chocólatra", categoria: "cestas", preco: 219.9, imagem: "img/produtos/cestas.jpg", descricao: "Tudo de chocolate: chocotone, trufas, barras e cacau.", destaque: false },
  { id: 37, nome: "Kit Ceia Doce", categoria: "cestas", preco: 159.9, imagem: "img/produtos/cestas.jpg", descricao: "Torta de nozes, pavê e biscoitos amanteigados.", destaque: false },
  { id: 38, nome: "Cesta Saudável", categoria: "cestas", preco: 189.9, imagem: "img/produtos/cestas.jpg", descricao: "Panetone zero açúcar, castanhas e chás.", destaque: false },
  { id: 39, nome: "Meia de Natal Recheada", categoria: "cestas", preco: 69.9, imagem: "img/produtos/cestas.jpg", descricao: "Meia de feltro cheia de doces para pendurar.", destaque: false },
  { id: 40, nome: "Baú do Papai Noel", categoria: "cestas", preco: 299.9, imagem: "img/produtos/cestas.jpg", descricao: "Baú de madeira com seleção premium da casa.", destaque: false },

  // Bebidas e chocolates
  { id: 41, nome: "Chocolate Quente Cremoso", categoria: "bebidas", preco: 34.9, imagem: "img/produtos/bebidas.jpg", descricao: "Mistura em pó 300 g, com toque de canela.", destaque: true },
  { id: 42, nome: "Caixa de Trufas (12 un.)", categoria: "bebidas", preco: 59.9, imagem: "img/produtos/bebidas.jpg", descricao: "Sabores: avelã, maracujá, café e frutas vermelhas.", destaque: false },
  { id: 43, nome: "Bombom Bola de Natal", categoria: "bebidas", preco: 8.9, imagem: "img/produtos/bebidas.jpg", descricao: "Bombom recheado em formato de enfeite.", destaque: false },
  { id: 44, nome: "Suco de Uva Integral", categoria: "bebidas", preco: 24.9, imagem: "img/produtos/bebidas.jpg", descricao: "Garrafa de 1 L, sem adição de açúcar.", destaque: false },
  { id: 45, nome: "Chá de Especiarias", categoria: "bebidas", preco: 29.9, imagem: "img/produtos/bebidas.jpg", descricao: "Blend de maçã, canela, cravo e laranja.", destaque: false },
  { id: 46, nome: "Barra Papai Noel 70%", categoria: "bebidas", preco: 19.9, imagem: "img/produtos/bebidas.jpg", descricao: "Chocolate meio amargo com embalagem temática.", destaque: false },
  { id: 47, nome: "Pirulito de Chocolate Rena", categoria: "bebidas", preco: 9.9, imagem: "img/produtos/bebidas.jpg", descricao: "Pirulito decorado com chifres de rena.", destaque: false },
  { id: 48, nome: "Caneca + Chocolate Quente", categoria: "bebidas", preco: 54.9, imagem: "img/produtos/bebidas.jpg", descricao: "Caneca de cerâmica natalina com mistura de cacau.", destaque: false },
  { id: 49, nome: "Castanhas Caramelizadas", categoria: "bebidas", preco: 27.9, imagem: "img/produtos/bebidas.jpg", descricao: "Pote 200 g de castanhas com caramelo e flor de sal.", destaque: false },
  { id: 50, nome: "Fondue de Chocolate", categoria: "bebidas", preco: 89.9, imagem: "img/produtos/bebidas.jpg", descricao: "Kit com panela, chocolate e frutas desidratadas.", destaque: false }
];

const categorias = {
  panetones: "Panetones e chocotones",
  biscoitos: "Biscoitos",
  bolos: "Bolos e tortas",
  cestas: "Cestas e kits",
  bebidas: "Bebidas e chocolates"
};
