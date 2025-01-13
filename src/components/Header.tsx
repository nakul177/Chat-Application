import {Link} from 'react-router-dom';

interface header {
    heading?: string;
    paragraph?: string;
    linkName?: string;
    linkUrl?: string;
}


export default function Header({
                                   heading,
                                   paragraph,
                                   linkName,
                                   linkUrl="#"
                               } :header){
    return(
        <div className="mb-10">
            <h2 className="mt-6 text-center text-2xl font-medium text-text">
                {heading}
            </h2>
            <p className="mt-2 text-text text-center text-sm text-text mt-5">
                {paragraph} {' '}
                <Link
                    to={linkUrl}
                    className="font-medium text-link hover:linkHover"
                >
                    {linkName}
                </Link>
            </p>
        </div>
    )
}