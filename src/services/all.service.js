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
	printEncrypted();
	printDecrypted();
}

function printEncrypted() {
	console.log( "Vuex Encrypted Store ===" );
	logService.printEncrypted();
	infoService.printEncrypted();
	errorService.printEncrypted();
	eventService.printEncrypted();
	frameService.printEncrypted();
	recordService.printEncrypted();
	thresholdService.printEncrypted();
	deltaService.printEncrypted();
}
function printDecrypted() {
	console.log( "Vuex Decrypted Store ===" );
	logService.printDecrypted();
	infoService.printDecrypted();
	errorService.printDecrypted();
	eventService.printDecrypted();
	frameService.printDecrypted();
	recordService.printDecrypted();
	thresholdService.printDecrypted();
	deltaService.printDecrypted();
}

export const allService = {
	getToday ,
	tryToDecryptStoredEncrypted ,
	printEncrypted ,
	printDecrypted ,
};
