import { useEffect, useState } from "react";
import { hi1, hi2, hi3, hi4, hi5, faq } from "./AllImages";
import { Collapse } from "react-bootstrap";

export const Description = () => {
  return (
    <div className="container">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="details">
          <div className="tab-details-content">
            <div className="header-area">
              <h3 className="title">
                2012 Ford Escape Hybrid (Brooklyn, NY 11214)
              </h3>
              <div className="item">
                <table className="product-info-table">
                  <tbody>
                    <tr>
                      <th>Condition</th>
                      <td>New</td>
                    </tr>
                    <tr>
                      <th>Mileage</th>
                      <td>15,000 miles</td>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>09-2017</td>
                    </tr>
                    <tr>
                      <th>Engine</th>
                      <td>I-4 1,5 l</td>
                    </tr>
                    <tr>
                      <th>Fuel</th>
                      <td>Regular</td>
                    </tr>
                    <tr>
                      <th>Transmission</th>
                      <td>Automatic</td>
                    </tr>
                    <tr>
                      <th>Color</th>
                      <td>Blue</td>
                    </tr>
                    <tr>
                      <th>Doors</th>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="item">
                <h5 className="subtitle">
                  NYC Fleet / DCAS units may be located at either of two
                  locations:
                </h5>
                <ul>
                  <li>Brooklyn, NY (1908 Shore Parkway)</li>
                  <li>Medford, NY (66 Peconic Ave)</li>
                </ul>
              </div>
              <div className="item">
                <h5 className="subtitle">This unit is located at:</h5>
                <ul>
                  <li>Kenben Industries Ltd.</li>
                  <li>1908 Shore Parkway</li>
                  <li>Brooklyn, NY 11214</li>
                </ul>
              </div>
              <div className="item">
                <h5 className="subtitle">
                  Acceptance of condition - buyer inspection/preview
                </h5>
                <p>
                  Vehicles and equipment often display significant wear and
                  tear. Assets are sold AS IS with no warranty, express or
                  implied, and we highly recommend previewing them before
                  bidding. The preview period is the only opportunity to inspect
                  an asset to verify condition and suitability. No refunds,
                  adjustments or returns will be entertained.
                </p>
                <p>
                  Vehicle preview inspections of the vehicle can be done at the
                  below location on Monday and Tuesday from 10am - 2pm. See
                  Preview Rules Here.
                </p>
                <ul>
                  <li>Kenben Industries Ltd.</li>
                  <li>1908 Shore Parkway</li>
                  <li>Brooklyn, NY 11214</li>
                </ul>
                <p>
                  BUYER is responsible for all storage fees at time of pick-up.
                  See above under IMPORTANT PICK-UP TIMES for specific
                  requirements for this asset, but generally assets must be
                  picked up within 2 business days of payment otherwise
                  additional storage fees will be applied.
                </p>
              </div>
              <div className="item">
                <h5 className="subtitle">Legal Notice</h5>
                <p>
                  Vehicles may not be driven off the lot except with a dealer
                  plate affixed. By law, vehicles are not permitted to be parked
                  on or to drive on the streets of New York without registration
                  and plates registered to the vehicle. If the buyer cannot
                  obtain the required registration and plates prior to pick up,
                  they should have the vehicle towed at their own expense. The
                  buyer should have the vehicle towed at their own expense.
                </p>
                <p>Condition: Untested - Sold As-Is</p>
                <p>
                  Employees of Sbidu, its subcontractors and affiliated
                  companies, employees of the NYC Government and those bidding
                  on behalf of PropertyRoom.com, its subcontractors and
                  affiliated companies and employees of the NYC Government are
                  not permitted to bid on or purchase NYC Fleet/DCAS assets.
                </p>
              </div>
              <div className="item">
                <h5 className="subtitle">Condition</h5>
                <p>
                  This ASSET is being listed on behalf of a law enforcement
                  agency or other partner ("SELLER") by PropertyRoom.com on a
                  Sold AS IS, WHERE IS, WITH ALL FAULTS basis, with no
                  representation or warranty from PropertyRoom.com or SELLER. In
                  many cases, the car, boat, truck, motorcycle, aircraft,
                  mowers/tractors, etc. ("ASSET") sold on PropertyRoom.com comes
                  from seizure or forfeiture, and the SELLER typically does not
                  possess use-based knowledge of the ASSET. Further,
                  PropertyRoom.com does not physically inspect the ASSET and
                  cannot attest to actual working conditions. PropertyRoom.com
                  and SELLER gather information about the ASSET from
                  authoritative sources; still, errors may appear from time to
                  time in the listing. PropertyRoom.com cautions any website
                  user, shopper, bidder, etc. ("BUYER") to attempt to confirm,
                  with us, information material to a bidding/purchasing
                  decision.
                </p>
              </div>
              <div className="item">
                <h5 className="subtitle">Bidding</h5>
                <p>
                  At this time Sbidu only accepts bidders from the United
                  States, Canada and Mexico on Vehicles and Heavy Industrial
                  Equipment. The Bid Now button will appear on auctions where
                  you are qualified to place a bid.
                </p>
              </div>
              <div className="item">
                <h5 className="subtitle">Buyer Responsibility</h5>
                <p>
                  The BUYER will receive an email notification from
                  PropertyRoom.com following the close of an auction. After
                  fraud verification and payment settlement, we will email the
                  BUYER instructions for retrieving the ASSET from the Will-Call
                  Location listed above.
                </p>
                <p>
                  All applicable shipping, logistics, transportation, customs,
                  fees, taxes, export/import activities and all associated costs
                  are the sole responsibility of the BUYER. No shipping,
                  customs, export or import assistance is available from Sbidu.
                </p>
                <p>
                  When applicable for a given ASSET, BUYER bears responsibility
                  for determining motor vehicle registration requirements in the
                  applicable jurisdiction as well as costs, including any fees,
                  registration fees, taxes, etc., owed as a result of BUYER
                  registering an ASSET; for example, BUYER bears sole
                  responsibility for all title/registration/smog and other such
                  fees.
                </p>
                <p>
                  BUYER is responsible for all storage fees at time of pick-up.
                  See above under IMPORTANT PICK-UP TIMES for specific
                  requirements for this asset, but generally assets must be
                  picked up within 2 business days of payment otherwise
                  additional storage fees will be applied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Delivery = () => {
  return (
    <div className="container">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="details">
          <div className="shipping-wrapper">
            <div className="item">
              <h5 className="title">shipping</h5>
              <div className="table-wrapper">
                <table className="shipping-table">
                  <thead>
                    <tr>
                      <th>Available delivery methods </th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Customer Pick-up (within 10 days)</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>Standard Shipping (5-7 business days)</td>
                      <td>Not Applicable</td>
                    </tr>
                    <tr>
                      <td>Expedited Shipping (2-4 business days)</td>
                      <td>Not Applicable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="item">
              <h5 className="title">Notes</h5>
              <p>
                Please carefully review our shipping and returns policy before
                committing to a bid. From time to time, and at its sole
                discretion, Sbidu may change the prevailing fee structure for
                shipping and handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BidHistory = () => {
  return (
    <div className="container">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="details">
          <div className="tab-pane fade show" id="history">
            <div className="history-wrapper">
              <div className="item">
                <h5 className="title">Bid History</h5>
                <div className="history-table-area">
                  <table className="history-table">
                    <thead>
                      <tr>
                        <th>Bidder</th>
                        <th>date</th>
                        <th>time</th>
                        <th>unit price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-history="bidder">
                          <div className="user-info">
                            <div className="thumb">
                              <img src={hi1} alt="history" />
                            </div>
                            <div className="content">Moses Watts</div>
                          </div>
                        </td>
                        <td data-history="date">06/16/2021</td>
                        <td data-history="time">02:45:25 PM</td>
                        <td data-history="unit price">$900.00</td>
                      </tr>
                      <tr>
                        <td data-history="bidder">
                          <div className="user-info">
                            <div className="thumb">
                              <img src={hi2} alt="history" />
                            </div>
                            <div className="content">Pat Powell</div>
                          </div>
                        </td>
                        <td data-history="date">06/16/2021</td>
                        <td data-history="time">02:45:25 PM</td>
                        <td data-history="unit price">$900.00</td>
                      </tr>
                      <tr>
                        <td data-history="bidder">
                          <div className="user-info">
                            <div className="thumb">
                              <img src={hi3} alt="history" />
                            </div>
                            <div className="content">Jack Rodgers</div>
                          </div>
                        </td>
                        <td data-history="date">06/16/2021</td>
                        <td data-history="time">02:45:25 PM</td>
                        <td data-history="unit price">$900.00</td>
                      </tr>
                      <tr>
                        <td data-history="bidder">
                          <div className="user-info">
                            <div className="thumb">
                              <img src={hi4} alt="history" />
                            </div>
                            <div className="content">Arlene Paul</div>
                          </div>
                        </td>
                        <td data-history="date">06/16/2021</td>
                        <td data-history="time">02:45:25 PM</td>
                        <td data-history="unit price">$900.00</td>
                      </tr>
                      <tr>
                        <td data-history="bidder">
                          <div className="user-info">
                            <div className="thumb">
                              <img src={hi5} alt="history" />
                            </div>
                            <div className="content">Marcia Clarke</div>
                          </div>
                        </td>
                        <td data-history="date">06/16/2021</td>
                        <td data-history="time">02:45:25 PM</td>
                        <td data-history="unit price">$900.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center mb-3 mt-4">
                    <a href="#0" className="button-3">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Questions = () => {
  const [dynamic, setDynamic] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDynamic("five");
  }, []);

  const dataFlow = (item) => {
    setOpen(!open);
    if (dynamic == "") {
      setDynamic(item);
    } else {
      setDynamic("");
    }
  };

  return (
    <div className="container">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="details">
          <div className="tab-pane fade show" id="questions">
            <h5 className="faq-head-title">Frequently Asked Questions</h5>
            <div className="faq-wrapper">
              <div
                className={
                  dynamic === "first" ? "faq-item open active" : "faq-item"
                }
                onClick={() => dataFlow("first")}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="faq-title">
                  <img src={faq} alt="css" />
                  <span
                    className="title"
                    style={{
                      color: `${dynamic === "first" ? "red" : "black"}`,
                    }}
                  >
                    How to start bidding?
                  </span>
                  <span className="right-icon"></span>
                </div>

                <Collapse in={dynamic === "first" ? true : false}>
                  <div id="example-collapse-text">
                    <p style={{ padding: "30px 0" }}>
                      All successful bidders can confirm their winning bid by
                      checking the “Sbidu”. In addition, all successful bidders
                      will receive an email notifying them of their winning bid
                      after the auction closes.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div
                className={
                  dynamic === "second" ? "faq-item open active" : "faq-item"
                }
                onClick={() => dataFlow("second")}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="faq-title">
                  <img src={faq} alt="css" />
                  <span
                    className="title"
                    style={{
                      color: `${dynamic === "second" ? "red" : "black"}`,
                    }}
                  >
                    Security Deposit / Bidding Power
                  </span>
                  <span className="right-icon"></span>
                </div>

                <Collapse in={dynamic === "second" ? true : false}>
                  <div id="example-collapse-text">
                    <p style={{ padding: "30px 0" }}>
                      All successful bidders can confirm their winning bid by
                      checking the “Sbidu”. In addition, all successful bidders
                      will receive an email notifying them of their winning bid
                      after the auction closes.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div
                className={
                  dynamic === "three" ? "faq-item open active" : "faq-item"
                }
                onClick={() => dataFlow("three")}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="faq-title">
                  <img src={faq} alt="css" />
                  <span
                    className="title"
                    style={{
                      color: `${dynamic === "three" ? "red" : "black"}`,
                    }}
                  >
                    Delivery time to the destination port
                  </span>
                  <span className="right-icon"></span>
                </div>

                <Collapse in={dynamic === "three" ? true : false}>
                  <div id="example-collapse-text">
                    <p style={{ padding: "30px 0" }}>
                      All successful bidders can confirm their winning bid by
                      checking the “Sbidu”. In addition, all successful bidders
                      will receive an email notifying them of their winning bid
                      after the auction closes.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div
                className={
                  dynamic === "four" ? "faq-item open active" : "faq-item"
                }
                onClick={() => dataFlow("four")}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="faq-title">
                  <img src={faq} alt="css" />
                  <span
                    className="title"
                    style={{
                      color: `${dynamic === "four" ? "red" : "black"}`,
                    }}
                  >
                    How to register to bid in an auction?
                  </span>
                  <span className="right-icon"></span>
                </div>

                <Collapse in={dynamic === "four" ? true : false}>
                  <div id="example-collapse-text">
                    <p style={{ padding: "30px 0" }}>
                      All successful bidders can confirm their winning bid by
                      checking the “Sbidu”. In addition, all successful bidders
                      will receive an email notifying them of their winning bid
                      after the auction closes.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div
                className={
                  dynamic === "five" ? "faq-item open active" : "faq-item"
                }
                onClick={() => dataFlow("five")}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="faq-title">
                  <img src={faq} alt="css" />
                  <span
                    className="title"
                    style={{
                      color: `${dynamic === "five" ? "red" : "black"}`,
                    }}
                  >
                    How will I know if my bid was successful?
                  </span>
                  <span className="right-icon"></span>
                </div>

                <Collapse in={dynamic === "five" ? true : false}>
                  <div id="example-collapse-text">
                    <p style={{ padding: "30px 0" }}>
                      All successful bidders can confirm their winning bid by
                      checking the “Sbidu”. In addition, all successful bidders
                      will receive an email notifying them of their winning bid
                      after the auction closes.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div
                className={
                  dynamic === "six" ? "faq-item open active" : "faq-item"
                }
                onClick={() => dataFlow("six")}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="faq-title">
                  <img src={faq} alt="css" />
                  <span
                    className="title"
                    style={{
                      color: `${dynamic === "six" ? "red" : "black"}`,
                    }}
                  >
                    What happens if I bid on the wrong lot?
                  </span>
                  <span className="right-icon"></span>
                </div>

                <Collapse in={dynamic === "six" ? true : false}>
                  <div id="example-collapse-text">
                    <p style={{ padding: "30px 0" }}>
                      All successful bidders can confirm their winning bid by
                      checking the “Sbidu”. In addition, all successful bidders
                      will receive an email notifying them of their winning bid
                      after the auction closes.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
