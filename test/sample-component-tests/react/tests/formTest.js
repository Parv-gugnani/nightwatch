describe('Render React Component test', function() {
  let formComponent;

  it('checks the react component', async function(browser) {
    formComponent = await browser.mountComponent('/test/sample-component-tests/react/src/Form.jsx', {});
    await browser.expect.element(formComponent).to.be.visible;
  });

});