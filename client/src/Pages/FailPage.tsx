import { Result, Button } from "antd";
import { Link, useSearchParams } from "react-router-dom"

function FailPage() {

  let [searchParams] = useSearchParams();
  
  return (
    <Result 
    status="error"
    title="Make Payment Failed!"
    subTitle={`Order number: ${searchParams.get("orderId")} Amount: ${searchParams.get("amount")}`}
    extra={[
      <Link to="/">
        <Button type="primary">
          Try Again
        </Button>
      </Link>
    ]}
  />
  )
}

export default FailPage