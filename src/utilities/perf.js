import Perf from 'react-addons-perf';

if(['production', 'test'].indexOf(process.env.NODE_ENV) === -1){
  window.Perf = Perf;
}
