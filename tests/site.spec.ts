import {test,expect} from '@playwright/test';
test('navigation, imagery, contact links and accessible gallery',async({page},info)=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('');await expect(page.locator('h1')).toContainText('#1 treatment.');
 await expect(page.locator('body')).toHaveJSProperty('scrollWidth',await page.evaluate(()=>innerWidth));
 await expect(page.getByRole('link',{name:'Call now',exact:false})).toHaveAttribute('href','tel:+17176157099');
 await expect(page.getByRole('link',{name:'Get directions'})).toHaveAttribute('href',/destination=36\+Manor/);
 if(info.project.name==='mobile'){await page.getByRole('button',{name:'Toggle navigation'}).click();}
 await page.getByRole('navigation').getByRole('link',{name:'Our gallery'}).click();
 await expect(page).toHaveURL(/#gallery/);
 await page.getByRole('button',{name:/Enlarge Deep black/}).click();await expect(page.getByRole('dialog')).toBeVisible();
 await page.getByRole('button',{name:'Next →'}).click();await expect(page.getByRole('dialog')).toContainText('Details make the difference');
 await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();
 const images=await page.locator('img').evaluateAll(els=>els.map(i=>({src:i.src,ok:i.complete&&i.naturalWidth>0})));
 expect(images.every(i=>i.ok)).toBeTruthy();expect(errors).toEqual([]);
 await page.screenshot({path:`test-results/${info.project.name}.png`,fullPage:true});
});
test('required fields and quote email draft',async({page})=>{
 let sent=0;page.on('request',r=>{if(r.url().includes('formspree.io'))sent++;});
 await page.goto('#contact');await page.getByRole('button',{name:'Prepare Quote Email'}).click();
 expect(await page.locator('input[name=name]').evaluate((e:HTMLInputElement)=>e.validity.valueMissing)).toBeTruthy();
 await page.getByLabel('Full name *').fill('Demo Customer');await page.getByLabel('Email address *').fill('test@example.com');await page.getByLabel('Phone number *').fill('717-555-0123');
 await page.getByRole('button',{name:'Prepare Quote Email'}).click();await expect(page.getByLabel('Your quote email draft')).toHaveValue(/Full name: Demo Customer/);await expect(page.getByLabel('Your quote email draft')).toHaveValue(/Email: test@example.com/);expect(sent).toBe(0);await expect(page.locator('input[type=file]')).toBeDisabled();
});
test('service quote selects the right service',async({page})=>{await page.goto('');await page.getByRole('link',{name:'Request a quote for Ceramic Coating'}).click();await expect(page.getByLabel('Requested service')).toHaveValue('Ceramic Coating');});
