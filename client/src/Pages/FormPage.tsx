import { DollarOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd"
import axios from "axios";
import { useState } from "react"

function FormPage() {

  const [orderId, setOrderId] = useState<string>('');
  const [amount, setAmount] = useState<string>('0');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');

  async function handleSubmit () {
    const data = { orderId, amount, customerName, customerEmail, customerPhone };
    const url = "http://localhost:3000/payment/init"

    try {
      const res = await axios.post<{redirect: string}>(url, data);
      window.location.replace(res.data.redirect);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="form-container">
      <Form onFinish={handleSubmit} className="form">
        <h1>Make Payment</h1>
        <Form.Item label="Order ID" required>
          <Input type="text" onChange={(val) => setOrderId(val.target.value)}/>
        </Form.Item>
        <Form.Item label="Amount" required>
          <Input type="number" onChange={(val) => setAmount(val.target.value)}/>
        </Form.Item>
        <Form.Item label="Customer Name" required>
          <Input type="text" onChange={(val) => setCustomerName(val.target.value)}/>
        </Form.Item>
        <Form.Item label="Customer Email" required>
          <Input type="email" onChange={(val) => setCustomerEmail(val.target.value)}/>
        </Form.Item>
        <Form.Item label="Customer Phone" required>
          <Input type="tel" onChange={(val) => setCustomerPhone(val.target.value)}/>
        </Form.Item>

        <Button type="primary" htmlType="submit" size="large" icon={<DollarOutlined />}>Pay with SSL Commerz</Button>
      </Form>
    </div>
  )
}

export default FormPage