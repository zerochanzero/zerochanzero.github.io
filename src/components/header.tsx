import React, { ReactElement, useEffect, useState } from "react";
import "./header.css";
import desktopImg from "../assets/sold_desktop.png";
import mobileImg from "../assets/sold_mobile.png";
import Web3 from "web3";
import contractAbi from "./rinkeby-abi.json";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

declare const window: any;

const CONTRACT_ADDRESS = "0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6";
// const PAYABLE_AMOUNT = 0.069;

const Header = (): ReactElement => {
  const imageUrl = window.innerWidth >= 961 ? desktopImg : mobileImg;

  const [contract, setContract] = useState<any>(null);
  const [minted, setMinted] = useState<any>(null);

  useEffect(() => {
    const loadContractAbi = () => {
      const web3 = new Web3(Web3.givenProvider);
      try {
        const abi = JSON.parse(contractAbi);
        setContract(new web3.eth.Contract(abi, CONTRACT_ADDRESS));
      } catch (err) {}
    };
    loadContractAbi();
  }, []);

  useEffect(() => {
    if (contract != null) {
      const getNumMinted = async () => {
        const numMinted = await contract.methods.nextTokenId().call();
        setMinted(numMinted - 1);
      };
      getNumMinted();
    }
  }, [contract]);

  return (
    <>
      <img src={imageUrl} alt="" />
      <a
        href="https://opensea.io/collection/cryptoadz-by-gremplin"
        target="_blank"
        rel="noreferrer"
      >
        <div id="mintButton" />
      </a>
      <Link smooth={true} to="about">
        <div id="aboutButton" />
      </Link>
      <Link smooth={true} to="faq">
        <div id="faqButton" />
      </Link>
      <a href="https://discord.gg/PDVfDSDbcE" target="_blank" rel="noreferrer">
        <div id="discordButton" />
      </a>
      <div id="mintHeader">
        <FontAwesomeIcon id="ethLogo" icon={faEthereum} className="mr-2" />
        .069 each
      </div>
      <div id="mintCount">{minted}/6969</div>
    </>
  );
};

export default Header;
