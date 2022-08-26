import React from 'react';

export const TableRow = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.active}
            </td>
            <td>
                {props.deleted}
            </td>
        </tr>
    )
}