import React from 'react'

export default function Faq() {
  return (
    <>
  {/* Categories Start */}
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="accordion with-gap" id="generalFAQExample">
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalOne"
                aria-expanded="true"
                aria-controls="generalOne"
              >
                What is a Temple?
              </div>
              <div
                id="generalOne"
                className="collapse show"
                data-bs-parent="#generalFAQExample"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalTwo"
                aria-expanded="false"
                aria-controls="generalTwo"
              >
                Getting Started with an Temple
              </div>
              <div
                id="generalTwo"
                className="collapse"
                data-bs-parent="#generalFAQExample"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalThree"
                aria-expanded="false"
                aria-controls="generalThree"
              >
                Do i have the latest version?
              </div>
              <div
                id="generalThree"
                className="collapse"
                data-bs-parent="#generalFAQExample"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalSeven"
                aria-expanded="false"
                aria-controls="generalSeven"
              >
                How can I change header
              </div>
              <div
                id="generalSeven"
                className="collapse"
                data-bs-parent="#generalFAQExample"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion with-gap" id="generalFAQExample2">
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalFour"
                aria-expanded="true"
                aria-controls="generalFour"
              >
                How many times can I use a Temple?
              </div>
              <div
                id="generalFour"
                className="collapse show"
                data-bs-parent="#generalFAQExample2"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalFive"
                aria-expanded="false"
                aria-controls="generalFive"
              >
                How to migrate my website?
              </div>
              <div
                id="generalFive"
                className="collapse"
                data-bs-parent="#generalFAQExample2"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalSix"
                aria-expanded="false"
                aria-controls="generalSix"
              >
                How to migrate my website?
              </div>
              <div
                id="generalSix"
                className="collapse"
                data-bs-parent="#generalFAQExample2"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                data-bs-toggle="collapse"
                role="button"
                data-bs-target="#generalEight"
                aria-expanded="false"
                aria-controls="generalEight"
              >
                Changing the site footer
              </div>
              <div
                id="generalEight"
                className="collapse"
                data-bs-parent="#generalFAQExample2"
              >
                <div className="card-body">
                  Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                  Vishnu, Krishna etc. Proin eget tortor risus. Vivamus magna
                  justo, .People ask questions related to Hinduism
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Categories End */}
</>

  )
}
