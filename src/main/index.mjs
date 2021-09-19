import readline from 'readline';
import { Command } from 'commander/esm.mjs';
import fs from "fs";
import {Translator} from "./Translator.js";

function readConfiguration(path) {
    return JSON.parse(fs.readFileSync(path,
        {encoding:'utf8', flag:'r'}));
}

function configure() {
    const program = new Command();
    program.version('1.0.0');
    program.option('-t, --translations <file>', 'translations configurations file')
    program.parse(process.argv);
    return program.opts();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


const config = configure();
const translations = readConfiguration(config.translations);
const translator = new Translator(translations);

rl.on('line', function(jsonLine){
    const inputJson = JSON.parse(jsonLine);
    console.log(JSON.stringify(translator.translate(inputJson)));
})
