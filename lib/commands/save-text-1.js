
const TextKey = require('../const').TextKey;

class SaveText1Command {

    constructor(params) {
        this._logger = params.logger;
        this._selectionInfoBuilder = params.selectionInfoBuilder;
        this._textRegistry = params.textRegistry;
    }

    execute(editor) {
        try {
            const textInfo = this._selectionInfoBuilder.extract(editor);
            this._textRegistry.set(TextKey.REGISTER1, textInfo);
        } catch (e) {
            this._handleError(e);
        }
    }

    _handleError(e) {
        this._logger.error(e.stack);
    }

}

module.exports = SaveText1Command;