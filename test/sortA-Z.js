const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert')

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
    //LAUNCH THE WEBSITE
    await driver.get('https://qaexam.forge99.com/properties');

    // LOCATE THE OPTION
    await driver.findElement(By.xpath('//*[@id="content-listings"]/div[1]/div[2]/select')).click();
    // SELECT OPTION
    await driver.findElement(By.xpath('//*[@id="content-listings"]/div[1]/div[2]/select/option[5]')).click();
    // GET VALUES OF THE TITLE
    const texts2 = [await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[1]/div/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[2]/div/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[3]/div/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[4]/div/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[5]/div/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[6]/div/span')).getText()]

                  console.log(texts2);

    const expectedValue = texts2.sort();
    console.log(expectedValue);
    
    assert.strictEqual(texts2,expectedValue)
    console.log('Assert Passed!')
    await driver.quit();
    console.log('Assert Passed!')
  
}
example();