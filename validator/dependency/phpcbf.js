module.exports = {
	"name": "PHP-CBF",
	"try": "phpcbf",
	"fail": "You donot seem to have PHP CodeSniffer installed.",
    "pass": "PHP CodeSniffer available",
    "fallback": "composer global require squizlabs/php_codesniffer=*",
    "fallback-message": "This dependency will now be installed, please wait...",
    "fallback-fail": "Installing PHP CodeSniffer failed, this program will now terminate !!!",
    "fallback-pass": "✓ PHP CodeSniffer installed."
};