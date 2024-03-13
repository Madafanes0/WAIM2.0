
const Item = ({Links, title}) => {
    return (
    <ul>
        <h1 className = "mb-1 font-bold text-gray-400">{title}</h1>
        {
            Links.map((Link) => (
                <li className = "mb-1 font-semibold text-white py-2" key = {Link.name}>
                    <a href={Link.link}>{Link.name}</a>
                </li>
            ))
        }

    </ul>
    )
}

export default Item;