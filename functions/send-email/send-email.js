const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST);

exports.handler = function(event, context, callback) {
  client.transmissions
    .send({
      content: {
        from: 'jozesuhadolnik@gmail.com',
        subject: 'Hello, World!',
        html:
          "<html><body><p>My cool email.</p></body></html>"
      },
    recipients: [{ address: 'zanesuhi@gmail.com' }]
  });
}