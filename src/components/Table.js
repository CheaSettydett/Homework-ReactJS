export function Table({ products }) {
    return (
            <tbody>
                {
                    products.map(product =>
                        <tr>
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td><img src={product.images[2]} style={{ width: 100 }} alt=""></img></td>
                        </tr>
                    )
                }
            </tbody>
    )

}