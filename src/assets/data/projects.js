import { v4 as uuidv4 } from 'uuid';
import MangoSorbet from '../images/MangoSorbet.jpg';
import MangoChutney from '../images/MangoChutney.jpg';
import MangoCurry from '../images/MangoCurry.jpg';
import MangoSalsa from '../images/MangoSalsa.jpg';
import MangoPancakes from '../images/MangoPancakes.jpg';
import MangoStickyRice from '../images/MangoStickyRice.jpg';
import MangoCoconutIceCream from '../images/MangoCoconutIceCream.jpg';
import MangoSmoothie from '../images/MangoSmoothie.jpg';
import CavinImg from '../images/MangoLassi.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Mango Smoothie',
    desc: "This refreshing mango smoothie is the perfect way to cool off on a hot day. Made with frozen mango chunks, Greek yogurt, honey, and almond milk, it's healthy, delicious, and easy to make.",
    img: MangoSmoothie,
  },
  {
    id: uuidv4(),
    name: 'Mango Sorbet',
    desc: "Mango sorbet is a refreshing and fruity frozen dessert made with ripe mangoes, sugar, and water. It's a healthy alternative to ice cream and is perfect for hot summer days.",
    img: MangoSorbet,
  },
  {
    id: uuidv4(),
    name: 'Mango Pancakes',
    desc: 'Start your day off right with these delicious mango pancakes! Made with fresh mango puree and topped with whipped cream and sliced mangoes, these pancakes are a breakfast dream come true.',
    img: MangoPancakes,
  },
  {
    id: uuidv4(),
    name: 'Mango Salsa',
    desc: "This sweet and spicy mango salsa is the perfect topping for grilled. Made with fresh mangoes, red onion, jalapeño, lime juice, and cilantro, it's packed with flavor and sure to be a crowd-pleaser.",
    img: MangoSalsa,
  },
  {
    id: uuidv4(),
    name: 'Mango Lassi',
    desc: 'Mango lassi is a popular Indian drink made with ripe mangoes, yogurt, and sugar. The sweet and tangy drink is perfect for hot summer days and can be made in just a few minutes.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Mango Sticky Rice',
    desc: "Mango sticky rice is a traditional Thai dessert made with sticky rice, coconut milk, sugar, and ripe mangoes. It's sweet, creamy, and delicious, and can be served warm or cold.",
    img: MangoStickyRice,
  },
  {
    id: uuidv4(),
    name: 'Mango Chutney',
    desc: "Mango chutney is a sweet and spicy condiment made with ripe mangoes, vinegar, sugar, and spices like ginger, cumin, and coriander. It's great for serving with grilled meats, sandwiches, or as a dip for chips.",
    img: MangoChutney,
  },
  {
    id: uuidv4(),
    name: 'Mango Curry',
    desc: "Mango curry is a flavorful Indian curry made with ripe mangoes, coconut milk, and spices like cumin, coriander, and turmeric. It's a vegetarian dish that's easy to make and is perfect for serving over rice.",
    img: MangoCurry,
  },
  {
    id: uuidv4(),
    name: 'Mango Coconut Ice Cream',
    desc: 'Mango Coconut  Ice Cream is a delicious and refreshing dessert that combines the sweetness of ripe mangoes with the creaminess of coconut milk.',
    img: MangoCoconutIceCream,
  },
];

export default projects;
