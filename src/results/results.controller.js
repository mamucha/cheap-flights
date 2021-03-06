export default function ResultsPageController(AirportsService, CheapFlightsService) {
  'ngInject';

  this.flights = null;
  this.isLoading = true;
  this.currentParams = null;

  this.onSearchSubmit = (params) => {
    this.clearData();
    this.currentParams = params;
    this.sourceAirport = AirportsService.getAirport(params.sourceIataCode);
    this.destinationAirport = AirportsService.getAirport(params.destinationIataCode);
    this.loadFlights();
  };

  this.clearData = () => {
    this.flights = null;
    this.isLoading = true;
    this.currentParams = null;
  };

  this.loadFlights = () => {
    this.isLoading = true;
    CheapFlightsService.findFlights(
      this.currentParams.sourceIataCode,
      this.currentParams.destinationIataCode,
      this.currentParams.startDate,
      this.currentParams.endDate
    ).then(
      this.onFindFlightsCompleted.bind(this),
      this.onFindFlightsFailed.bind(this)
    );
  };

  this.onFindFlightsCompleted = (flights) => {
    this.isLoading = false;
    if (this.flights === null) {
      this.flights = flights;
    } else {
      this.flights = this.flights.concat(flights);
    }
  };

  this.onFindFlightsFailed = () => {
    this.isLoading = false;
  };

  this.onFlightSelected = (flight) => {
    // TODO create a route fore displaying chosen "ticket"
    console.info(`From: ${this.sourceAirport.name}\nTo: ${this.destinationAirport.name}\nFlight data: ${JSON.stringify(flight)}`);
  };
}
