module.exports = function (DIR) {

	message = "------------------------------------------------------------------------\n";
	message += "CODE WATCHDOG v1.0 WEB CONSOLE\n";
	message += "-----------------------------------------------------------------------\n";
	message += "Automated watchdog framework, extendable to run actions on code changes\n";
	message += "Developed By : Ramit Mitra\n";
	message += "========================================================================\n";
	message += "\n";
	message += "Started watching files at " + DIR + "\n";
	message += "========================================================================\n\n";

	return message;
};