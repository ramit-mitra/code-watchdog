module.exports = {
	"name": "ESLINT",
	"try": "eslint",
	"fail": "You donot seem to have ESLINT installed.",
    "pass": "ESLINT available",
    "fallback": "npm install -g eslint",
    "fallback-message": "This dependency will now be installed, please wait...",
    "fallback-fail": "Installing ESlint failed, this program will now terminate !!!",
    "fallback-pass": "✓ ESLINT installed."
};