var GPIO = require('onoff').Gpio,
    led = new GPIO(23, 'out'),
    led2 = new GPIO(24, 'out'),
    iv;

iv = setInterval(function () {
	setTimeout(function () {
		led.writeSync(led.readSync() ^ 1);
	},100);
	led2.writeSync(led2.readSync()^1);
}, 100);