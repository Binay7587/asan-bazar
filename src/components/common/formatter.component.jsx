import noImage from "../../assets/images/no-image.jpg";
import { capitalizeFirstLetter } from "../../config/helpers";

export const ImageFormatter = ({ url, noImageUrl = noImage }) => {
    return (<>
        <img src={url ? import.meta.env.VITE_BASE_URL + '/images' + url : noImageUrl} className="img img-fluid" alt="" />
    </>)
}

export const StatusBadgeFormatter = ({ status }) => {
    return (<>
        <span className={`badge bg-${status === 'active' ? 'success' : 'danger'}`}>{status ?? capitalizeFirstLetter(status)}</span>
    </>)
}

