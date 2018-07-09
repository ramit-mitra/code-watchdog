module.exports = {
	"name": "PHP-CBF",
	"try": "phpcbf",
	"fail": "You donot seem to have PHP CodeSniffer installed.",
    "pass": "PHP CodeSniffer available",
    "fallback": "composer global require squizlabs/php_codesniffer=*",
    "fallbackMessage": "This dependency will now be installed, please wait...",
    "fallbackFail": "Installing PHP CodeSniffer failed, this program will now terminate !!!",
    "fallbackPass": "✓ PHP CodeSniffer installed."
};