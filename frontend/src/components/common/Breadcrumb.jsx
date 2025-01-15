import { Link } from "react-router-dom";

const Breadcrumb = ({ links }) => {
    return (
        <nav aria-label="breadcrumb" className="py-5">
            <ol className="breadcrumb">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item${link.active ? " active" : ""}`}
                        aria-current={link.active ? "page" : undefined}
                    >
                        {link.active ? link.label : <Link to={link.to}>{link.label}</Link>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;