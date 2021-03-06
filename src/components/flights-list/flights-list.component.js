import template from './flights-list.component.html';
import controller from './flights-list.controller';
import './flights-list.component.scss';

const FlightsListComponent = {
  bindings: {
    sourceName: '<',
    destinationName: '<',
    isLoading: '<',
    emptyMessage: '<',
    flights: '<',
    onFlightSelected: '&'
  },
  template,
  controller
};

export default FlightsListComponent;
