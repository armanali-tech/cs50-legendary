import React, { useState } from "react";
// import { useRouter } from "next/router";
import Modal from "react-modal";
import Image from "next/image";

import { FaChevronCircleRight, FaEye } from "react-icons/fa";
import Separator from "../resource/Separator";

const WorkProjects = () => {
  // const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      background: "#0a192fdb",
    },
  };

  const baseUrl = process.env.NEXT_PUBLIC_MEDIA_URL;
  const admin = baseUrl + "img/projects/admin.png";
  const expertrons = baseUrl + "img/projects/expertrons.png";
  const explogin = baseUrl + "img/projects/explogin.png";
  const mentor = baseUrl + "img/projects/mentor.png";
  const lobby = baseUrl + "img/projects/lobby.png";
  const pocket = baseUrl + "img/projects/pocket.png";
  const profile = baseUrl + "img/projects/profile.png";
  const plancess = baseUrl + "img/projects/plancess.png";
  const cross = baseUrl + "img/projects/cross.svg";

  let img;
  const modal = (param) => {
    switch (selected) {
      case 1:
        img = admin;
        break;
      case 2:
        img = expertrons;
        break;
      case 3:
        img = explogin;
        break;
      case 4:
        img = mentor;
        break;
      case 5:
        img = lobby;
        break;
      case 6:
        img = pocket;
        break;
      case 7:
        img = profile;
        break;
      case 8:
        img = plancess;
        break;
      default:
        img = admin;
        break;
    }

    return (
      <Modal
        className="dialog"
        style={customStyles}
        isOpen={modalOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalOpen(false)}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-area">
          <button className="close-btn" onClick={() => setModalOpen(false)}>
            <Image className="close-cross" src={cross} width={20} height={20} />
          </button>
          <div>
            <Image
              className="selective-img"
              src={img}
              alt="Picture of the project"
              width={1040}
              height={580}
            />
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <section id="showcase">
      <Separator
        heading="My Portfolio"
        subheading="Check out some of my projects..."
      />
      <div className="projects">
        <div className="item">
          <span
            onClick={() => {
              setModalOpen(true);
              setSelected(1);
            }}
            className="pro-img"
          >
            <Image
              src={admin}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <span href="?!" className="btn-light">
            Visit Website
            <FaChevronCircleRight className="fa" />
          </span>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(2);
            }}
          >
            <Image
              src={expertrons}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://app.expertrons.com/"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(3);
            }}
          >
            <Image
              src={explogin}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://app.expertrons.com/sign-in"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(4);
            }}
          >
            <Image
              src={mentor}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://app.expertrons.com/"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(5);
            }}
          >
            <Image
              src={lobby}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://www.pocket52.com/"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(6);
            }}
          >
            <Image
              src={pocket}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://www.pocket52.com/"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(7);
            }}
          >
            <Image
              src={profile}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://www.pocket52.com/"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
        <div className="item">
          <span
            className="pro-img"
            onClick={() => {
              setModalOpen(true);
              setSelected(8);
            }}
          >
            <Image
              src={plancess}
              alt="Picture of the project"
              width={230}
              height={180}
            />
            <FaEye className="eye" />
          </span>
          <a
            href="https://www.plancess.com/products"
            className="btn-light"
            target="_blank"
          >
            Visit Website
            <FaChevronCircleRight className="fa" />
          </a>
        </div>
      </div>
      {modal()}
    </section>
  );
};

export default WorkProjects;
