const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://devops-proj-staging.web.app/");
        await driver.findElement(By.id('generate')).click();

        let resultElement = await driver.findElement(By.id('result'));
        let resultText = await resultElement.getText();

        if (resultText !== "CLICK GENERATE") {
            console.log("Testing Success");
        } else {
            console.log("Testing Failed");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the browser after 10 seconds to observe the result
        setTimeout(async function () {
            await driver.quit();
        }, 10000);
    }
}

test_case();