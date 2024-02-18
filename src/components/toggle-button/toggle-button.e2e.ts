import { newE2EPage } from '@stencil/core/testing';

describe('toggle-button', () => {
  it('renders with the expected default settings', async () => {
    const page = await newE2EPage();

    await page.setContent('<toggle-button checked="false"></toggle-button>');
    const toggleButton = await page.find('toggle-button');
    expect(await toggleButton.getProperty('checked')).toBe(false);
  });

  it('toggles the checked attribute when clicked', async () => {
    const page = await newE2EPage();

    await page.setContent('<toggle-button checked="false"></toggle-button>');
    const toggleButton = await page.find('toggle-button');
    expect(await toggleButton.getProperty('checked')).toBe(false);

    await toggleButton.click();
    await page.waitForChanges();

    expect(await toggleButton.getProperty('checked')).toBe(true);
  });

  it('emits a public event when clicked', async () => {
    const page = await newE2EPage();

    await page.setContent('<toggle-button checked="false"></toggle-button>');
    const toggleButton = await page.find('toggle-button');

    await toggleButton.click();
    await page.waitForChanges();

    const changeEvent = await toggleButton.spyOnEvent('buttonToggled');

    expect(changeEvent).toHaveReceivedEventTimes(0);

    await toggleButton.click();
    await page.waitForChanges();

    expect(changeEvent).toHaveReceivedEventTimes(1);
  });
});

describe('clickToggleBox', () => {
  it('the method toggles the checked attribute when clicked', async () => {
    const page = await newE2EPage();

    await page.setContent('<toggle-button checked="false"></toggle-button>');
    const toggleButton = await page.find('toggle-button');
    expect(await toggleButton.getProperty('checked')).toBe(false);

    await toggleButton.callMethod('clickToggleBox');
    await page.waitForChanges();

    expect(await toggleButton.getProperty('checked')).toBe(true);
  });
});

//react to events, methods
