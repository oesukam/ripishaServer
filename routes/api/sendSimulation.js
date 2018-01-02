const prefix = '/api/simulation';
const step2Data = [
  '1. Promo 1 Giga',
  '2. Achat des Unité',
  '3. Envoi Argent Local',
  '4. Envoi Argent International',
  '5. Paiements',
  '6. Retrait d\'argent',
  '7. Banque',
  '8. Mon compte',
  '9. Mot secret'
];

module.exports = [
  { 
    method: 'GET',
    path: prefix + '/step1',
    handler: function (request, h) {
      return {success: true, data: { usd: 'USD', cdf: 'CDF' }};
    } 
  },
  { 
    method: 'GET',
    path: prefix + '/step2',
    handler: function (request, h) {
      return { success: true, data: step2Data };
    } 
  },
  { 
    method: 'GET',
    path: prefix + '/step2/{id}',
    handler: function (request, h) {
      let selectedOption = step2Data[request.params.id - 1];
      if (selectedOption) {
        return { success: true, data: selectedOption };
      }
      return { success: false, errors: ['Wrong input'] };
    } 
  }
];
