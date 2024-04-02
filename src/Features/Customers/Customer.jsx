import { useSelector } from "react-redux"

function customer() {
    const customer = useSelector((store) => store.customer.fullname);
    // console.log(customer);
    return <h2>welcome </h2>
}
export default customer