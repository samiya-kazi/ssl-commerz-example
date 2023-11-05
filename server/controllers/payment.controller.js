const SSLCommerzPayment = require('sslcommerz-lts');
const config = require('../config');

async function initializePayment (req, res) {
  try {
    const { orderId, amount, customerName, customerEmail, customerPhone} = req.body;

    const data = {
      total_amount: amount,
      currency: 'BDT',
      tran_id: orderId, // use unique tran_id for each api call
      success_url: `http://localhost:${config.PORT}/payment/success`,
      fail_url: `http://localhost:${config.PORT}/payment/fail`,
      cancel_url: `http://localhost:${config.PORT}/payment/cancel`,
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: customerName,
      cus_email: customerEmail,
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: customerPhone,
      cus_fax: '01711111111',
      ship_name: customerName,
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    }


    const sslcz = new SSLCommerzPayment(config.SSL_STORE_ID, config.SSL_STORE_PASSWORD, false);

    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.redirect(GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error while initializing payment.', error: error});
  }
}


async function successfulPayment (req, res) {
  try {
    const data = req.body;
    console.log(data);
    res.redirect("http://localhost:5173/success");

  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error while initializing payment.', error: error});
  }
}

async function failedPayment (req, res) {
  try {
    const data = req.body;
    console.log(data);
    res.redirect("http://localhost:5173/fail");

  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error while initializing payment.', error: error});
  }
}


async function cancelledPayment (req, res) {
  try {
    const data = req.body;
    console.log(data);
    res.redirect("http://localhost:5173");

  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error while initializing payment.', error: error});
  }
}


module.exports = {
  initializePayment,
  successfulPayment,
  failedPayment,
  cancelledPayment
}