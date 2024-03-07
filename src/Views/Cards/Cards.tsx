import React, { useEffect, useState } from "react";
import "./_style.scss"
import Button from "../../Components/Button/Button";
import { Tab, TabContainer } from "../../Components/Tabs/Tab";
import Carousel from "../../Components/Carousel/Carousel";
import Accordion from "../../Components/Accordion/Accordion";
import TransactionComponent from "../../Components/Transaction/TransactionComponent";
import { creditCards, transactionsSample } from "../../Utils/sample_data";
import { Card, CardType, Transaction } from "../../Utils/types";
import { useDispatch, useSelector } from "react-redux";
import { addCard, cardsReceived, removeCard, updateCard } from "../../store/cards/actions";
import { Col, Form, Modal, Row, Button as BsButton } from "react-bootstrap";
import { generateRandomCreditCardNumber, generateRandomCvv, generateRandomDate } from "../../Utils/helpers";
import { getCards } from "../../store/cards/selectors";

const Cards = (): React.JSX.Element => {

    const dispatch = useDispatch()
    const [lgShow, setLgShow] = useState<boolean>(false);
    const [lgcShow, setLgcShow] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [cvv, setCvv] = useState<number>(123);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const cardsList: Card[] = useSelector(getCards) || [];

    const [validated, setValidated] = useState(false);


    useEffect(() => {
        //Api call to get all the Cards
        dispatch(cardsReceived(creditCards))
    }, [])

    const onAddHandler = () => {
        setDate(generateRandomDate());
        setCardNumber(generateRandomCreditCardNumber());
        setCvv(generateRandomCvv());
        setLgShow(true)
    }

    const handleFreezeCard = () => {
        const card: Card = cardsList[activeIndex];
        card.frozen = !card.frozen;
        dispatch(updateCard(card, activeIndex))
    }



    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          
            event.stopPropagation();

        } else {
            const newCard: Card = {
                holderName: name,
                cvv: cvv,
                date: date,
                cardNumber: cardNumber,
                cardType: CardType.Visa,
                frozen: false
            }

            dispatch(addCard(newCard))
            setLgShow(false)
            setName('')
        }

        setValidated(true);



    };

    return <div className="cards_page">
        <div className={'mobile_logo'}>
            <img src="./logo_mobile.svg" alt="" />
        </div>
        <div className={'card_info'}>
            <div className="balance">
                <div data-testid = "cypress-card-test">Available Balance</div>

                <div className="balance_value">
                    <div className="dollars_design">$$ </div>
                    <div className="dollars_value">3,000</div>


                </div>
            </div>

            <div className="add_card">
                <Button content="New Card" icon="box" extraStyle={{ backgroundColor: 'var(--accent-color)' }} onClick={onAddHandler} />
                <div className={'add_mobile'} onClick={onAddHandler}>
                    <img className={'icon'} src='./box_blue.svg' alt="Icon" />
                    <span>New Card</span>
                </div>
            </div>
        </div>
        <div className={'card_details'}>
            <TabContainer>
                <Tab label="My Debit Cards" >
                    <div className="card_section">
                        <div className="card_physical">
                            <div>
                                <Carousel activeIndex={activeIndex} setActiveCard={(index: number) => setActiveIndex(index)} />
                            </div>
                            {cardsList.length > 0 && <div className="action-item-wrapper">
                                <div className="item-container">
                                    <div className="action-item" onClick={handleFreezeCard}>
                                        <div className="item-icon">
                                            <img src="./freezeCard.svg" alt="" />
                                        </div>
                                        <div className="item-name">
                                            {(cardsList.length && cardsList[activeIndex] && cardsList[activeIndex].frozen) ? 'Unfreeze Card' : 'Freeze Card'}
                                        </div>
                                    </div>

                                    <div className="action-item">
                                        <div className="item-icon">
                                            <img src="./spendLimit.svg" alt="" />
                                        </div>
                                        <div className="item-name"> Set Spend Limit </div>
                                    </div>

                                    <div className="action-item">
                                        <div className="item-icon">
                                            <img src="./gPay.svg" alt="" />
                                        </div>
                                        <div className="item-name"> Add to GPay </div>
                                    </div>

                                    <div className="action-item">
                                        <div className="item-icon">
                                            <img src="./replaceCard.svg" alt="" />
                                        </div>
                                        <div className="item-name"> Replace Card </div>
                                    </div>

                                    <div className="action-item" onClick={() => setLgcShow(true)}>
                                        <div className="item-icon">
                                            <img src="./deactivateCard.svg" alt="" />
                                        </div>
                                        <div className="item-name"> Cancel Card </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="card_transaction">
                            <Accordion icon={"group11889.svg"} header={'Card details'} toggleKey="firstChild">
                                <div></div>

                            </Accordion>

                            <Accordion icon={"group11889_transact.svg"} header={'Recent Transactions'} toggleKey="secondChild">
                                <div>
                                    <div style={{ padding: '24px 24px 0px 24px' }}>
                                        {transactionsSample.map((item: Transaction , index:number) => {
                                            return <TransactionComponent {...item} key = {'transaction-list-' + (index + 1)}/>
                                        })}
                                    </div>

                                    <div className={'all-transaction'}>
                                        View all card transactions
                                    </div>
                                </div>

                            </Accordion>

                        </div>

                    </div>
                </Tab>
                <Tab label="All Company Cards" disabled = {true}> No Data Available </Tab>

            </TabContainer>
        </div>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Add Card
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Holder's Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a name
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control value={cvv} disabled placeholder="Cvv" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control value={cardNumber} disabled placeholder="1234 5678 9478 1489" />
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control value={date} disabled />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Type</Form.Label>
                            <Form.Select defaultValue="VISA" disabled>
                                <option>VISA</option>
                                <option>MasterCard</option>
                                <option>Maestro</option>
                                <option>Rupay</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <BsButton variant="primary" type="submit">
                        Add
                    </BsButton>
                </Form>
            </Modal.Body>
        </Modal>


        <Modal
            size="lg"
            show={lgcShow}
            onHide={() => setLgcShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <h5>Are you sure you want to remove this card ? </h5>
            </Modal.Body>
            <Modal.Footer>
                <BsButton onClick={() => {
                    setLgcShow(false)
                }}>No</BsButton>

                <BsButton variant="danger" onClick={() => {
                    let isLast = activeIndex === cardsList.length-1;
                    dispatch(removeCard(activeIndex));
                    if(isLast) {
                        setActiveIndex(activeIndex-1)
                    }
                   
                    setLgcShow(false)
                }}>Remove</BsButton>
            </Modal.Footer>
        </Modal>
    </div>
}

export default Cards;