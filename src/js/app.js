import * as functions from "./modules/functions.js";
import * as smoothscroll from "./modules/smoothscroll.js";
import * as canvas from "./modules/canvas.js";
import * as animations from "./modules/animations.js";
import * as sliders from "./modules/sliders.js";
import * as cursor from "./modules/cursor.js";
import * as header from "./modules/header.js";

functions.isWebp();
cursor.init();
smoothscroll.init();
canvas.init();
animations.init();
sliders.init(); 
header.init();