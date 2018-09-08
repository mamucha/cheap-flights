import AirportSelectorComponent from './airport-selector.component';

describe('Component airportSelector', () => {
  let $compile;
  let scope;
  let componentEl;

  beforeEach(() => {
    angular.module('cheapFlightsApp', ['ng', 'ngMock'])
      .component('airportSelector', AirportSelectorComponent);
    angular.mock.module('cheapFlightsApp');
  });

  beforeEach(inject(($injector) => {
    scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');

    scope.airports = [];
    scope.placeholder = null;
    scope.error = null;
    scope.selectedIataCode = null;
    scope.callback = angular.noop;

    const el = angular.element(`
      <airport-selector
        placeholder="placeholder"
        error="error"
        airports="airports"
        selected-iata-code="selectedIataCode"
        on-selected-change="callback(iataCode)"
      ></airport-selector>
    `);
    componentEl = $compile(el)(scope);
    scope.$digest();
  }));

  it('should display empty message for no airports', () => {
    scope.airports = [];
    scope.$apply();
    expect(componentEl[0].querySelector('.airport-selector__option').innerText).to.equal('No airport');
  });

  it('should display provided list of airports', () => {
    scope.airports = [
      { name: 'Lisbon', iataCode: 'lsb' },
      { name: 'Warsaw', iataCode: 'waw' }
    ];
    scope.$apply();
    expect(componentEl[0].querySelectorAll('.airport-selector__option').length).to.equal(2);
  });

  it('should preselect provided airport', () => {
    scope.airports = [
      { name: 'Lisbon', iataCode: 'lsb' },
      { name: 'Warsaw', iataCode: 'waw' }
    ];
    scope.selectedIataCode = 'lsb';
    scope.$apply();
    expect(componentEl[0].querySelector('.airport-selector__option--selected').innerText).to.equal('Lisbon');
  });

  it('should call provided callback with selected airport', () => {
    expect(false).to.equal(true);
  });

  it('should close on ESC key', () => {
    expect(false).to.equal(true);
  });

  it('should display provided placeholder', () => {
    expect(false).to.equal(true);
  });

  it('should display provided error message', () => {
    expect(false).to.equal(true);
  });
});
