import React, { useEffect, useState } from 'react'
import { Partner, PartnerData } from '../data/partner'

const Table = () => {
    const [data, setData] =  useState(Partner);
    

    const buildHead: Function = () => {
        return data.map(d => (
          <tr>
            <td>{d.name}</td>
            <td>{d.procedure}</td>
            <td>{d.status}</td>
            <td>{d.user.name}</td>
            <td>{d.partner.name}</td>
          </tr>
        ));
    }

  return (
    <div>
      <table>
        <thead>
          <th key={"nombre"}>Nombre</th>
          <th key={"tramite"}>Trámite</th>
          <th key={"status"}>Estatus</th>
          <th key={"user"}>Usuario</th>
          <th key={"partner"}>Socio</th>
        </thead>
        <tbody>
          { buildHead() }
        </tbody>
      </table>
    </div>
  )
}

export default Table
