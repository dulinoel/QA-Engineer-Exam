const {Builder, By, Key, util} = require('selenium-webdriver');
var assert = require('assert')

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  
    //LAUNCH THE WEBSITE
    await driver.get('https://qaexam.forge99.com/properties/');
    //GET PICTURE SIZE
    let imageWidth = await driver.findElement(By.xpath('//*[@id="content-listings"]/ul[2]/li/div/a/img[1]')).getCssValue('width');
    console.log('Image width is ' + imageWidth)
    
    
    assert.strictEqual(imageWidth,'300px')

 
    await driver.quit();
    console.log('Assert Passed!')
}
example();