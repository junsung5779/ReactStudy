import { Table } from 'react-bootstrap';

function Cart() {
    return(
        <div>
            <Table>
                <thread>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thread>
                <tbody>
                    <td>1</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>안녕</td>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart