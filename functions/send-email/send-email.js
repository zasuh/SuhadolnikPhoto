const SparkPost = require('sparkpost')

const client = new SparkPost(process.env.SPARKPOST)

exports.handler = function(event, context, callback) {
  console.log(event)
  console.log(context)
  client.transmissions
    .send({
      options: {
        sandbox: true,
      },
      content: {
        from: 'testing@sparkpostbox.com',
        subject: 'Hello, World!',
        html: '<html><body><p>My cool email.</p></body></html>',
      },
      recipients: [{ address: 'zanesuhi@gmail.com' }],
    })
    .then(data => {
      console.log('Mail has been sent successfully!')
      console.log(data)
    })
    .catch(err => {
      console.log('Whoops! Something went wrong')
      console.log(err)
    })
}
