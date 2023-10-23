/**
 * script.test.js
 */
const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Read the JavaScript file from the file system
const scriptPath = path.resolve(__dirname, './script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf-8');

// Create a new JSDOM instance and run the script
let dom = new JSDOM(`<!DOCTYPE html><body></body>`, { runScripts: 'outside-only' });
dom.window.eval(scriptContent); // This will run your script, changing the background color

// Tests
describe('Background color change', () => {
    it('should change the body background color', () => {
        // Get the style of the body element
        const bodyStyle = dom.window.getComputedStyle(dom.window.document.body);
        
        // We expect some color to be set as the background of the body
        expect(bodyStyle.backgroundColor).toBeTruthy();
    });
});
