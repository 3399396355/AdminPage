import vm from '../main.js'

import { logService } from './log.service'
import { infoService } from './info.service'
import { errorService } from './error.service'
import { eventService } from './event.service'
import { frameService } from './frame.service'
import { recordService } from './record.service'
import { thresholdService } from './threshold.service'
import { deltaService } from './delta.service'

function getToday() {
	logService.getToday();
	errorService.getToday();
	eventService.getToday();
	frameService.getToday();
	recordService.getToday();
	thresholdService.getToday();
	deltaService.getToday();
}

function tryToDecryptStoredEncrypted() {
	logService.tryToDecryptStoredEncrypted();
	infoService.tryToDecryptStoredEncrypted();
	errorService.tryToDecryptStoredEncrypted();
	eventService.tryToDecryptStoredEncrypted();
	frameService.tryToDecryptStoredEncrypted();
	recordService.tryToDecryptStoredEncrypted();
	thresholdService.tryToDecryptStoredEncrypted();
	deltaService.tryToDecryptStoredEncrypted();
	console.log( vm.$store.state );
}

export const allService = {
	getToday ,
	tryToDecryptStoredEncrypted ,
};
