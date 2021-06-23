const AWS = require('aws-sdk');

const SES_ACCESS_KEY='AKIA55WR42AZ27CQJLEV'
const SES_SECRET_KEY='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'
const SES_REGION='us-east-1'

const SES_CONFIG = {
  accessKeyId: SES_ACCESS_KEY,
  secretAccessKey: SES_SECRET_KEY,
  region: SES_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

// X-SES-CONFIGURATION-SET: myConfigset
// X-SES-MESSAGE-TAGS: Email=NULL
// From: test-verified-domain@example.com
// To: test-recipient@example.com
// Subject: Test email
// Content-Type: multipart/alternative;
//     boundary="----=_boundary"

// ------=_boundary
// Content-Type: text/html; charset=UTF-8
// Content-Transfer-Encoding: 7bit

// This is a test email.

// <a href="https://aws.amazon.com/">Amazon Web Services</a>
// ------=_boundary


const mailer = async (email, data) => {
  const params = {
    ConfigurationSetName:'DEMO',
    Source: 'mohammad.danish@springworks.in',
    Destination: {
      ToAddresses: email,
    },

    ReplyToAddresses: [],
    Message: {
        Header:{
            Email: 'NULL'
        },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: data,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Thank You - Nachamu`,
      },
    },
  };

  return AWS_SES.sendEmail(params).promise();
};

module.exports = {
  mailer,
};
