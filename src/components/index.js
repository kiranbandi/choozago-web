import React, {Component} from 'react';
export const Panel = (props) => {
  return (
     <div className="panel panel-primary">
      <div className="panel-heading">
        <h2 className="panel-title">{props.title}</h2>
      </div>
      <div className="panel-body">
       {props.children}
      </div>
      </div>
  )
};
export { default as TicketCard } from './TicketCard';
export { default as Modal } from './Modal';
export { default as NavBar } from './NavBar';
export { default as Container } from './Container';
