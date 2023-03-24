import { useParams, useSearchParams } from "react-router-dom";

const BrandDetail = () => {
    let params = useParams();
    let [query] = useSearchParams();
    console.log(query.get('price'));

    return (<>
        <h1>Brand Detail Page of {params.slug}</h1>
    </>)
}

export default BrandDetail