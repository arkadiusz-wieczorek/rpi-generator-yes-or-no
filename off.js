var GPIO = require('onoff').Gpio,
    led = new GPIO(23, 'out'),
    led2 = new GPIO(24, 'out');

led.writeSync(0);
console.log('green led is not lighting');

led2.writeSync(0);
console.log('blue led is not lighting');

function exit() {
	led.unexport();
	led2.unexport();
	process.exit();
}
process.on('SIGINT', exit());