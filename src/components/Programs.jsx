import React from "react";
import {SiOpenaigym} from 'react-icons/si'
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../constant/data.js";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />
      
      <div className="programs__wrapper">
        {programs.map(({ id, title, info, path }) => {
          return (
            <Card className="programs__progam" key={id}>
              <span><SiOpenaigym/></span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm">
                Learn more <BsFillCaretRightFill />
              </Link>
            </Card>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default Programs;
