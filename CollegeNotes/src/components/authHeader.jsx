import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="">
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-500">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-400 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-fuchsia-500 hover:text-fuchsia-700">
                {linkName}
            </Link>
            </p>
        </div>
    )
}