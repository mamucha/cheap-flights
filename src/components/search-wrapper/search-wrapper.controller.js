export default function AirportSelectorController() {
  this.sourceAirports = [
    { label: 'Lisbon', id: 'lsb' },
    { label: 'Warsaw', id: 'waw' }
  ];
  this.destinationAirports = [
    { label: 'Airport1', id: 'ai1' },
    { label: 'Airport2', id: 'ai2' },
    { label: 'Airport3', id: 'ai3' },
    { label: 'Airport4', id: 'ai4' },
    { label: 'Airport5', id: 'ai5' },
    { label: 'Airport6', id: 'ai6' },
    { label: 'Airport7', id: 'ai7' },
    { label: 'Airport8', id: 'ai8' },
    { label: 'Airport9', id: 'ai9' },
    { label: 'Paris', id: 'prs' },
    { label: 'London', id: 'lnd' }
  ];
  this.onSourceChange = (airport) => {
    console.log('onSourceChange', airport);
  };
  this.onDestinationChange = (airport) => {
    console.log('onDestinationChange', airport);
  };
}
