const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert')

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
    //LAUNCH THE WEBSITE
    await driver.get('https://qaexam.forge99.com/properties');

    // LOCATE THE OPTION
    await driver.findElement(By.xpath('//*[@id="content-listings"]/div[1]/div[2]/select')).click();
    // LOCATE THE OPTION
    await driver.findElement(By.xpath('//*[@id="content-listings"]/div[1]/div[2]/select/option[3]')).click();
    // AFTER SORT
    const texts2 = [await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[1]/div[2]/p[1]/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[2]/div[2]/p[1]/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[3]/div[2]/p[1]/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[4]/div[2]/p[1]/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[5]/div[2]/p[1]/span')).getText(),
                  await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li[6]/div[2]/p[1]/span')).getText()]

                  console.log(texts2);

    const expectedValue = ['$415,000','$950,000','$1,350,000','$1,500,000','$5,495,000','$7,900,000']
    console.log(expectedValue);
    
    assert.strictEqual(texts2,expectedValue)
    await driver.quit();
    console.log('Assert Passed!')
  
}
example();