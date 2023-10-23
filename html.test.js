/**
 * html.test.js
 */
const fs = require('fs');
const path = require('path');

// Read the HTML file from the file system
const htmlPath = path.resolve(__dirname, './index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Tests
describe('HTML content', () => {
    it('should contain the word "hello"', () => {
        // Check if the HTML content includes the word "hello"
        expect(htmlContent.toLowerCase()).toMatch(/hello/);
    });
});
