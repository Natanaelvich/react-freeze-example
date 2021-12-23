import { useContext } from "react";
import { CounntContextData, CountContext } from "../contexts/countContext";


export default function useCount(): CounntContextData {
  const context = useContext(CountContext);

  return context;
}