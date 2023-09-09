import { bestFruits, multiply, aboutMe } from "./modules/agregator.js";

const news = 'trabajo en ' + aboutMe.companyName + ' multiplicar ' + multiply(2, 3) + ' y me gustan ' + bestFruits[1];
console.log(news);