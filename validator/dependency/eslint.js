module.exports = {
	"name": "ESLINT",
	"try": "eslint",
	"fail": "You donot seem to have ESLINT installed.",
    "pass": "ESLINT available",
    "fallback": "npm install -g eslint",
    "fallbackMessage": "This dependency will now be installed, please wait...",
    "fallbackFail": "Installing ESlint failed, this program will now terminate !!!",
    "fallbackPass": "✓ ESLINT installed."
};