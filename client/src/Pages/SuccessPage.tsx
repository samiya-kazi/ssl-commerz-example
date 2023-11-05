import { Button, Result } from "antd"
import { Link, useSearchParams } from "react-router-dom";

function SuccessPage() {

  let [searchParams] = useSearchParams();

  return (
    <Result 
      status="success"
      title="Successfully Made Payment!"
      subTitle={`Order number: ${searchParams.get("orderId")} Amount: ${searchParams.get("amount")}`}
      extra={[
        <Link to="/">
          <Button type="primary">
            Make Another Payment
          </Button>
        </Link>
      ]}
    />
  )
}

export default SuccessPage