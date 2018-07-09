module.exports = function (DIR) {

	message = "<script>setInterval(function(){location.reload();}, 2323);</script>\n";
	message += "<pre style='word-wrap: break-word; white-space: pre-wrap;'>";
	message += "------------------------------------------------------------------------\n";
	message += "CODE WATCHDOG v1.0 WEB CONSOLE\n";
	message += "-----------------------------------------------------------------------\n";
	message += "Automated watchdog framework, extendable to run actions on code changes\n";
	message += "Developed By : Ramit Mitra\n";
	message += "========================================================================\n";
	message += "\n";
	message += "Started watching files at " + DIR + "\n\n";
	message += "========================================================================\n\n";

	return message;
};