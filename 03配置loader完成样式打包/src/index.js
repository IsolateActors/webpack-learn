import data from './data.json';
import './style.css';

function fn1() {
    console.log('fn1')
}

fn1();
console.log(data);

// webpack ./src/index.js -o ./dist/bundle.js --mode=development
// webpack ./src/index.js -o ./dist/bundle_production.js --mode=production