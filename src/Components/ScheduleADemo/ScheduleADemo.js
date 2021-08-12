import { Form } from "../Form/Form";
import "./ScheduleADemo.css";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
// import logo from "../Image/schedule_a_demo.png";
export const ScheduleADemo = () => {
  return (
    <>
      <section className="main_section">
        <Header />
        <section className="content_section">
          <aside className="content_section_pic">
            <div>
              <img
                className="image"
                alt="logopic"
                src="https://www.botshot.in/images/png/schedule_a_demo-web.png"
              />
            </div>
            <div className="image_heading">
              <h1 className="upper_heading">
                Let’s Build <br />
                Success Together!
              </h1>
              <p className="lower_heading">
                Need help? Choose an option below and we’ll <br /> connect you.
              </p>
            </div>
          </aside>
          <aside className="content_section_form">
            <div>
              <Form />
            </div>
          </aside>
        </section>
        <section className="footer_section">
          <Footer />
        </section>
      </section>
    </>
  );
};
