import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { sessionState } from '../atoms';

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const [ session ] = useRecoilState(sessionState);

  if (!session.id || session.type === 2) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {children}
    </>
  );
};