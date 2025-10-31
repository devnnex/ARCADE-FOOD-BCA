// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573143023372'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 5000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
{ //MENÚ INFANTIL
  id: 'inf1',
  category: 'Menú Infantil',
  title: 'Salchimini',
  price: 18000,
  desc: 'Pulpitos de salchicha americana, papas a la francesa, queso rayado, galleta Oreo y jugo.',
  image: 'images/salchimini.png',
  ingredients: ['Salchicha americana', 'Papas a la francesa', 'Queso rayado', 'Galleta Oreo', 'Jugo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //MENÚ INFANTIL
  id: 'inf2',
  category: 'Menú Infantil',
  title: 'Sándwich Kaiosama',
  price: 21000,
  desc: 'Pan artesanal, carne desmechada, queso mozzarella, lechuga, tomate, papas a la francesa y jugo.',
  image: 'images/sandwich-kaiosama.png',
  ingredients: ['Pan artesanal', 'Carne desmechada', 'Queso mozzarella', 'Lechuga', 'Tomate', 'Papas a la francesa', 'Jugo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //MENÚ INFANTIL
  id: 'inf3',
  category: 'Menú Infantil',
  title: 'Sándwich Krilin',
  price: 21000,
  desc: 'Pan artesanal, pollo desmechado, queso mozzarella, lechuga, tomate, papas a la francesa y jugo.',
  image: 'images/sandwich-krilin.png',
  ingredients: ['Pan artesanal', 'Pollo desmechado', 'Queso mozzarella', 'Lechuga', 'Tomate', 'Papas a la francesa', 'Jugo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //SHAKE BURGER COMBOS
  id: 'shake1',
  category: 'Shake Burger Combos',
  title: 'Combo Shake Burger 01',
  price: 39900,
  desc: '2 Hamburguesas sencillas, 2 frappé de Oreo, papas a la francesa en salsa cheddar y una galleta de Oreo.',
  image: 'images/combo-shake-burger-01.png',
  ingredients: ['Hamburguesas sencillas', 'Frappé de Oreo', 'Papas a la francesa', 'Salsa cheddar', 'Galleta de Oreo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //SHAKE BURGER COMBOS
  id: 'shake2',
  category: 'Shake Burger Combos',
  title: 'Combo Shake Burger 02',
  price: 49900,
  desc: '2 Hamburguesas doble carne, 2 frappé de Oreo, papas a la francesa en salsa cheddar y una galleta de Oreo.',
  image: 'images/combo-shake-burger-02.png',
  ingredients: ['Hamburguesas doble carne', 'Frappé de Oreo', 'Papas a la francesa', 'Salsa cheddar', 'Galleta de Oreo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //SHAKE BURGER COMBOS
  id: 'shake3',
  category: 'Shake Burger Combos',
  title: 'Combo Shake Burger 03',
  price: 59900,
  desc: '2 Hamburguesas triple carne, 2 frappé de Oreo, papas a la francesa en salsa cheddar y una galleta de Oreo.',
  image: 'images/combo-shake-burger-03.png',
  ingredients: ['Hamburguesas triple carne', 'Frappé de Oreo', 'Papas a la francesa', 'Salsa cheddar', 'Galleta de Oreo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //SHAKE BURGER PERSONAL
  id: 'shakep1',
  category: 'Shake Burger Personal',
  title: 'Shake Burger Sencillo',
  price: 30000,
  desc: 'Hamburguesa sencilla con papas a la francesa, frappé de Oreo y galleta de Oreo.',
  image: 'images/shake-burger-sencillo.png',
  ingredients: ['Hamburguesa sencilla', 'Papas a la francesa', 'Frappé de Oreo', 'Galleta de Oreo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //SHAKE BURGER PERSONAL
  id: 'shakep2',
  category: 'Shake Burger Personal',
  title: 'Shake Burger Doble Carne',
  price: 35000,
  desc: 'Hamburguesa doble carne con papas a la francesa, frappé de Oreo y galleta de Oreo.',
  image: 'images/shake-burger-doble.png',
  ingredients: ['Hamburguesa doble carne', 'Papas a la francesa', 'Frappé de Oreo', 'Galleta de Oreo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //SHAKE BURGER PERSONAL
  id: 'shakep3',
  category: 'Shake Burger Personal',
  title: 'Shake Burger Triple Carne',
  price: 40000,
  desc: 'Hamburguesa triple carne con papas a la francesa, frappé de Oreo y galleta de Oreo.',
  image: 'images/shake-burger-triple.png',
  ingredients: ['Hamburguesa triple carne', 'Papas a la francesa', 'Frappé de Oreo', 'Galleta de Oreo'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //BOX BURGER
  id: 'box1',
  category: 'Box Burger',
  title: 'Box Burger x3',
  price: 55000,
  desc: '3 Hamburguesas doble carne, doble queso, salsa cheddar y papas a la francesa.',
  image: 'images/box-burger-x3.png',
  ingredients: ['Doble carne', 'Doble queso', 'Salsa cheddar', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //PERROS
  id: 'per1',
  category: 'Perros',
  title: 'Chun Li',
  price: 18000,
  desc: 'Salchicha americana, cebolla al gusto, ripio, salsas, queso rallado o mozzarella y papas a la francesa.',
  image: 'images/perro-chunli.png',
  ingredients: ['Salchicha americana', 'Cebolla al gusto', 'Ripio', 'Salsas', 'Queso rallado o mozzarella', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //PERROS
  id: 'per2',
  category: 'Perros',
  title: 'Sakura',
  price: 21000,
  desc: 'Salchicha americana, carne desmechada, queso mozzarella, ripio, salsas, cebolla grille y papas a la francesa.',
  image: 'images/perro-sakura.png',
  ingredients: ['Salchicha americana', 'Carne desmechada', 'Queso mozzarella', 'Ripio', 'Salsas', 'Cebolla grille', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //PERROS
  id: 'per3',
  category: 'Perros',
  title: 'Perro Gomelo',
  price: 22000,
  desc: 'Salchicha americana, pollo desmechado, cebolla grille, ripio, salsas, queso mozzarella y papas a la francesa.',
  image: 'images/perro-gomelo.png',
  ingredients: ['Salchicha americana', 'Pollo desmechado', 'Cebolla grille', 'Ripio', 'Salsas', 'Queso mozzarella', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //PERROS
  id: 'per4',
  category: 'Perros',
  title: 'Super Contra',
  price: 25000,
  desc: 'Salchicha americana, carne y pollo desmechados, tocineta, cebolla grille, queso mozzarella, queso cheddar, ripio, salsas y papas a la francesa.',
  image: 'images/perro-supercontra.png',
  ingredients: ['Salchicha americana', 'Carne desmechada', 'Pollo desmechado', 'Tocineta', 'Cebolla grille', 'Queso mozzarella', 'Queso cheddar', 'Ripio', 'Salsas', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ //PERROS
  id: 'per5',
  category: 'Perros',
  title: 'Don Perro',
  price: 27000,
  desc: 'Salchicha americana, carne y pollo desmechados, chorizo acaramelado, tocineta, cebolla grille, queso mozzarella, ripio, maíz, salsas y papas a la francesa.',
  image: 'images/don-perro.png',
  ingredients: ['Salchicha americana', 'Carne desmechada', 'Pollo desmechado', 'Chorizo acaramelado', 'Tocineta', 'Cebolla grille', 'Queso mozzarella', 'Ripio', 'Maíz', 'Salsas', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{ // HAMBURGUESAS
  id: 'ham1',
  category: 'Hamburguesas',
  title: 'Hamburguesa Jerry',
  price: 18000,
  desc: '150gr de carne, queso mozzarella, tomate, lechuga, cebolla grillé y papas a la francesa.',
  image: 'images/hamburguesa-jerry.png',
  ingredients: ['Carne 150gr', 'Queso mozzarella', 'Tomate', 'Lechuga', 'Cebolla grillé', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham2',
  category: 'Hamburguesas',
  title: 'Hamburguesa Bulma',
  price: 22000,
  desc: '150gr de carne, tocineta, chorizo acaramelado, tomate, lechuga, cebolla grillé y papas a la francesa.',
  image: 'images/hamburguesa-bulma.png',
  ingredients: ['Carne 150gr', 'Tocineta', 'Chorizo acaramelado', 'Tomate', 'Lechuga', 'Cebolla grillé', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham3',
  category: 'Hamburguesas',
  title: 'Hamburguesa Pacman',
  price: 24000,
  desc: '150gr de carne, pollo desmechado, queso mozzarella, tomate, lechuga, cebolla grillé y papas a la francesa.',
  image: 'images/hamburguesa-pacman.png',
  ingredients: ['Carne 150gr', 'Pollo desmechado', 'Queso mozzarella', 'Tomate', 'Lechuga', 'Cebolla grillé', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham4',
  category: 'Hamburguesas',
  title: 'Hamburguesa Metal Slug',
  price: 25000,
  desc: '150gr de carne, pollo desmechado, chorizo, queso mozzarella, huevo frito, maíz, lechuga, tomate, cebolla grillé y papas a la francesa.',
  image: 'images/hamburguesa-metal-slug.png',
  ingredients: ['Carne 150gr', 'Pollo desmechado', 'Chorizo', 'Queso mozzarella', 'Huevo frito', 'Maíz', 'Lechuga', 'Tomate', 'Cebolla grillé', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham5',
  category: 'Hamburguesas',
  title: 'Hamburguesa La Cheddar',
  price: 29000,
  desc: 'Doble de carne, queso mozzarella, tocineta, cebolla grillé y papas a la francesa.',
  image: 'images/hamburguesa-cheddar.png',
  ingredients: ['Doble carne', 'Queso mozzarella', 'Tocineta', 'Cebolla grillé', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham6',
  category: 'Hamburguesas',
  title: 'Hamburguesa Costeña',
  price: 30000,
  desc: '150gr de carne, carne desmechada, plátano maduro, queso costeño asado, queso mozzarella, cebolla grillé, lechuga, tomate y papas a la francesa.',
  image: 'images/hamburguesa-costena.png',
  ingredients: ['Carne 150gr', 'Carne desmechada', 'Plátano maduro', 'Queso costeño asado', 'Queso mozzarella', 'Cebolla grillé', 'Lechuga', 'Tomate', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham7',
  category: 'Hamburguesas',
  title: 'Hamburguesa Super Mario',
  price: 30000,
  desc: 'Doble carne de 150gr, queso mozzarella, tocineta, chorizo acaramelado, lechuga, tomate, cebolla grillé y papas a la francesa.',
  image: 'images/hamburguesa-super-mario.png',
  ingredients: ['Doble carne 150gr', 'Queso mozzarella', 'Tocineta', 'Chorizo acaramelado', 'Lechuga', 'Tomate', 'Cebolla grillé', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham8',
  category: 'Hamburguesas',
  title: 'Hamburguesa Iori Loco',
  price: 31000,
  desc: '150gr de carne, pollo y carne desmechada, tocineta, queso mozzarella, queso cheddar y papas a la francesa.',
  image: 'images/hamburguesa-iori-loco.png',
  ingredients: ['Carne 150gr', 'Pollo desmechado', 'Carne desmechada', 'Tocineta', 'Queso mozzarella', 'Queso cheddar', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham9',
  category: 'Hamburguesas',
  title: 'Hamburguesa Mortal Kombat',
  price: 37000,
  desc: '150gr de carne, carne y pollo desmechado, tocineta, queso mozzarella y cheddar, chorizo acaramelado, lechuga, tomate, cebolla grillé, maíz y papas a la francesa.',
  image: 'images/hamburguesa-mortal-kombat.png',
  ingredients: ['Carne 150gr', 'Carne desmechada', 'Pollo desmechado', 'Tocineta', 'Queso mozzarella', 'Queso cheddar', 'Chorizo acaramelado', 'Lechuga', 'Tomate', 'Cebolla grillé', 'Maíz', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'ham10',
  category: 'Hamburguesas',
  title: 'Moscow Salvaje',
  price: 30000,
  desc: 'Doble carne de 150gr, doble queso, carne desmechada, queso costeño, tocineta acaramelada, salsa cheddar, salsa tártara y papas a la francesa.',
  image: 'images/hamburguesa-moscow-salvaje.png',
  ingredients: ['Doble carne 150gr', 'Doble queso', 'Carne desmechada', 'Queso costeño', 'Tocineta acaramelada', 'Salsa cheddar', 'Salsa tártara', 'Papas a la francesa'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal1',
  category: 'Salchipapas',
  title: 'Chori Papa',
  price: 24000,
  desc: 'Chorizo acaramelado, papas a la francesa, cebolla grillé, lechuga y queso fundido.',
  image: 'images/salchipapa-choripapa.png',
  ingredients: ['Chorizo acaramelado', 'Papas a la francesa', 'Cebolla grillé', 'Lechuga', 'Queso fundido'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal2',
  category: 'Salchipapas',
  title: 'Salchipapa',
  price: 24000,
  desc: 'Salchicha americana, cebolla grillé, papas a la francesa, lechuga y queso mozzarella.',
  image: 'images/salchipapa-tradicional.png',
  ingredients: ['Salchicha americana', 'Cebolla grillé', 'Papas a la francesa', 'Lechuga', 'Queso mozzarella'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal3',
  category: 'Salchipapas',
  title: 'Salchipollo',
  price: 30000,
  desc: 'Salchicha americana, pollo desmechado, papas a la francesa, maíz, cebolla grillé, lechuga y queso mozzarella.',
  image: 'images/salchipapa-salchipollo.png',
  ingredients: ['Salchicha americana', 'Pollo desmechado', 'Papas a la francesa', 'Maíz', 'Cebolla grillé', 'Lechuga', 'Queso mozzarella'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal4',
  category: 'Salchipapas',
  title: 'Salchichoripollo',
  price: 34000,
  desc: 'Salchicha, chorizo acaramelado, pollo desmechado, papas a la francesa, maíz, cebolla grillé, queso mozzarella y lechuga.',
  image: 'images/salchipapa-salchichoripollo.png',
  ingredients: ['Salchicha americana', 'Chorizo acaramelado', 'Pollo desmechado', 'Papas a la francesa', 'Maíz', 'Cebolla grillé', 'Queso mozzarella', 'Lechuga'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal5',
  category: 'Salchipapas',
  title: 'Salchicarne',
  price: 30000,
  desc: 'Salchicha americana, carne desmechada, maíz, papas a la francesa, cebolla grillé, lechuga y queso mozzarella.',
  image: 'images/salchipapa-salchicarne.png',
  ingredients: ['Salchicha americana', 'Carne desmechada', 'Maíz', 'Papas a la francesa', 'Cebolla grillé', 'Lechuga', 'Queso mozzarella'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal6',
  category: 'Salchipapas',
  title: 'Salchichoricarne',
  price: 34000,
  desc: 'Salchicha americana, chorizo acaramelado, carne desmechada, papas a la francesa, cebolla grillé, lechuga y queso mozzarella.',
  image: 'images/salchipapa-salchichoricarne.png',
  ingredients: ['Salchicha americana', 'Chorizo acaramelado', 'Carne desmechada', 'Papas a la francesa', 'Cebolla grillé', 'Lechuga', 'Queso mozzarella'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'sal7',
  category: 'Salchipapas',
  title: 'Salchichorimixto',
  price: 40000,
  desc: 'Salchicha americana, chorizo acaramelado, carne y pollo desmechados, papas a la francesa, cebolla grillé, lechuga, maíz y queso mozzarella.',
  image: 'images/salchipapa-salchichorimixto.png',
  ingredients: ['Salchicha americana', 'Chorizo acaramelado', 'Carne desmechada', 'Pollo desmechado', 'Papas a la francesa', 'Cebolla grillé', 'Lechuga', 'Maíz', 'Queso mozzarella'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'pica1',
  category: 'Picadas',
  title: 'Picada x2',
  price: 52000,
  desc: 'Papas a la francesa, carne y pollo en trozos, chorizo, salchicha, cebolla grillé, queso mozzarella, croquetas de yuca y lechuga.',
  image: 'images/picada-x2.png',
  ingredients: ['Papas a la francesa', 'Carne en trozos', 'Pollo en trozos', 'Chorizo', 'Salchicha', 'Cebolla grillé','Queso mozzarella',  'Croquetas de Yuca', 'Lechuga'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'pica1',
  category: 'Picadas',
  title: 'Picada x3',
  price: 75000,
  desc: 'Papas a la francesa, carne y pollo en trozos, chorizo, salchicha, cebolla grillé, queso mozzarella, croquetas de yuca y lechuga.',
  image: 'images/picada-x3.png',
  ingredients: ['Papas a la francesa', 'Carne en trozos', 'Pollo en trozos', 'Chorizo', 'Salchicha', 'Cebolla grillé','Queso mozzarella',  'Croquetas de Yuca', 'Lechuga'],
  extras: [
    { name: 'Papa', price: 7000 },
    { name: 'Maíz', price: 5000 },
    { name: 'Pollo desmechado', price: 6000 },
    { name: 'Carne desmechada', price: 6000 },
    { name: 'Queso', price: 5000 },
    { name: 'Chorizo o tocineta', price: 5000 },
    { name: 'Vegetal', price: 3000 }
  ]
},
{
  id: 'granizado-lulo',
  category: 'Granizados',
  title: 'Granizado de Lulo',
  price: 10000,
  desc: 'Refrescante granizado de lulo natural.',
  image: 'images/granizado-lulo.png',
  ingredients: ['Lulo', 'Hielo', 'Azúcar', 'Agua'],
  extras: []
},
{
  id: 'granizado-maracuya',
  category: 'Granizados',
  title: 'Granizado de Maracuyá',
  price: 10000,
  desc: 'Granizado tropical de maracuyá natural.',
  image: 'images/granizado-maracuya.png',
  ingredients: ['Maracuyá', 'Hielo', 'Azúcar', 'Agua'],
  extras: []
},
{
  id: 'granizado-mora',
  category: 'Granizados',
  title: 'Granizado de Mora',
  price: 10000,
  desc: 'Delicioso granizado de mora natural.',
  image: 'images/granizado-mora.png',
  ingredients: ['Mora', 'Hielo', 'Azúcar', 'Agua'],
  extras: []
},
{
  id: 'granizado-limonada',
  category: 'Granizados',
  title: 'Granizado de Limonada Tradicional',
  price: 10000,
  desc: 'Granizado de limonada clásica, ideal para el calor.',
  image: 'images/granizado-limonada.png',
  ingredients: ['Limón', 'Hielo', 'Azúcar', 'Agua'],
  extras: []
},
{
  id: 'granizado-limonada-cerezada',
  category: 'Granizados',
  title: 'Granizado de Limonada Cerezada',
  price: 10000,
  desc: 'Granizado de limonada con un toque de cereza.',
  image: 'images/granizado-limonada-cerezada.png',
  ingredients: ['Limón', 'Cereza', 'Hielo', 'Azúcar', 'Agua'],
  extras: []
},
{
  id: 'jugo-lulo',
  category: 'Jugos Naturales en Agua',
  title: 'Jugo Natural de Lulo',
  price: 8000,
  desc: 'Jugo de lulo natural preparado con agua. Adicional en leche $2.000.',
  image: 'images/jugo-lulo.png',
  ingredients: ['Lulo', 'Agua', 'Azúcar'],
  extras: [
    { name: 'Leche adicional', price: 2000 }
  ]
},
{
  id: 'jugo-maracuya',
  category: 'Jugos Naturales en Agua',
  title: 'Jugo Natural de Maracuyá',
  price: 8000,
  desc: 'Jugo de maracuyá natural preparado con agua. Adicional en leche $2.000.',
  image: 'images/jugo-maracuya.png',
  ingredients: ['Maracuyá', 'Agua', 'Azúcar'],
  extras: [
    { name: 'Leche adicional', price: 2000 }
  ]
},
{
  id: 'jugo-mora',
  category: 'Jugos Naturales en Agua',
  title: 'Jugo Natural de Mora',
  price: 8000,
  desc: 'Jugo de mora natural preparado con agua. Adicional en leche $2.000.',
  image: 'images/jugo-mora.png',
  ingredients: ['Mora', 'Agua', 'Azúcar'],
  extras: [
    { name: 'Leche adicional', price: 2000 }
  ]
},
{
  id: 'jugo-limonada',
  category: 'Jugos Naturales en Agua',
  title: 'Limonada Tradicional',
  price: 8000,
  desc: 'Limonada tradicional preparada con agua. Adicional en leche $2.000.',
  image: 'images/jugo-limonada.png',
  ingredients: ['Limón', 'Agua', 'Azúcar'],
  extras: [
    { name: 'Leche adicional', price: 2000 }
  ]
},
{
  id: 'jugo-limonada-cerezada',
  category: 'Jugos Naturales en Agua',
  title: 'Limonada Cerezada',
  price: 8000,
  desc: 'Refrescante limonada con cereza. Adicional en leche $2.000.',
  image: 'images/jugo-limonada-cerezada.png',
  ingredients: ['Limón', 'Cereza', 'Agua', 'Azúcar'],
  extras: [
    { name: 'Leche adicional', price: 2000 }
  ]
},
{
    id: 'jarra-lulo',
    category: 'Jarras de Jugo',
    title: 'Jarra de Jugo de Lulo',
    price: 15000,
    desc: 'Jarra familiar de jugo natural de lulo.',
    image: 'images/jarra-lulo.png',
    ingredients: ['Lulo', 'Agua', 'Azúcar']
  },
  {
    id: 'jarra-maracuya',
    category: 'Jarras de Jugo',
    title: 'Jarra de Jugo de Maracuyá',
    price: 15000,
    desc: 'Jarra familiar de jugo natural de maracuyá.',
    image: 'images/jarra-maracuya.png',
    ingredients: ['Maracuyá', 'Agua', 'Azúcar']
  },
  {
    id: 'jarra-mora',
    category: 'Jarras de Jugo',
    title: 'Jarra de Jugo de Mora',
    price: 15000,
    desc: 'Jarra familiar de jugo natural de mora.',
    image: 'images/jarra-mora.png',
    ingredients: ['Mora', 'Agua', 'Azúcar']
  },
  {
    id: 'jarra-limonada',
    category: 'Jarras de Jugo',
    title: 'Jarra de Limonada Tradicional',
    price: 15000,
    desc: 'Jarra de limonada tradicional para compartir.',
    image: 'images/jarra-limonada.png',
    ingredients: ['Limón', 'Agua', 'Azúcar']
  },
  {
    id: 'jarra-limonada-cerezada',
    category: 'Jarras de Jugo',
    title: 'Jarra de Limonada Cerezada',
    price: 15000,
    desc: 'Jarra familiar de limonada con cereza.',
    image: 'images/jarra-limonada-cerezada.png',
    ingredients: ['Limón', 'Cereza', 'Agua', 'Azúcar']
  },
  {
    id: 'frappe-oreo',
    category: 'Otras Bebidas',
    title: 'Frappé de Oreo',
    price: 15000,
    desc: 'Delicioso frappé preparado con galletas Oreo y crema.',
    image: 'images/frappe-oreo.png',
    ingredients: ['Galleta Oreo', 'Leche', 'Hielo', 'Crema batida']
  },
  {
    id: 'botella-agua',
    category: 'Otras Bebidas',
    title: 'Botella de Agua',
    price: 3000,
    desc: 'Agua embotellada natural, ideal para refrescarte.',
    image: 'images/botella-agua.png',
    ingredients: ['Agua purificada']
  },
  {
    id: 'coca-cola-400ml',
    category: 'Otras Bebidas',
    title: 'Coca Cola PET 400 ml',
    price: 4500,
    desc: 'Refrescante gaseosa Coca Cola presentación 400 ml.',
    image: 'images/coca-cola-400ml.png',
    ingredients: ['Agua carbonatada', 'Azúcar', 'Color caramelo', 'Cafeína']
  },
  {
    id: 'coca-cola-15l',
    category: 'Otras Bebidas',
    title: 'Coca Cola 1.5 L',
    price: 9000,
    desc: 'Botella familiar de Coca Cola de 1.5 litros.',
    image: 'images/coca-cola-15l.png',
    ingredients: ['Agua carbonatada', 'Azúcar', 'Color caramelo', 'Cafeína']
  },
  {
    id: 'postobon-pet',
    category: 'Otras Bebidas',
    title: 'Postobón PET',
    price: 4500,
    desc: 'Gaseosa Postobón en presentación individual PET.',
    image: 'images/postobon-pet.png',
    ingredients: ['Agua carbonatada', 'Azúcar', 'Esencia de frutas']
  },
  {
    id: 'postobon-15l',
    category: 'Otras Bebidas',
    title: 'Postobón 1.5 L',
    price: 8000,
    desc: 'Gaseosa Postobón tamaño familiar de 1.5 litros.',
    image: 'images/postobon-15l.png',
    ingredients: ['Agua carbonatada', 'Azúcar', 'Esencia de frutas']
  },
  {
    id: 'cerveza-poker',
    category: 'Cervezas',
    title: 'Cerveza Poker',
    price: 4000,
    desc: 'Cerveza Poker, sabor colombiano clásico.',
    image: 'images/cerveza-poker.png',
    ingredients: ['Cebada', 'Lúpulo', 'Agua', 'Levadura']
  },
  {
    id: 'cerveza-costena',
    category: 'Cervezas',
    title: 'Cerveza Costeña',
    price: 4000,
    desc: 'Cerveza Costeña, ligera y refrescante.',
    image: 'images/cerveza-costena.png',
    ingredients: ['Cebada', 'Lúpulo', 'Agua', 'Levadura']
  }

];
const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Shake Burger Combos';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}

// ---------- Render productos ----------
function renderProducts(cat){
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => p.category === cat && (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  catalogEl.innerHTML = '';

  if(items.length === 0){
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', ()=> openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}

// ---------- Modal producto ----------
function openProductModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden', 'false');
  modalContent.innerHTML = '';

  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  modalInner.innerHTML = `
    <div class="modal-header">
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="modal-img">
      <h3>${escapeHtml(p.title)} — $${numberWithCommas(p.price)}</h3>
      <p class="desc">${escapeHtml(p.desc)}</p>
    </div>
    <div class="modal-body scrollable-area"></div>
    <div class="modal-footer">
      <div class="qty-controls">
        <button id="qty-decr" type="button">-</button>
        <span id="qty-val">1</span>
        <button id="qty-incr" type="button">+</button>
      </div>
      <div class="price-actions">
        <div id="price-breakdown">
          <div><strong>Subtotal:</strong> <span id="subtotal">$${numberWithCommas(p.price)}</span></div>
          <div><strong>Adicionales:</strong> <span id="extras-total">$0</span></div>
          <div><strong>Total:</strong> <span id="modal-price">$${numberWithCommas(p.price)}</span></div>
        </div>
        <button id="modal-add" class="btn-primary" type="button">Añadir al carrito</button>
      </div>
    </div>
  `;

  const scrollArea = modalInner.querySelector('.scrollable-area');
  let ingSection = null, extrasSection = null;

  // === Sección generadora ===
  function buildSection(title, items, dataAttr) {
    const section = document.createElement('div');
    section.className = 'section collapsed';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `<strong>${title} ▼</strong>`;

    const body = document.createElement('div');
    body.className = 'section-body checklist';

    items.forEach((item, idx) => {
      const id = `${dataAttr}-${p.id}-${idx}`;
      const label = document.createElement('label');
      label.className = 'check-item';

      if (dataAttr === 'ing') {
        label.innerHTML = `
          <input type="checkbox" data-ing="${escapeHtml(item)}" id="${id}">
          <span>Quitar ${escapeHtml(item)}</span>
        `;
      } else {
        label.innerHTML = `
          <div class="extra-item">
            <label>
              <input type="checkbox" data-extra="${escapeHtml(item.name)}" data-price="${item.price}" id="${id}">
              <span>${escapeHtml(item.name)} (+$${numberWithCommas(item.price)})</span>
            </label>
            <div class="extra-qty hidden">
              <button type="button" class="ex-decr">-</button>
              <span class="ex-val">1</span>
              <button type="button" class="ex-incr">+</button>
            </div>
          </div>
        `;
      }

      body.appendChild(label);
    });

    section.appendChild(header);
    section.appendChild(body);
    scrollArea.appendChild(section);
    return { section, header };
  }

  // === Ingredientes y adicionales ===
  if (p.ingredients?.length) {
    const { section, header } = buildSection('Quitar ingredientes', p.ingredients, 'ing');
    ingSection = section;
    header.addEventListener('click', () => {
      const open = !ingSection.classList.contains('collapsed');
      ingSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Quitar ingredientes ${open ? '▼' : '▲'}</strong>`;
      if (extrasSection) {
        extrasSection.classList.add('collapsed');
        extrasSection.querySelector('.section-header').innerHTML = '<strong>Agregar adicionales ▼</strong>';
      }
    });
  }

  if (p.extras?.length) {
    const { section, header } = buildSection('Agregar adicionales', p.extras, 'ex');
    extrasSection = section;
    header.addEventListener('click', () => {
      const open = !extrasSection.classList.contains('collapsed');
      extrasSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Agregar adicionales ${open ? '▼' : '▲'}</strong>`;
      if (ingSection) {
        ingSection.classList.add('collapsed');
        ingSection.querySelector('.section-header').innerHTML = '<strong>Quitar ingredientes ▼</strong>';
      }
    });
  }

  modalContent.appendChild(modalInner);

  // === Lógica de cantidad ===
  let qty = 1;
  function getExtrasSum() {
    let total = 0;
    modalContent.querySelectorAll('input[data-extra]:checked').forEach(chk => {
      const price = Number(chk.dataset.price);
      const parent = chk.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      total += price * exQty;
    });
    return total;
  }

  function updateModalPrice() {
    const extrasSum = getExtrasSum();
    const subtotal = p.price * qty;
    const total = subtotal + extrasSum;

    document.getElementById('subtotal').textContent = '$' + numberWithCommas(subtotal);
    document.getElementById('extras-total').textContent = '$' + numberWithCommas(extrasSum);
    document.getElementById('modal-price').textContent = '$' + numberWithCommas(total);
  }

  // === Eventos de cantidad global ===
  modalContent.querySelector('#qty-decr').addEventListener('click', () => {
    if (qty > 1) qty--;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });
  modalContent.querySelector('#qty-incr').addEventListener('click', () => {
    qty++;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });

  // === Checkbox adicionales con contador ===
  modalContent.addEventListener('change', e => {
    if (e.target.matches('input[data-extra]')) {
      const extraItem = e.target.closest('.extra-item');
      const qtyBox = extraItem.querySelector('.extra-qty');
      qtyBox.classList.toggle('hidden', !e.target.checked);
      updateModalPrice();
    }
  });

// === Control preciso de botones + y - para adicionales ===
['click', 'touchstart'].forEach(evtType => {
  modalContent.addEventListener(evtType, e => {
    const btn = e.target.closest('.ex-incr, .ex-decr');
    if (!btn) return;

    e.stopPropagation();
    e.preventDefault();

    // Previene clicks múltiples simultáneos
    if (btn.disabled) return;
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 150);

    const qtyBox = btn.closest('.extra-qty');
    const valEl = qtyBox.querySelector('.ex-val');
    let val = Number(valEl.textContent);

    if (btn.classList.contains('ex-incr')) val++;
    else if (val > 1) val--;

    valEl.textContent = val;
    updateModalPrice();
  });
});



  // === Añadir al carrito ===
  modalContent.querySelector('#modal-add').addEventListener('click', () => {
    const removed = Array.from(modalContent.querySelectorAll('input[data-ing]:checked')).map(i => i.dataset.ing);
    const extras = Array.from(modalContent.querySelectorAll('input[data-extra]:checked')).map(i => {
      const parent = i.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      return {
        name: i.dataset.extra,
        price: Number(i.dataset.price),
        qty: exQty
      };
    });
    addToCart({ productId: p.id, title: p.title, price: p.price, qty, removed, extras });
    closeProductModal();
  });
}









function closeProductModal(){
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e)=>{ if(e.target === productModal) closeProductModal(); });

// ---------- Carrito ----------
function addToCart(item){
  const key = generateCartKey(item);
  const existing = cart.find(c => c.key === key);
  if(existing){ existing.qty += item.qty; }
  else{ cart.push({...item, key}); }
  persistCart();
  refreshCartUI();
}

function generateCartKey(it){
  const extrasPart = (it.extras || []).map(e => e.name).sort().join('|') || '';
  const removedPart = (it.removed || []).slice().sort().join('|') || '';
  return `${it.productId}::${extrasPart}::${removedPart}`;
}

function persistCart(){
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

function refreshCartUI(){
  cartCountEl.textContent = String(cart.reduce((s,i) => s + i.qty, 0));
  cartItemsEl.innerHTML = '';
  let subtotal = 0;

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<div class="muted">Tu carrito está vacío</div>';
  } else {
    cart.forEach((c, idx)=>{
      const extrasText = (c.extras && c.extras.length) ? ('+' + c.extras.map(e=>e.name).join(', ')) : '';
      const removedText = (c.removed && c.removed.length) ? ('(sin ' + c.removed.join(', ') + ')') : '';
      const extrasSum = (c.extras || []).reduce((s,e)=> s + (e.price || 0), 0);
      const itemTotal = (c.price + extrasSum) * c.qty;
      subtotal += itemTotal;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="info">
          <div><strong>${escapeHtml(c.title)}</strong> ${escapeHtml(removedText)}</div>
          <div class="muted">${escapeHtml(extrasText)}</div>
        </div>
        <div style="text-align:right">
          <div>$${numberWithCommas(itemTotal)}</div>
          <div class="qty-controls">
            <button data-action="decr" data-idx="${idx}" type="button">-</button>
            <span>${c.qty}</span>
            <button data-action="incr" data-idx="${idx}" type="button">+</button>
            <button data-action="del" data-idx="${idx}" type="button">🗑</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }

  cartSubtotalEl.textContent = '$' + numberWithCommas(subtotal);
  
 cartDeliveryEl.textContent = '$0';
cartTotalEl.textContent = '$' + numberWithCommas(subtotal);

  // bind buttons
  cartItemsEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const action = btn.dataset.action;
      const i = Number(btn.dataset.idx);
      if(Number.isNaN(i)) return;
      if(action === 'incr') cart[i].qty++;
      else if(action === 'decr') cart[i].qty = Math.max(1, cart[i].qty - 1);
      else if(action === 'del') cart.splice(i, 1);
      persistCart();
      refreshCartUI();
    });
  });
}

// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------
function openCheckout(){
  if(cart.length === 0){ alert('El carrito está vacío.'); return; }
  checkoutForm.reset();
  addressLabel.classList.add('hidden');
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden','false');
}

checkoutClose.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); checkoutModal.setAttribute('aria-hidden','true'); });
backToCartBtn.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); cartDrawer.classList.remove('hidden'); });

// Mostrar campo dirección sólo si es domicilio
checkoutForm.addEventListener('change', () => {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const addressLabel = document.getElementById('address-label');
  const envioRow = document.getElementById('envio-row');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total-checkout');

  // Mostrar campo de dirección solo si es domicilio
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // Calcular subtotal
  const subtotal = cart.reduce((s, i) => {
    const extrasSum = (i.extras || []).reduce((x, e) => x + (e.price || 0), 0);
    return s + (i.price + extrasSum) * i.qty;
  }, 0);

  // Calcular envío y total
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar u ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar textos
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
});





// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name') || '';
  const clientPhone = fd.get('phone') || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address') || '';
  const notes = fd.get('notes') || '';

  let textParts = [];
  textParts.push('🧾 *Nuevo Pedido - Arcade Food✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;
  cart.forEach(c => {
    const extrasList = (c.extras && c.extras.length)
      ? c.extras.map(x => `   ➕ ${x.qty}x ${x.name} ($${numberWithCommas(x.price * x.qty)})`).join('\n')
      : '';
    const removedText = (c.removed && c.removed.length)
      ? (' sin ' + c.removed.join(', '))
      : '';
    const extrasSum = (c.extras || []).reduce((s, e) => s + (e.price * e.qty || 0), 0);
    const itemTotal = (c.price + extrasSum) * c.qty;
    subtotal += itemTotal;

    textParts.push(`${c.qty}x ${c.title}${removedText} — *$${numberWithCommas(itemTotal)}*`);
    if (extrasList) textParts.push(extrasList);
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  if (method === 'domicilio') {
    textParts.push(`🚗 Envío: $${numberWithCommas(delivery)}`);
  } else {
    textParts.push(`🏪 Envío: Sin costo (recoge en el local)`);
  }
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  const msg = encodeURIComponent(textParts.join('\n'));
  const bp = String(BUSINESS_PHONE || '').replace(/[^0-9]/g, '');

  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const waUrl = `https://wa.me/${bp}?text=${msg}`;
  window.open(waUrl, '_blank');
});



// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});

