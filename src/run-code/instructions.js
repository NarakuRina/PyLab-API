const {join} = require('path')

const CODES_DIR = process.env.CODES_DIR || "/tmp/codes";
const OUTPUTS_DIR = process.env.OUTPUTS_DIR || "/tmp/outputs";

const commandMap = (jobID, language) => {
    switch (language) {
        case 'py':
            return {
                executeCodeCommand: 'python3',
                executionArgs: [
                    `${CODES_DIR}/${jobID}.py`
                ],
                compilerInfoCommand: 'python3 --version'
            }
    }
}

const supportedLanguages = ['py'];

module.exports = {commandMap, supportedLanguages}
