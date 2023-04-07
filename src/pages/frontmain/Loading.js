/* eslint-disable*/
import { useState, CSSProperties } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export const Loading = () => {
  return (
  <>
     <div style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, .5)',
        zIndex: '1',
        display: 'block',    
    }}>
        <div className="sweet-loading" style={{
            position: "fixed",
            zindex: "1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
        <PuffLoader color="#008cff" size="60"/>
        </div>
    </div> 
  </>
  );
}