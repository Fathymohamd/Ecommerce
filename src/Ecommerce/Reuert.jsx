import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { CreatconxteApi } from './AuthConxte';

function Reuert({ children }) {

  const { creatconxtAli } = useContext(CreatconxteApi);
  const location = useLocation();

  if (!creatconxtAli) {
    return <Navigate to="/login" state={{ path: location.pathname }} />
  }

  return children;
}

export default Reuert;