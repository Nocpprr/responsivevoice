function initVoice(rvApiKey) {
  var rvAgentPlayer = { version: 1 };
  var rvApiEndpoint = 'https://texttospeech.responsivevoice.org/v1/text:synthesize';

  const ResponsiveVoice = require('./responsivevoice');
  return new ResponsiveVoice();
}

module.exports = {
  initVoice
}