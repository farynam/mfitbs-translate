export class Translator {

    constructor(translations) {
        this._translations = translations;
    }

    translate(inputJson) {
        this._translations.forEach((obj) => {
            const currentValue = inputJson[obj.field];
            inputJson[obj.field] = obj.translations[currentValue];
        })

        return inputJson;
    }

}
