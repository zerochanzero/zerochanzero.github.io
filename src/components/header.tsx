import React, { ReactElement, useEffect, useState } from "react";
import "./header.css";
import desktopImg from "../assets/toadz_desktop.png";
import mobileImg from "../assets/toadz_mobile.png";
import Web3 from "web3";
import contractAbi from "../santoadz.json";
import testAbi from "../santoadz-rinkeby.json";
import { Alert, Button, Form, Input, Modal, ModalBody, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

declare const window: any;

const CONTRACT_ADDRESS = "0x7FCBb823ff16110E5A14C3c897dC0af334423E4f";
// const PAYABLE_AMOUNT = 0.069;

const Header = (): ReactElement => {
  const imageUrl = window.innerWidth >= 961 ? desktopImg : mobileImg;

  const [account, setAccount] = useState<string>("");
  const [contract, setContract] = useState<any>(null);
  const [claimByIdModalIsOpen, setClaimByIdModalIsOpen] =
    useState<boolean>(false);
  const [checkToadModalIsOpen, setCheckToadModalIsOpen] =
    useState<boolean>(false);
  const [claimAllModalIsOpen, setClaimAllModalIsOpen] =
    useState<boolean>(false);

  const [idsToClaim, setIdsToClaim] = useState<string>("");
  const [idToCheck, setIdToCheck] = useState<string>("");
  const [isClaimed, setIsClaimed] = useState<any>(null);

  const [unclaimedIds, setUnclaimedIds] = useState<any>(null);

  const winterSymbols = [
    "🎅",
    "🎁",
    "🎄",
    "⛄",
    "🕎",
    "✡️",
    "❅",
    "❅",
    "❅",
    "❅",
    "❅",
  ];

  useEffect(() => {
    const getExistingWallet = async () => {
      const web3 = new Web3(Web3.givenProvider);
      let accounts: string[] = [];
      try {
        accounts = await web3.eth.getAccounts();
      } catch (err) {}
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    };
    const loadContractAbi = () => {
      const web3 = new Web3(Web3.givenProvider);
      try {
        const abi = JSON.parse(testAbi);
        setContract(new web3.eth.Contract(abi.abi, CONTRACT_ADDRESS));
      } catch (err) {
        console.log(err);
      }
    };
    getExistingWallet();
    loadContractAbi();
  }, []);

  useEffect(() => {
    const fetchUnclaimed = async () => {
      const unclaimed = await contract.methods
        .getAllUnclaimedTokensByWallet(account)
        .call();
      setUnclaimedIds(
        unclaimed.map((str: string) => +str).filter((num: number) => num !== 0)
      );
    };
    if (contract != null && account.length > 0) {
      fetchUnclaimed();
    }
  }, [contract, account]);

  const fetchUnclaimed = async () => {
    if (contract != null && account.length > 0) {
      const unclaimed = await contract.methods
        .getAllUnclaimedTokensByWallet(account)
        .call();
      setUnclaimedIds(
        unclaimed.map((str: string) => +str).filter((num: number) => num !== 0)
      );
    }
  };

  const handleAccountChange = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        setAccount("");
      });
    }
  };

  const connectWallet = async () => {
    await window.ethereum.enable();
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  if (window.ethereum) {
    handleAccountChange();
  } else {
    window.addEventListener("ethereum#initialized", handleAccountChange, {
      once: true,
    });

    // If the event is not dispatched by the end of the timeout,
    // the user probably doesn't have MetaMask installed.
    setTimeout(handleAccountChange, 3000); // 3 seconds
  }

  const claimById = async () => {
    if (contract != null && account.length > 0) {
      const split = idsToClaim
        .split(",")
        .map((str) => +str)
        .filter((num) => num !== 0);

      if (split.some((number) => isNaN(number))) {
        alert("Incorrect ID inputs.");
      }

      if (split.length === 1) {
        await contract.methods.claimOne(split[0]).send({
          from: account,
        });
      } else {
        await contract.methods.claimMany(split).send({
          from: account,
        });
      }
    }
  };

  const claimForAll = async () => {
    if (contract != null && account.length > 0 && unclaimedIds.length > 0) {
      if (unclaimedIds.length === 1) {
        await contract.methods.claimOne(unclaimedIds[0]).send({
          from: account,
        });
      } else {
        if (unclaimedIds.length > 20) {
          await contract.methods.claimMany(unclaimedIds.slice(0, 20)).send({
            from: account,
          });
        } else {
          await contract.methods.claimMany(unclaimedIds).send({
            from: account,
          });
        }
      }
    }
  };

  const checkToad = async () => {
    if (contract != null) {
      if (isNaN(+idToCheck)) {
        alert("Invalid id input");
      }
      let oneofones = [];
      for (let i = 1; i <= 56; i++) {
        oneofones.push(i * 1000000);
      }
      if (
        +idToCheck < 1 ||
        (+idToCheck > 6969 && !oneofones.includes(+idToCheck))
      ) {
        alert("Toad id does not exist");
      }
      if (contract != null) {
        const isClaimed = await contract.methods.claimed(+idToCheck).call();
        setIsClaimed(isClaimed);
      }
    }
  };

  return (
    <>
      <img src={imageUrl} alt="" />
      <div id="claimById" onClick={() => setClaimByIdModalIsOpen(true)} />
      <Modal
        isOpen={claimByIdModalIsOpen}
        toggle={() => setClaimByIdModalIsOpen(!claimByIdModalIsOpen)}
      >
        <ModalBody>
          <h2>Enter Your Toad Ids to Claim</h2>
          <p>e.g. "88, 4453, 12000000"</p>
          <Form
            row
            onSubmit={(e) => {
              e.preventDefault();
              claimById();
            }}
          >
            <Input
              type="textarea"
              id="claimIds"
              value={idsToClaim}
              onChange={(e) => {
                e.preventDefault();
                setIdsToClaim(e.target.value);
              }}
            />
            <Row className="w-100">
              <Button className="w-100 my-2">
                <h4 className="m-0">claim</h4>
              </Button>
            </Row>
          </Form>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={checkToadModalIsOpen}
        toggle={() => setCheckToadModalIsOpen(!checkToadModalIsOpen)}
      >
        <ModalBody>
          <h2>Enter a Toad's Id to Check</h2>
          <p>e.g. "4020"</p>
          <Form
            row
            onSubmit={(e) => {
              e.preventDefault();
              checkToad();
            }}
          >
            <Input
              type="textarea"
              id="checkIds"
              value={idToCheck}
              onChange={(e) => {
                e.preventDefault();
                setIdToCheck(e.target.value);
              }}
            />
            <Row className="w-100">
              <Button className="w-100 my-2">
                <h4 className="m-0">check</h4>
              </Button>
            </Row>
            {idToCheck != null && idToCheck !== "" && !isNaN(+idToCheck) && (
              <Row className="w-100">
                <img
                  src={`https://cryptoadz.mypinata.cloud/ipfs/QmfNm2KG4J5avadkx8Uvea8KW7CFVWYPYJ82LvP8KTm6bw/${idToCheck}.png`}
                  alt="toad"
                />
              </Row>
            )}
            {isClaimed != null && (
              <Row className="w-100">
                <Alert
                  color={isClaimed ? "warning" : "success"}
                  className="w-100 my-2"
                >
                  <h4 className="m-0">
                    {isClaimed ? (
                      <>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          className="mr-1"
                        />
                        This Toad Has Already Been Claimed
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="mr-1"
                        />
                        This Toad Is Available To Be Claimed
                      </>
                    )}
                  </h4>
                </Alert>
              </Row>
            )}
          </Form>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={claimAllModalIsOpen}
        toggle={() => setClaimAllModalIsOpen(!claimAllModalIsOpen)}
      >
        <ModalBody>
          <h2>Your Unclaimed Toad Ids</h2>
          <Form
            row
            onSubmit={(e) => {
              e.preventDefault();
              claimForAll();
            }}
          >
            <Input
              readOnly
              type="textarea"
              id="checkIds"
              value={unclaimedIds || "Data not found/loaded."}
            />
            <Row className="w-100">
              <Button className="w-100 my-2">
                <h4 className="m-0">claim</h4>
              </Button>
            </Row>
            {unclaimedIds && unclaimedIds.length > 20 && (
              <Row className="w-100">
                <Alert color="warning" className="w-100 my-2">
                  <h6 className="m-0">
                    A maximum of 20 MistleToadz will be claimed in this
                    transaction due to gas limits. You may claim more once the
                    first transaction has finished. You may have to refresh the
                    page after your claim transaction has succeeded to see
                    updated values in the box above
                  </h6>
                </Alert>
              </Row>
            )}
          </Form>
        </ModalBody>
      </Modal>

      {!(
        claimByIdModalIsOpen ||
        checkToadModalIsOpen ||
        claimAllModalIsOpen
      ) && (
        <div
          id="claimForAll"
          onClick={() => {
            fetchUnclaimed();
            setClaimAllModalIsOpen(true);
          }}
        />
      )}
      {!(
        claimByIdModalIsOpen ||
        checkToadModalIsOpen ||
        claimAllModalIsOpen
      ) && <div id="checkToad" onClick={() => setCheckToadModalIsOpen(true)} />}
      <div id="checkToadText">CHECK</div>
      <a href="https://opensea.io/" target="_blank" rel="noreferrer">
        <div id="santoadOpensea" />
      </a>
      {/* <Link smooth={true} to="about">
        <div id="aboutButton" />
      </Link> */}
      {/* <Link smooth={true} to="faq">
        <div id="faqButton" />
      </Link> */}
      <a href="https://discord.gg/PDVfDSDbcE" target="_blank" rel="noreferrer">
        <div id="discordButton" />
      </a>
      <div id="metamaskConnect" onClick={connectWallet} />
      {account !== "" ? (
        <div id="walletAddress">{account.slice(0, 9)}</div>
      ) : (
        <div id="walletAddress">CONNECT</div>
      )}
      {/* <div id="mintHeader">
        <FontAwesomeIcon id="ethLogo" icon={faEthereum} className="mr-2" />
        .069 each
      </div>
      <div id="mintCount">{minted}/6969</div> */}
      <div className="snowflakes">
        {Array.from(
          { length: 10 },
          () => winterSymbols[Math.floor(Math.random() * winterSymbols.length)]
        ).map((symbol, idx) => {
          return (
            <div key={idx} className="snowflake">
              {symbol}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
