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
let activeCategory = 'Menú Infantil';

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
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
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
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // === CREAR OVERLAY ===
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";
  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${
            p.extras?.length
              ? `<h3>Adiciones</h3>
              <div class="extras-list">
                ${p.extras
                  .map(
                    (e, i) => `
                      <label>
                        <input type="checkbox" data-name="${e.name}" data-price="${e.price}">
                        <span>${e.name}</span>
                        <span class="extra-controls" data-index="${i}">
                          <button class="minus-extra">−</button>
                          <span class="extra-qty">0</span>
                          <button class="plus-extra">+</button>
                        </span>
                        <small>+$${numberWithCommas(e.price)}</small>
                      </label>
                    `
                  )
                  .join("")}
              </div>` : ""
          }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} <span class="price">$${numberWithCommas(p.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // === CIERRE DEL MODAL ===
  const closeBtn = overlay.querySelector(".close");
  closeBtn.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });

  // === VARIABLES ===
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // --- SI ES EDICIÓN, CARGAR VALORES EXISTENTES ---
  if (cartIndex !== null) {
    const item = cart[cartIndex];
    qty = item.qty;
    qtyEl.textContent = qty;
    if (item.extras?.length) {
      item.extras.forEach(e => {
        const index = p.extras.findIndex(pe => pe.name === e.name);
        if (index > -1) extrasQty[index] = e.qty;
      });
    }
    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      const qtyDisplay = input.closest('label').querySelector('.extra-qty');
      qtyDisplay.textContent = extrasQty[i];
    });
    updatePrice();
  }

  // === ACTUALIZAR PRECIO ===
  function updatePrice() {
    const extrasTotal = (p.extras || []).reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);
    const total = (p.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  // === BOTONES DE CANTIDAD PRINCIPAL ===
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if(qty>1){qty--;qtyEl.textContent=qty;updatePrice();} });

  // === BOTONES DE CADA EXTRA ===
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { extrasQty[index]++; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); });
  });
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { if(extrasQty[index]>0){ extrasQty[index]--; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); } });
  });

  // === AGREGAR O ACTUALIZAR EN EL CARRITO ===
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || []).map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] })).filter(e => e.qty > 0);
    const extrasSum = extras.reduce((a, e) => a + e.price * e.qty, 0);
    const finalUnitPrice = p.price + extrasSum;

    const item = { productId: p.id, title: p.title, price: finalUnitPrice, qty, image: p.image, extras };

    if (cartIndex !== null) {
      cart[cartIndex] = item; // actualizar producto existente
    } else {
      addToCart(item); // agregar producto nuevo
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove('hidden'); // mostrar carrito actualizado
  });
}




// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍦</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    // --- CALCULAR PRECIO REAL DEL ITEM CON EXTRAS ---
    const extrasTotal = item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;
    const itemUnitPrice = item.price - extrasTotal; // precio base
    const itemTotal = (itemUnitPrice + extrasTotal) * item.qty;
    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras.map(e => `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`).join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // --- CONTROL DE CANTIDAD ---
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // --- ELIMINAR PRODUCTO ---
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // --- EDITAR PRODUCTO DESDE EL CARRITO ---
    div.addEventListener('click', (e) => {
      if (!e.target.classList.contains('minus') && !e.target.classList.contains('plus') && !e.target.classList.contains('remove-btn')) {
        cartDrawer.classList.add('hidden'); // esconder carrito
        openProductModal(item.productId, idx); // enviar índice para edición
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  updateCartBadge();
}













// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 5000;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 5000; // mismo valor usado en refreshCartUI

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🧾 Heredamos los valores que ya calcula refreshCartUI()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🚚 Si el método es domicilio, se suma el envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // ✅ Actualizar DOM (heredado del refreshCartUI, con ajuste solo si hay envío)
  subtotalEl.textContent = document.getElementById('cart-subtotal').textContent;
  deliveryEl.textContent = document.getElementById('cart-delivery').textContent;
  totalEl.textContent = method === 'domicilio'
    ? `$${numberWithCommas(total)}`
    : document.getElementById('cart-total-checkout').textContent;
}


checkoutForm.addEventListener('change', updateCheckoutTotals);






// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - TASTY FOOD 🍨✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;

  cart.forEach(item => {
    // Calcular precio de extras individualmente
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    // Mostrar solo precio del artículo base + extras detallados
    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    // Si hay toppings removidos
    if (item.removed && item.removed.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
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


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


