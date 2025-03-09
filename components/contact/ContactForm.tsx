import React from 'react'

export default function ContactForm() {
  return (
    <>
  {/* Contact form Start */}
  <div className="section mt-negative pt-0">
    <div className="container">
      <form
        className="sigma_box box-lg m-0 mf_form_validate ajax_submit"
        action="https://metropolitanhost.com/themes/themeforest/html/maharatri/sendmail.php"
        method="post"
        encType="multipart/form-data"
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <i className="far fa-user" />
              <input
                type="text"
                placeholder="Full Name"
                className="form-control dark"
                name="name"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <i className="far fa-envelope" />
              <input
                type="email"
                placeholder="Email Address"
                className="form-control dark"
                name="email"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <i className="far fa-pencil" />
              <input
                type="text"
                placeholder="Subject"
                className="form-control dark"
                name="Subesubject"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Enter Message"
            cols={45}
            rows={5}
            className="form-control dark"
            defaultValue={""}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="sigma_btn-custom" name="button">
            Submit Now
          </button>
          <div className="server_response w-100"></div>
        </div>
      </form>
    </div>
  </div>
  {/* Contact form End */}
</>

  )
}
