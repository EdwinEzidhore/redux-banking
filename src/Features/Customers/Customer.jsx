import { useSelector } from "react-redux"

function customer() {
    const customer = useSelector((store) => store.customer.fullname);
    return <h1>Welcome { customer}</h1>
}
export default customer