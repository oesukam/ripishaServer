const prefix = '/api/simulation/send';

module.exports = [
  { 
    method: 'GET',
    path: prefix + '/step1',
    handler: function (request, h) {
      return {data: { usd: 'USD', cdf: 'CDF' }};
    } 
  },
  { 
    method: 'GET',
    path: prefix + '/step2',
    handler: function (request, h) {
      return { data: [
        '1. Promo 1 Giga',
        '2. Achat des Unité',
        '3. Envoi Argent Local',
        '4. Envoi Argent International',
        '5. Paiements',
        '6. Retrait d\'argent',
        '7. Banque',
        '8. Mon compte',
        '9. Mot secret'
      ] };
    } 
  },
  { 
    method: 'GET',
    path: prefix + '/step3',
    handler: function (request, h) {
      return { data: 'Number / Surnon' };
    } 
  }
];
